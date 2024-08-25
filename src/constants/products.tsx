import AccessRide1 from "@/public/images/projects/access_ride/access_ride_0.png";
import AccessRide2 from "@/public/images/projects/access_ride/access_ride_1.png";
import AccessRide3 from "@/public/images/projects/access_ride/access_ride_2.png";
import AccessRide4 from "@/public/images/projects/access_ride/access_ride_3.png";
import AccessRideThumbnail from "@/public/images/projects/access_ride/access_ride_thumbnail.png";
import DevjeansThumbnail from "@/public/images/projects/devjeans/devjeans_thumbnail.png";
import Granter1 from "@/public/images/projects/granter/granter_1.png";
import Granter2 from "@/public/images/projects/granter/granter_2.png";
import GranterThumbnail from "@/public/images/projects/granter/granter_thumbnail.png";
import KVoteThumbnail from "@/public/images/projects/k-vote/kvote_thumbnail.png";
import KWDC24Thumbnail from "@/public/images/projects/kwdc24/kwdc24_thumbnail.png";
import Miricanvas1 from "@/public/images/projects/miricanvas/miricanvas_1.png";
import Miricanvas2 from "@/public/images/projects/miricanvas/miricanvas_2.png";
import Miricanvas3 from "@/public/images/projects/miricanvas/miricanvas_3.png";
import Miricanvas4 from "@/public/images/projects/miricanvas/miricanvas_4.png";
import Miricanvas5 from "@/public/images/projects/miricanvas/miricanvas_5.png";
import Miricanvas6 from "@/public/images/projects/miricanvas/miricanvas_6.png";
import Miricanvas7 from "@/public/images/projects/miricanvas/miricanvas_7.png";
import Miricanvas8 from "@/public/images/projects/miricanvas/miricanvas_8.png";
import MiricanvasThumbnail from "@/public/images/projects/miricanvas/miricanvas_thumbnail.png";
import YooniverseV1Thumbnail from "@/public/images/projects/yooniverse/yooniverse_v1_thumbnail.png";
import { Highlight } from "@/src/components/Highlight";

