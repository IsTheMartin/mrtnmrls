import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
import { getCollection } from "astro:content";

// markdownIt reference - https://markdown-it.github.io/markdown-it/#MarkdownIt.new
const markdownParser = new MarkdownIt({
    html: true,
    linkify: true,
});

// sanitizeHtml reference - https://github.com/apostrophecms/sanitize-html#readme

export function formatBodyForRSS(dirtyBody) {
    const markdownBody = markdownParser.render(dirtyBody);
    const formattedBody = markdownBody.replaceAll('src="/images','src="https://mrtnmrls.com/images');
    const sanitizedHtml = sanitizeHtml(formattedBody, {
        allowedTags: ["img", "br", "a"],
        allowedAttributes: {
            a: [ 'href', 'name', 'target' ],
            img: [ 'src', 'srcset', 'alt', 'title', 'width', 'height', 'loading', 'style' ]
          },
    });
    return `<![CDATA[${sanitizedHtml}]]>`
};

export function getHomeLink(lang) {
    return lang == "en" ? "/en" : "/"
}

export async function getAllPosts() {
    const posts = await getCollection("posts");

    posts.sort(
        (a, b) =>
          Date.parse(b.data.pubDate.toString()) -
          Date.parse(a.data.pubDate.toString())
      );

    return posts;
}

export async function getPostsByLanguage(lang) {
    const posts = await getCollection("posts", ({ data }) => {
        return data.lang == lang;
    });

    posts.sort(
        (a, b) =>
          Date.parse(b.data.pubDate.toString()) -
          Date.parse(a.data.pubDate.toString())
      );

    return posts;
}