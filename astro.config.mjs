import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  output: "hybrid",
  adapter: netlify(),
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"]
  }
});