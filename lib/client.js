// import sanityClient from '@sanityecommerce/client';
// import imageUrlBuilder  from '@sanity/image-url';
// import sanityClient from '@sanity/client';

import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId:'l137xpje',
    dataset:'production',
    apiVersion:'2023-09-15',
    useCdn: true,
    token: process.env.sanitytoken
});



const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);



