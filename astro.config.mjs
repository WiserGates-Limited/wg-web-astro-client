/** @format */

import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import netlify from "@astrojs/netlify/functions";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import preact from "@astrojs/preact";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [mdx(), sitemap(), react(), compress(), preact()],
  output: "server",
  adapter: netlify(),
});