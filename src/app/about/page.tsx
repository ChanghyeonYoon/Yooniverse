import { Metadata } from "next";
import Image from "next/image";
import React from "react";

import { DefaultOpenGraph } from "@/src/app/shared-metadata";
import About from "@/src/components/About";
import { Container } from "@/src/components/Container";
import { Heading } from "@/src/components/Heading";
import { prefix } from "@/src/constants/prefix";

export const metadata: Metadata = {
  title: "About | DatadogKRUG",
  description:
    "DatadogKRUG (Datadog Korea User Group)은 Monitoring, Observability와 관련된 모든 주제에 대해서 지식을 교류하며 함께 성장하는 모임입니다.",
  openGraph: DefaultOpenGraph,
};

export default function AboutPage() {
  return (
    <Container>
      <Image
        src={`${prefix}/images/logos/logo.png`}
        alt='Avatar'
        height='100'
        width='100'
        className='object-cover object-top rounded-full flex-shrink-0'
      />
      <Heading className='font-black'>DatadogKRUG</Heading>
      <About />
    </Container>
  );
}
