import { Metadata } from "next";

import { DefaultOpenGraph } from "@/src/app/shared-metadata";
import { Container } from "@/src/components/Container";
import { Heading } from "@/src/components/Heading";
import { Products } from "@/src/components/Products";

export const metadata: Metadata = {
  title: "윤창현 - 발표자료",
  description: "발표자료 - Presentation",
  openGraph: {
    ...DefaultOpenGraph,
    url: "https://changhyeon.net/presentations",
    title: "윤창현 | Changhyeon (Kevin) Yoon",
    description: "발표자료 - Presentation",
  },
};

export default function Projects() {
  return (
    <Container>
      <span className='text-4xl font-Tossface'>🗣️</span>
      <Heading className='font-black mb-10'>발표자료 - Presentation</Heading>
    </Container>
  );
}
