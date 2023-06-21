import { SanityClient } from "@sanity/client";
// import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";

const client = SanityClient({
    projectId: 'liys4mws',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2021-10-21'
})


// const builder = ImageUrlBuilder(client);
export const urlFor = source => builder.image(source);

// NOTE: remember to add access via CORS to your application before tring to get information for sanity.

export default client;