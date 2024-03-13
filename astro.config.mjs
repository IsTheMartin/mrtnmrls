import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://mrtnmrls.com",
  integrations: [mdx()],
  output: "server",
  adapter: netlify(),
  i18n: {
    defaultLocale: "en",
    locales: ["es", "en"]
  }
});