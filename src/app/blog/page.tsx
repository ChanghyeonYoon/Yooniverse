import { Metadata } from "next";

import { DefaultOpenGraph } from "@/src/app/shared-metadata";
import { Blogs } from "@/src/components/Blogs";
import { Container } from "@/src/components/Container";
import { Heading } from "@/src/components/Heading";
import { Paragraph } from "@/src/components/Paragraph";

import { getAllBlogs } from "@/lib/getAllBlogs";

export const metadata: Metadata = {
  title: "윤창현 - 블로그",
  description: "블로그 - Blog",
  openGraph: {
    ...DefaultOpenGraph,
    url: "https://changhyeon.net/blog",
    title: "윤창현 | Changhyeon (Kevin) Yoon",
    description: "블로그 - Blog",
  },
};

export default async function Blog() {
  const blogs = await getAllBlogs();
  const data = blogs.map(({ component, ...meta }) => meta);

  return (
    <Container>
      <span className='text-4xl font-Tossface'>🖌️</span>
      <Heading className='font-black pb-4'>Blog</Heading>
      <Paragraph className='text-slate-800'>개발과 관련된 내용 뿐 아니라 여러 주제에 대한 글을 공유합니다.</Paragraph>

      <Blogs blogs={data} />
    </Container>
  );
}
