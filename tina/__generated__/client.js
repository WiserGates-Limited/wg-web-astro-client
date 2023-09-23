import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'https://content.tinajs.io/1.4/content/4944da81-18c9-4099-ae88-fccb46905e72/github/main', token: 'wg-web-astro-client', queries });
export default client;
  