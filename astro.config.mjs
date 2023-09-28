/** @format */

import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import netlify from "@astrojs/netlify/functions";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import sanity from "astro-sanity";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [mdx(), sitemap(), react(), sanity({
    projectId: "k04j1s42",
    dataset: "production",
    apiVersion: "2023-02-08",
    useCdn: false
  }), compress()]
  // output: "server",
  // adapter: netlify(),
});