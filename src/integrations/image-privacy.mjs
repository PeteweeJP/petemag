// Stops the build if a JPEG in public/images still carries GPS coordinates
// (phones embed where a photo was taken). In `npm run dev` it only warns.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// True if the JPEG's EXIF data includes a GPS latitude.
export function hasGps(buf) {
  try {
    if (buf[0] !== 0xff || buf[1] !== 0xd8) return false;
    let i = 2;
    while (i + 4 <= buf.length && buf[i] === 0xff) {
      const marker = buf[i + 1];
      if (marker === 0xda || marker === 0xd9) return false; // image data / end: no more metadata
      const len = buf.readUInt16BE(i + 2);
      if (marker === 0xe1 && buf.toString('latin1', i + 4, i + 10) === 'Exif\0\0') {
        const t = i + 10;
        const le = buf.toString('latin1', t, t + 2) === 'II';
        const u16 = (o) => (le ? buf.readUInt16LE(o) : buf.readUInt16BE(o));
        const u32 = (o) => (le ? buf.readUInt32LE(o) : buf.readUInt32BE(o));
        const tags = (ifd) => Array.from({ length: u16(ifd) }, (_, e) => ifd + 2 + e * 12);
        const gpsEntry = tags(t + u32(t + 4)).find((e) => u16(e) === 0x8825);
        if (!gpsEntry) return false;
        return tags(t + u32(gpsEntry + 8)).some((e) => u16(e) === 0x0002); // GPSLatitude
      }
      i += 2 + len;
    }
  } catch {
    // Malformed metadata: not our problem to diagnose here.
  }
  return false;
}

function* jpegs(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* jpegs(full);
    else if (/\.jpe?g$/i.test(entry.name)) yield full;
  }
}

export default function imagePrivacy() {
  return {
    name: 'image-privacy',
    hooks: {
      'astro:config:setup': ({ config, command, logger }) => {
        const publicDir = fileURLToPath(config.publicDir);
        const found = [...jpegs(path.join(publicDir, 'images'))]
          .filter((file) => hasGps(fs.readFileSync(file)))
          .map((file) => path.relative(publicDir, file));
        if (!found.length) return;
        const message =
          `These photos contain GPS location data:\n  ${found.join('\n  ')}\n` +
          'Remove it before publishing: open the photo in Preview → Tools → Show Inspector → ⓘ tab → GPS → ' +
          '"Remove Location Info", then save. (Or ask Claude to strip it.)';
        if (command === 'build') throw new Error(message);
        logger.warn(message);
      },
    },
  };
}
