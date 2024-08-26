"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import { products } from "@/src/constants/products";
import { Product } from "@/src/types/products";
import { motion } from "framer-motion";
import { encode } from "qss";

import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";

export const Products = () => {
  return (
    <div>
      <div className='grid grid-cols-1  gap-10'>
        {products.map((product: Product, idx: number) => {
          const params = encode({
            url: product.href,
            screenshot: true,
            meta: false,
            embed: "screenshot.url",
            colorScheme: "light",
            "viewport.isMobile": true,
            "viewport.deviceScaleFactor": 1,
            "viewport.width": 1920,
            "viewport.height": 1080,
          });
          const src = `https://api.microlink.io/?${params}`;
          return (
            <motion.div
              key={product.href}
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
                href={product.slug ? `/projects/${product.slug}` : product.href}
                key={product.href}
                className='group flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 hover:bg-gray-50 rounded-2xl transition duration-200 pt-4'
              >
                <Image
                  src={src}
                  width={200}
                  height={200}
                  quality={75}
                  layout={"fixed"}
                  priority={true}
                  className='rounded-lg'
                  alt='preview image'
                />
                <div className='flex flex-col justify-between'>
                  <div>
                    <Heading as='h4' className='font-black text-lg md:text-lg lg:text-lg '>
                      {product.title}
                    </Heading>
                    <Paragraph className='text-sm md:text-sm lg:text-sm mt-2 max-w-xl'>{product.description}</Paragraph>
                  </div>
                  <div className='flex gap-2 md:mb-1 mt-2 md:mt-0 flex-wrap'>
                    {product.stack?.map((stack: string, idx: number, array: any[]) => {
                      if (idx === 5) {
                        return (
                          <span
                            key={stack}
                            className='text-xs md:text-xs lg:text-xs bg-gray-50 px-2 py-1 rounded-sm text-secondary align-middle'
                          >
                            +{array.length - 5} more
                          </span>
                        );
                      }
                      if (idx > 5) {
                        return null;
                      }
                      return (
                        <span
                          key={stack}
                          className='text-xs md:text-xs lg:text-xs bg-gray-50 px-2 py-1 rounded-sm text-secondary'
                        >
                          {stack}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
