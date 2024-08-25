import { Metadata } from "next";
import Image from "next/image";
import React from "react";

import { DefaultOpenGraph } from "@/src/app/shared-metadata";
import About from "@/src/components/About";
import { Container } from "@/src/components/Container";
import { Heading } from "@/src/components/Heading";
import { prefix } from "@/src/constants/prefix";

export const metadata: Metadata = {
  title: "윤창현 | Changhyeon (Kevin) Yoon",
  description:
    "안녕하세요! 여행을 좋아하는 개발자 윤창현 입니다. Hello! I'm Changhyeon (Kevin) Yoon, a developer who loves to travel.",
  openGraph: {
    ...DefaultOpenGraph,
    url: "https://changhyeon.net/about",
    title: "윤창현 | Changhyeon (Kevin) Yoon",
    description:
      "안녕하세요! 여행을 좋아하는 개발자 윤창현 입니다. Hello! I'm Changhyeon (Kevin) Yoon, a developer who loves to travel.",
  },
};

export default function AboutPage() {
  return (
    <Container>
      <Heading className='font-black mt-5'>윤창현 - Changhyeon (Kevin) Yoon</Heading>
      <About />
    </Container>
  );
}
