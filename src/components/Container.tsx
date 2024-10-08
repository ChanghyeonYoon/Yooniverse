import React from "react";

export const Container = ({ children }: { children: React.ReactNode }) => {
  return <main className={`max-w-4xl w-full mx-auto pt-10 pb-20 px-4 md:px-10 max-md:pt-5`}>{children}</main>;
};
