import { Metadata } from "next";
import { redirect } from "next/navigation";

import { DefaultOpenGraph } from "@/src/app/shared-metadata";
import { Container } from "@/src/components/Container";
import { SingleEvent } from "@/src/components/Event";
import { Events } from "@/src/constants/events";
import { prefix } from "@/src/constants/prefix";
import { Event } from "@/src/types/products";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const event = Events.find((p) => p.slug === slug) as Event | undefined;

  if (event) {
    return {
      title: event.title,
      description: event.description,
      openGraph: {
        type: "website",
        locale: "ko_KR",
        url: `https://datadogkrug.vercel.app/events/${slug}`,
        images: [
          {
            url: `${prefix}/images/og/${slug}.png`,
            width: 1200,
            height: 630,
            alt: event.title,
          },
        ],
      },
    };
  } else {
    return {
      title: "Events | DatadogKRUG",
      description:
        "DatadogKRUG (Datadog Korea User Group)은 Monitoring, Observability와 관련된 모든 주제에 대해서 지식을 교류하며 함께 성장하는 모임입니다.",
      openGraph: DefaultOpenGraph,
    };
  }
}

export default function SingleProjectPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const event = Events.find((p) => p.slug === slug);

  if (!event) {
    redirect("/events");
  }

  return (
    <Container>
      <SingleEvent event={event} />
    </Container>
  );
}
