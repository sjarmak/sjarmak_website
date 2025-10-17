import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://sjarmak.ai',
  integrations: [react(), tailwind(), mdx(), sitemap()],
  vite: {
    resolve: {
      alias: {
        '@': '/src'
      }
    }
  }
});
