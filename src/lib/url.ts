const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prefix an internal path with the configured base path. */
export const withBase = (path: string) => `${base}/${path.replace(/^\//, '')}`;

export const formatMonth = (date: Date) =>
  date.toLocaleDateString('en-GB', { year: 'numeric', month: 'short', timeZone: 'UTC' });
