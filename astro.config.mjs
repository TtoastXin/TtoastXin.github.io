// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Deployment settings come from the environment so the same source builds for any host:
//   SITE_URL   public origin, e.g. https://example.com (enables canonical URLs and the sitemap)
//   BASE_PATH  sub-path for a GitHub Pages project site, e.g. /xin-zhao-site
const site = process.env.SITE_URL;

export default defineConfig({
  site,
  base: process.env.BASE_PATH ?? '/',
  integrations: [mdx(), ...(site ? [sitemap()] : [])],
});
