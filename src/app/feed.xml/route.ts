import { DefaultMetadata, DefaultOpenGraph } from "@/src/app/shared-metadata";
import { Events } from "@/src/constants/events";
import RSS from "rss";

import { getAllBlogs } from "@/lib/getAllBlogs";

export async function GET() {
  const feed = new RSS({
    title: DefaultMetadata.title,
    description: DefaultMetadata.description,
    image_url: `${DefaultOpenGraph.url}/images/OG.png`,
    feed_url: `${DefaultOpenGraph.url}/feed.xml`,
    site_url: DefaultOpenGraph.url,
    copyright: `Copyright ${new Date().getFullYear().toString()}`,
    language: "ko-KR",
    pubDate: new Date().toUTCString(),
    ttl: 60,
  });

  const blogs = await getAllBlogs();
  const events = Events;

  events.map((event: any) => {
    feed.item({
      title: event.title,
      description: event.description,
      url: `${DefaultOpenGraph.url}/events/${event.slug}`,
      date: new Date(event.created_at),
    });
  });

  // blogs.map((post: any) => {
  //   feed.item({
  //     title: post.제목,
  //     description: post.내용,
  //     url: post.주소,
  //     date: post.등록일자,
  //   });
  // });

  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
