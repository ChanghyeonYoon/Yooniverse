import { Metadata } from "next";
import Image from "next/image";
import React from "react";

import { DefaultOpenGraph } from "@/src/app/shared-metadata";
import { Container } from "@/src/components/Container";
import { Heading } from "@/src/components/Heading";
import { Highlight } from "@/src/components/Highlight";
import { Paragraph } from "@/src/components/Paragraph";
import { WorkHistory } from "@/src/components/WorkHistory";
import { prefix } from "@/src/constants/prefix";

export const metadata: Metadata = {
  title: "윤창현 - 이력서",
  description: "이력서 - Resume",
  openGraph: {
    ...DefaultOpenGraph,
    url: "https://changhyeon.net/resume",
    title: "윤창현 | Changhyeon (Kevin) Yoon",
    description: "이력서 - Resume",
  },
};

export default function Home() {
  return (
    <Container>
      <Image
        src={`${prefix}/images/profile.jpg`}
        alt='Avatar'
        height={200}
        width={200}
        className='object-cover rounded-xl flex-shrink-0 mb-5'
      />

      <Heading className='font-black'>
        안녕하세요.
        <br />
        만족할 줄 모르는, 집착있는 개발자 윤창현 입니다.
      </Heading>
      <Paragraph className='mt-4'>
        4년차 프론트엔드 개발자 입니다. <br />
        프론트엔드는 프로젝트의 첫 인상을 담당한다고 생각합니다.
        <br />
        다양한 유저들이 첫인상을 모두 만족할 수 있는 환경을 만들기 위해 집착하며 현재에 만족하지 않고 더 좋은 방법은
        없을까 끊임없이 탐구하고 있습니다.
        <br />
        문제의 겉만 보고 해결하는 것이 아닌 문제의 원인과 근본을 파악하여 Deep Dive 하는 것을 좋아합니다.
        <br />
        개발을 정말 즐기고 사랑하는 사람으로서 다른 사람들에게도 이런 즐거움을 전파할 수 있도록 커뮤니티 운영 및 지식을
        공유하려고 하고 있습니다.
      </Paragraph>
      <Heading as='h2' className='font-black mt-10'>
        Frontend
      </Heading>
      <ul className='list-disc mt-2.5 pl-5 gap-y-2.5 flex flex-col'>
        <li>
          주로 <Highlight>React</Highlight>와 <Highlight>Next.js</Highlight>를 사용하여 프로젝트를 진행합니다.
        </li>
        <li>
          <Highlight>TypeScript</Highlight>&nbsp;의 강력한 타입시스템을 활용하여 에러를 사전에 방지하려고 노력합니다.
        </li>
        <li>
          재사용 로직을 분리하기 위해 커스텀 Hooks를 활용하고, 관심사 분리를 지향하여 유지보수하기 좋은 코드를 작성하기
          위해 노력합니다.
        </li>
        <li>
          겉으로만 보이는 시각적인 영역에만 집중하는 것이 아닌 상황별로 적절한 시맨틱 요소를 사용하고 웹 표준을
          고려합니다.
        </li>
        <li>
          모든 유저가 의도대로 사용할 수 있고 각자가 편한대로 사용할 수 있도록 <Highlight>Accessibility</Highlight>를
          고려하고 개발하는 것을 좋아합니다.
        </li>
        <li>
          <Highlight>React Native</Highlight>와 <Highlight>Flutter</Highlight>를 사용하여 모바일 환경까지 대응
          가능합니다.
        </li>
        <li>
          네이밍, 주석, 커밋메세지 등을 적극 활용하여 다른사람이 쉽게 코드를 파악할 수 있도록 가독성을 중시합니다.
        </li>
      </ul>
      <Heading as='h2' className='font-black mt-10'>
        Infra
      </Heading>
      <ul className='list-disc mt-2.5 pl-5 gap-y-2.5 flex flex-col'>
        <li>
          메인은 프론트엔드 개발자이지만 최근 대부분 프로젝트들이 Cloud 환경에서 작동하고 있기 때문에 클라우드 지식도
          꾸준히 공부하고 있습니다.
        </li>
        <li>
          로깅, 모니터링을 적극적으로 활용하여 더욱 탄탄한 프로젝트를 만들어 갈 수 있도록 노력하며 이슈를 조기에
          발견하여 더욱 완성도 있는 프로젝트를 만들 수 있도록 노력합니다.
        </li>
        <li>기본적으로 개발환경 구축 부터 CI/CD 및 운영까지 구축 가능합니다.</li>
        <li>안정적인 프로덕트 운영을 위해 적절한 솔루션을 활용합니다.</li>
        <li>프로덕트가 운영되는 인프라 환경을 고려하여 개발하며, 더 나은 방법을 찾기 위해 노력합니다.</li>
      </ul>
      <WorkHistory />
      <div className='mt-5'>
        <Heading as='h2' className='font-black text-lg md:text-xl lg:text-2xl'>
          Experiences
        </Heading>
        <ul className='list-disc ml-4 gap-y-2.5 flex flex-col mt-2'>
          <li>Datadog Ambassador - 아시아 최초, 한국 유일</li>
          <li>Microsoft Learn Student Ambassadors</li>
          <li>Google Developer Groups - Incheon Organizer</li>
          <li>KWDC 2024 Organizer</li>
          <li>LetʼSwift 2024 Organizer</li>
          <li>GopherCon Korea 2023 Organizer</li>
          <li>Google Developer Student Clubs - Hanyang Univ 1st Lead</li>
        </ul>
      </div>
      <div className='mt-5'>
        <Heading as='h2' className='font-black text-lg md:text-xl lg:text-2xl'>
          Certification
        </Heading>
        <ul className='list-disc ml-4 gap-y-2.5 flex flex-col mt-2'>
          <li>AWS Solutions Architect - Associate</li>
        </ul>
      </div>
    </Container>
  );
}
