import { Metadata } from "next";

import { DefaultOpenGraph } from "@/src/app/shared-metadata";
import { Container } from "@/src/components/Container";
import { Events } from "@/src/components/Events";
import { Heading } from "@/src/components/Heading";
import { Paragraph } from "@/src/components/Paragraph";

export const metadata: Metadata = {
  title: "Events | DatadogKRUG",
  description: "DatadogKRUG의 행사 목록 입니다.",
  openGraph: DefaultOpenGraph,
};

export default function Projects() {
  return (
    <Container>
      <span className='text-4xl'>📆</span>
      <Heading className='font-black mb-10'>Events</Heading>
      <Paragraph className='text-slate-800'>DatadogKRUG의 행사 목록 입니다.</Paragraph>
      <Paragraph className='mb-10'>DatadogKRUG Evnet List</Paragraph>

      <Events />
    </Container>
  );
}
