"use client";

import React from "react";

import { datadogRum } from "@datadog/browser-rum";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const Monitoring = ({ children }: { children: React.ReactNode }) => {
  React.useEffect(() => {
    if (!process.env.NEXT_PUBLIC_DATADOG_APPLICATION_ID || !process.env.NEXT_PUBLIC_DATADOG_CLIENT_TOKEN) return;

    if (process.env.NODE_ENV === "development") return;

    datadogRum.init({
      applicationId: process.env.NEXT_PUBLIC_DATADOG_APPLICATION_ID,
      clientToken: process.env.NEXT_PUBLIC_DATADOG_CLIENT_TOKEN,
      site: "datadoghq.com",
      service: "yooniverse",
      env: process.env.NODE_ENV,
      sessionSampleRate: 100,
      sessionReplaySampleRate: 100,
      trackUserInteractions: true,
      trackResources: true,
      trackLongTasks: true,
      defaultPrivacyLevel: "allow",
    });
  }, []);

  return (
    <>
      <Analytics />
      <SpeedInsights />
      {children}
    </>
  );
};
