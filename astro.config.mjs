// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://r66cha.github.io',
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  // проект переименован из Forposter во Flowposter: старые ссылки ведут на новую страницу
  redirects: {
    '/projects/forposter': '/projects/flowposter/',
    '/en/projects/forposter': '/en/projects/flowposter/',
  },
});
