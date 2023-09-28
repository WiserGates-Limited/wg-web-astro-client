/** @format */

// /my-blog/frontend/src/sanity/urlForImage.js

import { useSanityClient } from "astro-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const imageBuilder = imageUrlBuilder(useSanityClient());

export function urlForImage(source) {
  return imageBuilder.image(source);
}
