// Prefix internal links and asset paths with the deploy base ("/petemag" during preview, "" after cutover).
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const url = (path = '') => `${base}/${path.replace(/^\//, '')}`;

// Clean public path of the current page: "/petemag/paradise.html" -> "/petemag/paradise", "/petemag/index" -> "/petemag/".
export const pagePath = (current: URL) => current.pathname.replace(/\.html$/, '').replace(/\/index$/, '/');
