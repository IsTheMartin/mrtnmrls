import rss from '@astrojs/rss';
import { getCollection } from "astro:content";

export async function GET(context) {

    const posts = await getCollection('posts');

    return rss({
        title: 'Martin Morales',
        description: 'A small collection of thoughts, experiences and other things.',
        site: context.site,
        items: posts.map((post) => ({
            title: post.data.title,
            author: post.data.author,
            pubDate: post.data.pubDate,
            link: `/${post.slug}`,
            description: post.body
        })),
        customData: `<language>en-us</language>`,
    });
}