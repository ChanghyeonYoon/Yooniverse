"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Events as EVENTS } from "@/src/constants/events";
import { Event } from "@/src/types/products";
import { motion } from "framer-motion";

import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";

export const Events = () => {
  return (
    <div>
      <div className='grid grid-cols-1  gap-10'>
        {EVENTS.map((event: Event, idx: number) => (
          <motion.div
            key={event.href}
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{ duration: 0.2, delay: idx * 0.1 }}
          >
            <Link
              href={event.slug ? `/events/${event.slug}` : event.href}
              key={event.href}
              className='group flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 hover:bg-gray-50 rounded-2xl transition duration-200 py-4 px-4 shadow-xl'
            >
              <Image src={event.thumbnail} alt='thumbnail' height='200' width='200' className='rounded-md' />
              <div className='flex flex-col justify-between'>
                <div>
                  <Heading as='h4' className='font-black text-lg md:text-lg lg:text-lg '>
                    {event.title}
                  </Heading>
                  <Paragraph className='text-sm md:text-sm lg:text-sm mt-2 max-w-xl description whitespace-pre-wrap'>
                    {event.description}
                  </Paragraph>
                </div>
                <div className='flex space-x-2 md:mb-1 mt-2 md:mt-0'>
                  {event.stack?.map((stack: string) => (
                    <span
                      key={stack}
                      className='text-xs  md:text-xs lg:text-xs bg-gray-50 px-2 py-1 rounded-sm text-secondary'
                    >
                      {stack}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
