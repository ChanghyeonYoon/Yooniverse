import React from "react";

import { Highlight } from "@/src/components/Highlight";

import { Heading } from "./Heading";

const FrontendStack = ["JavaScript", "TypeScript", "React", "Next.js", "React-Native", "Dart", "Flutter", "Swift"];
const InfrastructureStack = [
  "Vercel",
  "AWS",
  "Azure",
  "Datadog",
];

export const TechStack = () => {
  return (
    <div>
      <Heading as='h2' className='font-black text-lg md:text-lg lg:text-lg mt-20 mb-10'>
        Tech Stack
      </Heading>
      <div className='flex flex-wrap flex-col'>
        <Heading as='h2' className='font-black text-md md:text-md lg:text-md mb-4'>
          Frontend
        </Heading>
        <div className='flex flex-wrap gap-5'>
          {FrontendStack.map((item) => (
            <Highlight key={item} className='text-sm md:text-sm lg:text-sm font-normal text-secondary rounded-md'>
              {item}
            </Highlight>
          ))}
        </div>
        <Heading as='h2' className='font-black text-md md:text-md lg:text-md mb-4 mt-5'>
          Infrastructure
        </Heading>
        <div className='flex flex-wrap gap-5'>
          {InfrastructureStack.map((item) => (
            <Highlight key={item} className='text-sm md:text-sm lg:text-sm font-normal text-secondary rounded-md'>
              {item}
            </Highlight>
          ))}
        </div>
      </div>
    </div>
  );
};
