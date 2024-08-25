import { Metadata } from "next";

import { Container } from "@/src/components/Container";
import { Heading } from "@/src/components/Heading";
import { Products } from "@/src/components/Products";

export const metadata: Metadata = {
  title: "Projects | John Doe",
  description:
    "John Doe is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
};

export default function Projects() {
  return (
    <Container>
      <span className='text-4xl'>⚡</span>
      <Heading className='font-black mb-10'> What I&apos;ve been working on</Heading>

      <Products />
    </Container>
  );
}
