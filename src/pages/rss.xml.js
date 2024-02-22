import rss from '@astrojs/rss';
import { getCollection } from "astro:content";
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export async function GET(context) {

    const posts = await getCollection('post');

    return rss({
        title: 'Martin Morales RSS Feed',
        description: 'A small collection of thoughts, experiences and other things.',
        site: context.site,
        items: posts.map((post) => ({
            title: post.data.title,
            pubDate: post.data.date,
            link: `/${post.slug}`,
            description: `<![CDATA[${sanitizeHtml(parser.render(post.body))}]]>`
        })),
        customData: `<language>en-us</language>`,
    });
}