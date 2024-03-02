import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { RSS } from "src/constants";
import { formatBodyForRSS } from "src/functions";

posts.sort(
  (a, b) =>
    Date.parse(b.data.pubDate.toString()) -
    Date.parse(a.data.pubDate.toString())
);
const lastPubDate = posts[0].data.pubDate;

export async function GET(context) {
  const posts = await getCollection("posts");

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
