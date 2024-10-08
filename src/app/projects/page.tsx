import { Metadata } from "next";

import { DefaultOpenGraph } from "@/src/app/shared-metadata";
import { Container } from "@/src/components/Container";
import { Heading } from "@/src/components/Heading";
import { Products } from "@/src/components/Products";

export const metadata: Metadata = {
  title: "윤창현 - 프로젝트 & 포트폴리오",
  description: "프로젝트 & 포트폴리오 - Projects & Portfolio",
  openGraph: {
    ...DefaultOpenGraph,
    url: "https://changhyeon.net/projects",
    title: "윤창현 | Changhyeon (Kevin) Yoon",
    description: "프로젝트 & 포트폴리오 - Projects & Portfolio",
  },
};

export default function Projects() {
  return (
    <Container>
      <span className='text-4xl font-Tossface'>🚀</span>
      <Heading className='font-black mb-10'>Projects / Portfolio</Heading>

      <Products />
    </Container>
  );
}
