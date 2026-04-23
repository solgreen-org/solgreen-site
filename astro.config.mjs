// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || 'https://solgreen.com.br',
  base: process.env.BASE_PATH || '/solgreen-site',
  integrations: [react(), sitemap()],
  output: 'server',
  adapter: node({ mode: 'standalone' }),

  vite: {
    plugins: [tailwindcss()]
  }
});
