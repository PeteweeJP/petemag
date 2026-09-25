// Prefix internal links and asset paths with the deploy base ("/petemag" during preview, "/" later).
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const url = (path = '') => `${base}/${path.replace(/^\//, '')}`;
