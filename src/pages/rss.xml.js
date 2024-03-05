import rss from "@astrojs/rss";
import { RSS } from "src/constants";
import { formatBodyForRSS, getAllPosts } from "src/functions";

export async function GET(context) {
  const posts = await getAllPosts();
  const lastPubDate = posts[0].data.pubDate;

  return rss({
    title: RSS.title,
    description: RSS.description,
    site: RSS.site,
    copyright: RSS.copyright,
    managingEditor: RSS.managingEditor,
    webMaster: RSS.webMaster,
    lastBuildDate: lastPubDate,
    generator: RSS.generator,
    docs: RSS.docs,
    ttl: RSS.ttl,
    items: posts.map((post) => ({
      title: post.data.title,
      author: post.data.author,
      pubDate: post.data.pubDate,
      link: `/${post.slug}`,
      description: formatBodyForRSS(post.body),
    })),
    customData: RSS.language,
  });
}
