import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/repository-name',
  integrations: [mdx()],
  output: 'static'
});