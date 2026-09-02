const baseUrl = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

/**
 * Prefixes a site-relative path with Astro's configured base path.
 * External URLs should be rendered directly and must not pass through this helper.
 */
export function sitePath(path = ''): string {
  return `${baseUrl}${path.replace(/^\/+/, '')}`;
}
