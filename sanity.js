import { createClient } from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

const client = (createClient = {
  projectId: "liys4mws",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-03-03",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

//NOTE: U NEED TO GIVE ACCESS VIA CORS TO THE BACKEND

export default client;
