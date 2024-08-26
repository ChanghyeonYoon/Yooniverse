"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { Product } from "@/src/types/products";
import { motion } from "framer-motion";

import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";

function ArrowLeftIcon(props: any) {
  return (
    <svg viewBox='0 0 16 16' fill='none' aria-hidden='true' {...props}>
      <path
        d='M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export const SingleProduct = ({ product }: { product: Product }) => {
  const [activeImage, setActiveImage] = useState<StaticImageData | string>(product.thumbnail);
  return (
    <div>
      <header className='flex flex-col'>
        <Link
          type='button'
          href='/projects'
          aria-label='Go back to articles'
          className='group mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition  '
        >
          <ArrowLeftIcon className='h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 d' />
        </Link>
      </header>
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        key={product.slug}
        className='relative flex justify-center'
      >
        <Image
          src={activeImage}
          alt='thumbnail'
          height='1200'
          width='630'
          className='rounded-md object-contain max-lg:w-full lg:w-[1200px] lg:h-[630px]'
        />
        <div className='absolute bottom-0 bg-white h-40 w-full [mask-image:linear-gradient(to_bottom,transparent,white)]' />
      </motion.div>
      <div className='flex flex-row justify-center my-8 flex-wrap gap-2.5'>
        {product.images.map((image, idx) => (
          <button onClick={() => setActiveImage(image)} key={`image-thumbnail-${idx}`}>
            <Image
              src={image}
              alt='product thumbnail'
              height='1200'
              width='630'
              className='h-14 w-16 md:h-40 md:w-60 object-cover object-top mr-4 mb-r border rounded-lg border-neutral-100'
            />
          </button>
        ))}
      </div>
      <div className='flex justify-between items-center flex-col mt-20'>
        <Heading className='font-black mb-2 pb-1'> {product.title}</Heading>
        <div className='flex gap-2 flex-wrap md:mb-1 mt-2 md:mt-0 '>
          {product.stack?.map((stack: string) => (
            <span key={stack} className='text-xs  md:text-xs lg:text-xs bg-gray-50 px-2 py-1 rounded-sm text-secondary'>
              {stack}
            </span>
          ))}
        </div>
      </div>
      <div>
        <Paragraph className='max-w-xl mt-4'>{product.description}</Paragraph>
      </div>
      <div className='prose prose-sm md:prose-base max-w-none text-neutral-600'>{product?.content}</div>

      <a
        href={product.href}
        target='__blank'
        className='inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-gray-800 text-white shadow-lg shadow-black/20 sm:backdrop-blur-sm group-hover/button:bg-gray-50/15 group-hover/button:scale-105 focus-visible:ring-1 focus-visible:ring-offset-2 ring-gray-50/60 text-sm font-medium px-4 py-2 mt-5 origin-left'
      >
        Live Preview
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
          className='w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform'
        >
          <path d='M5 12l14 0'></path>
          <path d='M13 18l6 -6'></path>
          <path d='M13 6l6 6'></path>
        </svg>
      </a>
    </div>
  );
};
