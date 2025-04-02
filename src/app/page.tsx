import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Blogs } from "@/src/components/Blogs";
import { Container } from "@/src/components/Container";
import { Heading } from "@/src/components/Heading";
import { Highlight } from "@/src/components/Highlight";
import { Paragraph } from "@/src/components/Paragraph";
import { TechStack } from "@/src/components/TechStack";
import { prefix } from "@/src/constants/prefix";

import { getAllBlogs } from "@/lib/getAllBlogs";

export default async function Home() {
  const blogs = await getAllBlogs();
  const data = blogs.map(({ component, ...meta }) => meta).slice(0, 5);
  return (
    <Container>
      <Image
        src={`${prefix}/images/profile_large.jpg`}
        alt='Avatar'
        height={200}
        width={200}
        className='object-cover object-middle rounded-xl flex-shrink-0 w-52 h-52 mb-5'
      />
      <div className='flex items-center gap-2'>
        <span className='text-4xl font-Tossface'>🇰🇷</span>
        <Heading className='font-black'>Changhyeon (Kevin) Yoon</Heading>
      </div>
      <Paragraph className='max-w-xl mt-5'>
        안녕하세요! 5년차 &nbsp;
        <Highlight>Software Engineer</Highlight> <b>윤창현</b> 입니다.
      </Paragraph>
      <Paragraph className='max-w-xl mt-4'>
        현재{" "}
        <Link href='https://miricanvas.com' target='_blank' className='cursor-pointer hover:underline font-bold'>
          미리캔버스
        </Link>
        를 운영하고 있는 <b>미리디</b>
        에서 <Highlight>Site Reliability Engineer</Highlight>로 근무하고 있습니다.
      </Paragraph>
      <Paragraph className='max-w-xl mt-5 mb-10'>
        <span className='font-semibold italic mr-1'>
          누구나 언제든지 편하고 자유롭게 쓸 수 있는 기술이야말로 가장 뛰어난 기술
        </span>
        이라는 철학으로 개발하고 있습니다.
      </Paragraph>

      <Heading as='h2' className='font-black text-lg md:text-lg lg:text-lg mt-20 mb-4'>
        Recent Posts
      </Heading>
      <Blogs blogs={data} />
      <TechStack />
    </Container>
  );
}
