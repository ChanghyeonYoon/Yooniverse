import { prefix } from "@/src/constants/prefix";

export const DefaultOpenGraph = {
  type: "website",
  locale: "ko_KR",
  url: "https://changhyeon.net",
  title: "Yooniverse",
  description:
    "윤창현 | Changhyeon (Kevin) Yoon - Software Engineer",
  images: [
    {
      url: `${prefix}/images/OG.png`,
      width: 1200,
      height: 630,
      alt: "Yooniverse",
    },
  ],
};

export const DefaultMetadata = {
  title: "Yooniverse",
  description:
      "윤창현 | Changhyeon (Kevin) Yoon - Software Engineer",
};
