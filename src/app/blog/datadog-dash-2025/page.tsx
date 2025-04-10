import { Metadata } from "next";

import { DefaultOpenGraph } from "@/src/app/shared-metadata";

import Content from "./content.mdx";

export const metadata: Metadata = {
  title: "Datadog의 가장 큰 연례행사 DASH 2025",
  description:
    "Datadog은 매년 뉴욕에서 DASH 2025라는 컨퍼런스를 진행합니다. DASH 2024에 참석해 본 후기와 꿀팁들에 대해 알려드립니다.",
  keywords: ["Datadog", "DASH 2025", "DASH 2024", "Datadog Conference", "New York", "Datadog Ambassador"],
  openGraph: {
    ...DefaultOpenGraph,
    url: "https://changhyeon.net/blog/datadog-dash-2025",
    title: "Datadog의 가장 큰 연례행사 DASH 2025",
    description:
      "Datadog은 매년 뉴욕에서 DASH 2025라는 컨퍼런스를 진행합니다. DASH 2024에 참석해 본 후기와 꿀팁들에 대해 알려드립니다.",
    images: [
      {
        url: "https://changhyeon.net/api/og?path=/blog/datadog-dash-2025",
        width: 1200,
        height: 630,
        alt: "Datadog DASH 2025",
      },
    ],
  },
};

export default function Page() {
  return <Content />;
}
