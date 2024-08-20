"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";

import { Card, Carousel } from "@/src/components/Carousel";
import { Heading } from "@/src/components/Heading";
import { Highlight } from "@/src/components/Highlight";
import { Paragraph } from "@/src/components/Paragraph";
import { Families } from "@/src/constants/families";
import { motion } from "framer-motion";
import { ImageDecorator } from "react-viewer/lib/ViewerProps";

const Viewer = dynamic(() => import("react-viewer"), { ssr: false });

const images = [
  "https://imgix.datadoghq.com//img/about/presskit/Datadog_Lobby.jpg?dpr=2&auto=format&_gl=1*ta49n*_gcl_aw*R0NMLjE3MjM2MTYyMjYuQ2owS0NRandpT3kxQmhEQ0FSSXNBREd2UW5BamV5UUgtS21XLWpiMTFSeER5d3R2UFdqT1FFV2N1c3l3M1VsLVlZVWw3d09ac0FZMlhSZ2FBbWQ2RUFMd193Y0I.*_gcl_au*MjA4OTEyNjU1My4xNzIxNjk2OTU0*_ga*MTAwODU1ODQ5Mi4xNzIxNjM2Njkx*_ga_KN80RDFSQK*MTcyMzg4Mjg1Mi4yNi4wLjE3MjM4ODI4ODkuMC4wLjE3MDAxMzg3NjQ.",
  "https://imgix.datadoghq.com//img/about/presskit/Bits_Mascot.jpg?dpr=2&auto=format&_gl=1*ta49n*_gcl_aw*R0NMLjE3MjM2MTYyMjYuQ2owS0NRandpT3kxQmhEQ0FSSXNBREd2UW5BamV5UUgtS21XLWpiMTFSeER5d3R2UFdqT1FFV2N1c3l3M1VsLVlZVWw3d09ac0FZMlhSZ2FBbWQ2RUFMd193Y0I.*_gcl_au*MjA4OTEyNjU1My4xNzIxNjk2OTU0*_ga*MTAwODU1ODQ5Mi4xNzIxNjM2Njkx*_ga_KN80RDFSQK*MTcyMzg4Mjg1Mi4yNi4wLjE3MjM4ODI4ODkuMC4wLjE3MDAxMzg3NjQ.",
  "https://imgix.datadoghq.com//img/about/presskit/Datadog_NYCView.jpg?dpr=2&auto=format&_gl=1*ta49n*_gcl_aw*R0NMLjE3MjM2MTYyMjYuQ2owS0NRandpT3kxQmhEQ0FSSXNBREd2UW5BamV5UUgtS21XLWpiMTFSeER5d3R2UFdqT1FFV2N1c3l3M1VsLVlZVWw3d09ac0FZMlhSZ2FBbWQ2RUFMd193Y0I.*_gcl_au*MjA4OTEyNjU1My4xNzIxNjk2OTU0*_ga*MTAwODU1ODQ5Mi4xNzIxNjM2Njkx*_ga_KN80RDFSQK*MTcyMzg4Mjg1Mi4yNi4wLjE3MjM4ODI4ODkuMC4wLjE3MDAxMzg3NjQ.",
  "https://imgix.datadoghq.com//img/about/presskit/Datadog_Alerts.png?dpr=2&_gl=1*cb3vvl*_gcl_aw*R0NMLjE3MjM2MTYyMjYuQ2owS0NRandpT3kxQmhEQ0FSSXNBREd2UW5BamV5UUgtS21XLWpiMTFSeER5d3R2UFdqT1FFV2N1c3l3M1VsLVlZVWw3d09ac0FZMlhSZ2FBbWQ2RUFMd193Y0I.*_gcl_au*MjA4OTEyNjU1My4xNzIxNjk2OTU0*_ga*MTAwODU1ODQ5Mi4xNzIxNjM2Njkx*_ga_KN80RDFSQK*MTcyMzg4NzAzNC4yNy4wLjE3MjM4ODcwMzQuMC4wLjQ4NjUyODcwNQ..*_fplc*dGdqQjFTNHIxbUFsZ3IzR3FQZEdaQXRTJTJGb29UUmdNWEdZSGFwZDZzek9peFZjSTNXdVJuem1hdThjeU9jZjZkNkRacWtIWldybSUyRmhoJTJCdkVCVDJabGFkTFYxdXJDVEVydHp6QmlaNVJyUkJXaWdlV1llZ2haSk5Ob2llVW9RJTNEJTNE",
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
        <Paragraph className=' mt-4'>
          <Highlight>DatadogKRUG (Datadog Korea User Group)</Highlight>은 Monitoring, Observability와 관련된 모든 주제에
          대해서 지식을 교류하며 함께 성장하는 모임입니다.
        </Paragraph>
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
