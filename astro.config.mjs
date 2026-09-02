// @ts-check
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jirihanzelka.github.io',
  base: '/tj-sokol-bernartice-web',
  trailingSlash: 'always',
  output: 'static',
  integrations: [sitemap()],
});
