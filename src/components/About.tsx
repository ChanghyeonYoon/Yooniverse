"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";

import { Card, Carousel } from "@/src/components/Carousel";
import { Heading } from "@/src/components/Heading";
import { Highlight } from "@/src/components/Highlight";
import { Paragraph } from "@/src/components/Paragraph";
import { Families } from "@/src/constants/families";
import { prefix } from "@/src/constants/prefix";
import { motion } from "framer-motion";
import { ImageDecorator } from "react-viewer/lib/ViewerProps";

const Viewer = dynamic(() => import("react-viewer"), { ssr: false });

const images = [
  `${prefix}/images/about_1.jpeg`,
  `${prefix}/images/about_2.jpeg`,
  `${prefix}/images/about_3.jpeg`,
  `${prefix}/images/about_4.jpeg`,
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
        <span className='text-5xl font-Tossface'>🙋🏻</span>
        <Paragraph className='mt-4'>안녕하세요! 여행을 좋아하는 개발자 윤창현 입니다.</Paragraph>
        <Paragraph className=' mt-4'>
          Datadog뿐만 아니라 Datadog에서 사용할 수 있는 수많은 Integrations 들에 대한 내용도 공유할 수 있습니다. 누구나
          참여해서 즐겁게 즐길 수 있는 분위기, 토론 및 질의응답, 네트워킹 하는 것을 지향합니다.
        </Paragraph>
        <Paragraph className=' mt-4'>
          DatadogKRUG에 관심을 가져주셔서 감사드리며, 여러분에게 더욱 다양하고 도움이 되는 이벤트로 찾아뵙겠습니다.
        </Paragraph>
        <br />
        <Paragraph className=' mt-4'>
          <Highlight>DatadogKRUG (Datadog Korea User Group)</Highlight> is a group that shares knowledge and grows
          together on all topics related to Monitoring and Observability.
        </Paragraph>
        <Paragraph className=' mt-4'>
          In addition to Datadog, we also share content about the numerous integrations that can be used with Datadog.
          We aim to create an enjoyable atmosphere where anyone can participate, discuss, ask questions, and network.
        </Paragraph>

        <Paragraph className=' mt-4'>
          Thank you for your interest in DatadogKRUG, and we look forward to bringing you more diverse and helpful
          events.
        </Paragraph>

        <Heading as='h2' className='font-black text-lg md:text-xl lg:text-2xl mt-20 mb-4'>
          Family Sites
        </Heading>
        <Carousel
          items={Families.filter((family) => !family.isOnlySideBar).map((card, index) => (
            <Card key={card.src} card={card} index={index} />
          ))}
        />
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
