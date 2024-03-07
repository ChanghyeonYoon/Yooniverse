"use client";

import React from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const staleTime = 1000 * 60 * 60 * 1; // data refresh 기간: 1시간
const cacheTime = 1000 * 60 * 60 * 24; // data 보존 기간: 1일

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime,
      gcTime: cacheTime,
    },
  },
});

export function QueryProvider({ children }: { children: any }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {process.env.NODE_ENV === "development" && (
        <ReactQueryDevtools initialIsOpen={false} buttonPosition='bottom-left' />
      )}
    </QueryClientProvider>
  );
}
