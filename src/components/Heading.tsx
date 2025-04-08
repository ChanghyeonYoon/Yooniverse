import localFont from "next/font/local";
import React from "react";

import { twMerge } from "tailwind-merge";

const AppleSDGothic = localFont({
  src: [{ path: "../../public/fonts/AppleSDGothicNeoSB.ttf" }],
  display: "swap",
});

export const Heading = ({
  className,
  children,
  as: Tag = "h1",
}: {
  className?: string;
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
}) => {
  return (
    <Tag
      className={twMerge(
        AppleSDGothic.className,
        "text-base md:text-xl lg:text-4xl font-semibold bg-clip-text text-transparent text-gray-900 from-primary to-secondary",
        className,
      )}
    >
      {children}
    </Tag>
  );
};
