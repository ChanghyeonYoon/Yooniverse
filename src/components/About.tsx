"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";

import { Heading } from "@/src/components/Heading";
import { Paragraph } from "@/src/components/Paragraph";
import { prefix } from "@/src/constants/prefix";
import { motion } from "framer-motion";
import { ImageDecorator } from "react-viewer/lib/ViewerProps";

const Viewer = dynamic(() => import("react-viewer"), { ssr: false });

const images = [
  `${prefix}/images/about/about_1.jpeg`,
  `${prefix}/images/about/about_2.jpeg`,
  `${prefix}/images/about/about_3.jpeg`,
  `${prefix}/images/about/about_4.jpeg`,
];

export default function About() {
  const [visible, setVisible] = React.useState(false);
  const [imageIndex, setImageIndex] = React.useState(0);

  const openImageViewer = (index: number) => () => {
    setVisible(true);
    setImageIndex(index);
  };

  const onChangeIndex = (activeImage: ImageDecorator, index: number) => {
    setImageIndex(index);
  };

  return (
    <div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-10 my-10'>
        {images.map((image, index, array) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              onClick={openImageViewer(index)}
              src={image}
              width={200}
              height={400}
              alt='about'
              className='cursor-pointer rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200'
            />
          </motion.div>
        ))}
      </div>

      <div className='max-w-4xl'>
        <span className='text-5xl font-Tossface'>🙋🏻‍♂️</span>
        <Paragraph className='mt-4'>안녕하세요! 여행을 좋아하는 개발자 윤창현 입니다.</Paragraph>
        <Paragraph className='mt-4'>
          저는 커뮤니티의 중요성을 믿고 커뮤니티 속에서의 성장을 위해 노력하고 있습니다.
          <br />
          혼자 앞만보고 달려가다 보면 지금 본인의 상황을 제대로 파악하지 못할 수 있습니다.
          <br />
          하지만 커뮤니티 속에서 다양한 사람들과 소통하고 지식을 공유하며 성장할 수 있다고 믿습니다.
        </Paragraph>
        <Paragraph className='mt-4'>
          개발자로서 저는 코드 한줄마다 애착을 가지고 작성하려고 노력하고있습니다. <br />
          애플의 철학 중&nbsp;
          <i className='font-bold'>누구나 언제든지 편하고 자유롭게 쓸 수 있는 기술이야말로 가장 뛰어난 기술</i>
          이라는 말이 있습니다.
          <br />
          저는 사용자를 넘어 뒤에서 작동하고 있는 코드까지&nbsp;
          <i className='font-bold'>누구나 언제든지 편하고 자유롭게 수정 및 활용할 수 있는 코드</i>를 작성하기 위해
          노력합니다.
        </Paragraph>
        <Paragraph className='mt-4'>
          <i className='font-bold'>최고의 복지는 동료다</i>&nbsp;라는 말이 있습니다.
          <br />
          한 조직의 구성원으로서 높은 책임감과 열정을 가지고 누군가에게 도움이 되는 동료가 되고싶습니다. <br />
        </Paragraph>
        <div className='bg-slate-400 w-full h-px my-10' />

        
        <div className='flex items-center mt-10 mb-4'>
          <span className='font-black text-lg md:text-xl lg:text-2xl font-Tossface mr-2'>💼</span>
          <Heading as='h2' className='font-black text-lg md:text-xl lg:text-2xl'>
            Activities
          </Heading>
        </div>
        <ul className='list-disc list-inside'>
          <li className='font-black tracking-widest'>
          Datadog Ambassador (2024 ~ Current)
          </li>
          <li className='font-black tracking-widest'>
          Google Developer Group Incheon - Organizer (2024 ~ Current)
          </li>
          <li className='font-black tracking-widest'>
          KWDC - Koreawide Developer Conference - Organizer (2024 ~ Current)
          </li>
          <li className='font-black tracking-widest'>
          Microsoft Learn Student Ambassador (2023 ~ 2024)
          </li>
          <li className='font-black tracking-widest'>
          Google Developer Student Club Hanyang Univ. - 1st Lead (2022 ~ 2023)
          </li>
        </ul>

        <div className='bg-slate-400 w-full h-px my-10' />

        
        <div className='flex items-center mt-10 mb-4'>
          <span className='font-black text-lg md:text-xl lg:text-2xl font-Tossface mr-2'>📣</span>
          <Heading as='h2' className='font-black text-lg md:text-xl lg:text-2xl'>
            Speaker
          </Heading>
        </div>
        <ul className='list-disc list-inside'>
        <li className='font-black tracking-widest'>
          KWDC24 - Koreawide Developer Conference 2024
          </li>
          <li className='font-black tracking-widest'>
          AWS Summit Seoul 2023
          </li>
          <li className='font-black tracking-widest'>
          MADC - Mobile App Developer&apos;s Conference 2023
          </li>
          <li className='font-black tracking-widest'>
          AWS Community Day Seoul 2023
          </li>
          <li className='font-black tracking-widest'>
          AWSKRUG - AWS Korea User Group Frontend Meetup 2023
          </li>
        </ul>


        <div className='bg-slate-400 w-full h-px my-10' />

        
        <div className='flex items-center mt-10 mb-4'>
          <span className='font-black text-lg md:text-xl lg:text-2xl font-Tossface mr-2'>✈️</span>
          <Heading as='h2' className='font-black text-lg md:text-xl lg:text-2xl'>
            World Traveler
          </Heading>
        </div>
        <span className='font-black text-lg md:text-xl lg:text-2xl font-Tossface tracking-widest'>
          🇺🇸🇬🇧🇫🇷🇨🇿🇦🇹🇭🇺🇨🇭🇸🇦🇻🇳🇵🇭🇯🇵
        </span>
      </div>
      <Viewer
        visible={visible}
        activeIndex={imageIndex}
        onChange={onChangeIndex}
        onClose={() => {
          setVisible(false);
        }}
        images={images.map((image, index) => ({ src: image }))}
      />
    </div>
  );
}
