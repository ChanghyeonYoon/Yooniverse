import { Metadata } from "next";

import { DefaultOpenGraph } from "@/src/app/shared-metadata";

import Content from "./content.mdx";

export const metadata: Metadata = {
  title: "Web Worker를 사용한 Next.js 성능 최적화",
  description:
    "Partytown를 활용한 Main Thread가 아닌 Web Worker에서 Third-Party 를 작동하게하여 Next.js 성능 최적화 하기",
  keywords: ["Next.js", "Partytown", "Web Worker", "Optimization"],
  openGraph: {
    ...DefaultOpenGraph,
    url: "https://changhyeon.net/blog/web-worker",
    title: "Web Worker를 사용한 Next.js 성능 최적화",
    description:
      "Partytown를 활용한 Main Thread가 아닌 Web Worker에서 Third-Party 를 작동하게하여 Next.js 성능 최적화 하기",
    images: [
      {
        url: "https://changhyeon.net/api/og?path=/blog/web-worker",
        width: 1200,
        height: 630,
        alt: "Web Worker를 사용한 Next.js 성능 최적화",
      },
    ],
  },
};

export default function Page() {
  return <Content />;
}
