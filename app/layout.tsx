import type { Metadata } from "next";
import React from "react";

import { QueryProvider } from "@/contexts";
import { datadogService } from "@/services/datadog";

import "./globals.css";

export const metadata: Metadata = {
  title: "Yooniverse",
  description: "Changhyeon Yoon - Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  datadogService();
  return (
    <html lang='en'>
      <body className='min-w-screen flex min-h-screen justify-center'>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
