import { Metadata } from "next";

import { DefaultOpenGraph } from "@/src/app/shared-metadata";

import Content from "./content.mdx";

export const metadata: Metadata = {
  title: "Cluster Mode를 통해 Next.js를 효과적으로 운영하는 방법",
  description:
    "Node.js로 작동하는 Next.js 특성 상 기본적으로 싱글스레드로 작동합니다. 이 글에서는 Node.js의 Cluster Module과 PM2 Cluster Mode에 대해 각각 알아보겠습니다.",
  keywords: ["Next.js", "Node.js", "Cluster", "PM2", "Fargate", "Load Balancing"],
  openGraph: {
    ...DefaultOpenGraph,
    url: "https://changhyeon.net/blog/node-js-clustering",
    title: "Cluster Mode를 통해 Next.js를 효과적으로 운영하는 방법",
    description:
      "Node.js로 작동하는 Next.js 특성 상 기본적으로 싱글스레드로 작동합니다. 이 글에서는 Node.js의 Cluster Module과 PM2 Cluster Mode에 대해 각각 알아보겠습니다.",
    images: [
      {
        url: "https://changhyeon.net/api/og?path=/blog/node-js-clustering",
        width: 1200,
        height: 630,
        alt: "Cluster Mode를 통해 Next.js를 효과적으로 운영하는 방법",
      },
    ],
  },
};

export default function Page() {
  return <Content />;
}
