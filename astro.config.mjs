// @ts-check
import { defineConfig } from 'astro/config';

// Your repo is named <username>.github.io, so the site is served from the root
// and no `base` is needed. Swap in your real username (or your custom domain later).
export default defineConfig({
  site: 'https://USERNAME.github.io',
});
