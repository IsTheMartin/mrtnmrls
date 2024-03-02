import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';

const markdownParser = new MarkdownIt({
    html: true,
    linkify: true
});

export function formatBodyForRSS(dirtyBody) {
    const markdownBody = markdownParser.render(dirtyBody);
    const formattedBody = markdownBody.replaceAll('src="/images','src="https://mrtnmrls.com/images');
    console.log(formattedBody);
    const sanitizedHtml = sanitizeHtml(formattedBody, {
        allowedTags: ["img", "br", "a"],
        allowedAttributes: {
            a: [ 'href', 'name', 'target' ],
            // We don't currently allow img itself by default, but
            // these attributes would make sense if we did.
            img: [ 'src', 'srcset', 'alt', 'title', 'width', 'height', 'loading', 'style' ]
          },
    });
    return `<![CDATA[${sanitizedHtml}]]>`
};