export const products = [
  {
    href: "https://www.miricanvas.com",
    title: "미리캔버스 - Miricanvas",
    created_at: "2024-08-25 00:00:00",
    modified_at: "2024-08-25 00:00:00",
    description: "미리캔버스: 디자인을 간편하게",
    thumbnail: MiricanvasThumbnail,
    images: [
      MiricanvasThumbnail,
      Miricanvas1,
      Miricanvas2,
      Miricanvas3,
      Miricanvas4,
      Miricanvas5,
      Miricanvas6,
      Miricanvas7,
      Miricanvas8,
    ],
    stack: ["JavaScript", "TypeScript", "React.js", "Next.js", "Styled-Components", "React-Native"],
    slug: "miricanvas",
    content: (
      <div>
        <p>
          <Highlight>미리캔버스(miricanvas)</Highlight>는 학생, 마케터, 개인 사업자와 디자이너 그리고 모든 사람들이
          창의성을 극대화하고 디자인 작업을 간편하게 할 수 있는 최고의 디자인 서비스에요. <br />
          간편하고 효과적으로 시각적 콘텐츠를 만들고 공유할 수 있어요. 웹 그래픽부터 프레젠테이션, 사진 편집, 비즈니스
          인쇄물까지 쉽고 간편하게 만들 수 있습니다.
        </p>
        <p>
          <Highlight>Miricanvas</Highlight> is the best design service that maximizes creativity and makes design work
          easy for students, marketers, individual business owners, designers, and everyone. <br />
          You can easily and effectively create and share visual content. From web graphics to presentations, photo
          editing, and business prints, you can create them easily and conveniently.
        </p>
      </div>
    ),
  },
  {
    href: "https://granter.biz",
    title: "그랜터 - Granter",
    created_at: "2024-08-25 00:00:00",
    modified_at: "2024-08-25 00:00:00",
    description: "그랜터 - 스타트업을 위한 AI 지출분석 서비스",
    thumbnail: GranterThumbnail,
    images: [GranterThumbnail, Granter1, Granter2],
    stack: ["TypeScript", "Nextjs", "Tailwindcss", "Dart", "Flutter", "Framer", "React-Query"],
    slug: "granter",
    content: (
      <div>
        <ul className='space-y-4 list-disc'>
          <li>
            <p>
              도메인 특성상 보안이 중요하여 종단간 암호화 통신을 위해 <Highlight>crypto-js</Highlight>를 적용했습니다.
            </p>
          </li>
          <li>
            <p>
              수많은 데이터를 가공하고 빠르게 보여주기 위해 <Highlight>React-Query</Highlight>와{" "}
              <Highlight>In-Memory Cache</Highlight>를 활용하여 로딩시간을{" "}
              <span className='font-semibold'>1s 미만</span>으로 단축시켰습니다.
            </p>
          </li>
          <li>
            <p>
              <Highlight>DataDog RUM</Highlight> 도입을 제안하여 유저를 모니터링하고 UX를 개선하는데 반영하였습니다.
            </p>
          </li>
          <li>
            <p>
              금융도메인 특성상 다양한 <Highlight>Edge Case</Highlight>를 고려하여 개발하기 위해 노력했습니다.
            </p>
          </li>
          <li>
            <p>기존 유저들이 엑셀로 작업하던 것이 익숙해져 있어 엑셀처럼 ~~해주세요 라는 요구가 많았습니다.</p>
            <ul className='ml-6 mt-2 space-y-2'>
              <li>
                <p>
                  <Highlight>AG Grid</Highlight>를 도입하여 웹에서도 데이터를 엑셀처럼 키보드만을 이용하여 편하게 조작할
                  수 있도록 개선하였습니다.
                </p>
              </li>
              <li>
                <p>사용자 별로 커스텀하여 엑셀 데이터를 추출하거나 그래프를 생성할 수 있도록 제작하였습니다.</p>
              </li>
            </ul>
          </li>
          <li>
            <p>
              <Highlight>React Native</Highlight>를 사용하여 기존 웹을 WebView로 보여주는 방식으로 앱을 제작했으나
              Native스럽지 않고 자잘한 문제가 많았습니다.
            </p>
            <ul className='ml-6 mt-2'>
              <li>
                <p>
                  기존 <Highlight>React Native</Highlight>로 만들어진 앱을 <Highlight>Flutter</Highlight>로 마이그레이션
                  하여 WebView로 사용하던 부분을 모두 Native로 개발하고 UI/UX 및 성능을 대폭 상승시켰습니다.
                </p>
              </li>
            </ul>
          </li>
          <li>
            <p>자체 어드민을 구축하여 고객들의 데이터 및 사용현황을 쉽게 모니터링 할 수 있도록 구축하였습니다.</p>
            <ul className='ml-6 mt-2 space-y-2'>
              <li>
                <p>
                  모노레포를 사용하여 기존 디자인시스템을 그대로 사용할 수 있도록 하여 어드민 구축 오버헤드를
                  절감시켰습니다.
                </p>
              </li>
              <li>
                <p>앱 버전 관리 및 강제 업데이트를 관리할 수 있도록 구축하였습니다.</p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    ),
  },
  {
    href: "https://evote.ksd.or.kr",
    title: "전자투표 K-VOTE",
    created_at: "2024-08-25 00:00:00",
    modified_at: "2024-08-25 00:00:00",
    description: "한국예탁결제원 전자투표 시스템",
    thumbnail: KVoteThumbnail,
    images: [KVoteThumbnail],
    stack: ["TypeScript", "Nextjs", "Styled-Components"],
    slug: "k-vote",
    content: <div></div>,
  },
  {
    href: "https://v1.changhyeon.net",
    title: "Yooniverse 개인블로그 - v1",
    created_at: "2024-08-25 00:00:00",
    modified_at: "2024-08-25 00:00:00",
    description: "Yooniverse 개인 블로그 - v1",
    thumbnail: YooniverseV1Thumbnail,
    images: [YooniverseV1Thumbnail],
    stack: ["TypeScript", "Nextjs", "Tailwindcss"],
    slug: "blog",
    content: (
      <div>
        <p>지금 보고 있는 블로그가 아닌 v1 버전의 블로그 </p>
        <ul className='space-y-4 list-disc'>
          <li>
            <p>
              100개가 넘는 아티클을 Notion에서 불러오는데 시간이 오래걸리고 제약이 있어 문제가 있었습니다.
              <ul className='ml-6 mt-2 space-y-2'>
                <li>
                  <p>
                    <Highlight>Redis</Highlight>를 로딩시간을 단축 및 빌드 최적화를 하였습니다 (기존 10분 이상 → 2분
                    이내)
                  </p>
                </li>
                <li>
                  <p>Open Graph를 자동으로 생성할 수 있도록 API Route를 사용하였습니다.</p>
                </li>
              </ul>
            </p>
          </li>
        </ul>
      </div>
    ),
  },
  {
    href: "https://github.com/access-ride",
    title: "무턱대고",
    created_at: "2024-08-25 00:00:00",
    modified_at: "2024-08-25 00:00:00",
    description: "휠체어 탑승자를 위한 네비게이션 서비스",
    thumbnail: AccessRideThumbnail,
    images: [AccessRideThumbnail, AccessRide1, AccessRide2, AccessRide3, AccessRide4],
    stack: ["TypeScript", "Nextjs", "Tailwindcss", "React-Native"],
    slug: "access-ride",
    content: (
      <div>
        <p>
          무턱대고 서비스는 장애인의 관점에서, 장애인을 위해 설계된 어플리케이션을 통해 지하철 이용 경험을 개선하기로
          계획했습니다.
        </p>
        <ul>
          <li className='list-disc'>
            <p>
              <Highlight>React Native</Highlight>와 <Highlight>React Web</Highlight> 사이의 동신을 위한 브릿지를
              개발하여 웹에서도 Native 기능을 사용할 수 있도록 동신을 구현하였습니다.
            </p>
          </li>
          <li>
            <p>
              <Highlight>canvas</Highlight>를 이용하여 지하철 내부 지도를 유저가 편하게 볼수 있도록 좌표계 및
              네비게이션을 구현했습니다.
            </p>
          </li>
          <li>
            <p>실시간으로 현재 지하철의 위치 및 도착 예정시간을 확인할 수 있도록 구현하였습니다.</p>
          </li>
          <li className='list-disc'>
            <p>
              유저타겟에 맞춰 스크린리더가 읽을 수 있도록 웹접근성(<Highlight>Accessibility</Highlight>)을
              고려하였습니다.
            </p>
            <ul>
              <li>
                <p>실제 장애인 유저와 함께 인터뷰를 하고 현장 테스트를 하며 부족한 점을 개선하였습니다.</p>
              </li>
              <li>
                <p>
                  대부분 장애인 유저들은 Apple 기기를 사용하는 것을 듣고 아이폰에서 제공하는 손쉬운 사용 기능이 앱에서
                  정상적으로 작동할 수 있도록 개선하였습니다.
                </p>
              </li>
            </ul>
          </li>
          <li>
            <p>
              <Highlight>Lighthouse</Highlight> 평균 90점을 유지하였습니다.
            </p>
          </li>
        </ul>
      </div>
    ),
  },
  {
    href: "https://devjeans.dev-hee.com",
    title: "개발진스",
    created_at: "2024-08-25 00:00:00",
    modified_at: "2024-08-25 00:00:00",
    description: "만들어쓰는 개발진스",
    thumbnail: DevjeansThumbnail,
    images: [DevjeansThumbnail],
    stack: ["TypeScript", "Svelte", "Tailwindcss"],
    slug: "devjeans",
    content: <div></div>,
  },
  {
    href: "https://kwdc.dev/2024",
    title: "KWDC24",
    created_at: "2024-08-25 00:00:00",
    modified_at: "2024-08-25 00:00:00",
    description: "KoreaWide Developer Conference 2024",
    thumbnail: KWDC24Thumbnail,
    images: [KWDC24Thumbnail],
    stack: ["TypeScript", "Three.js", "Lottie", "Nextjs", "Tailwindcss"],
    slug: "kwdc24",
    content: <div></div>,
  },
];
