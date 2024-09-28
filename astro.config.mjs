// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site:'https://adigithub10.github.io',
  // base :'/https://github.com/adigithub10/AdiPortfolio',

  integrations: [tailwind()]
});