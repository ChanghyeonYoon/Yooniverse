"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

import { Badge } from "@/src/components/Badge";
import { LinkPreview } from "@/src/components/LinkPreview";
import { navlinks } from "@/src/constants/navlinks";
import { prefix } from "@/src/constants/prefix";
import { COMMUNITY_LINKS, LINKS } from "@/src/constants/socials";
import { isMobile } from "@/src/lib/utils";
import { Navlink } from "@/src/types/navlink";
import { IconLayoutSidebarRightCollapse } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

import { formatLabel } from "@/lib/formatText";

import { Heading } from "./Heading";

export const Sidebar = () => {
  const [open, setOpen] = useState(!isMobile());
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      setOpen(!isMobile());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "-20rem" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.2, ease: "linear" }}
            exit={{ x: "-20rem" }}
            className='px-6 z-[100] py-10 bg-neutral-100 max-w-[20rem] lg:w-fit  fixed lg:relative  h-screen left-0 flex flex-col justify-between'
          >
            <div className='flex-1 overflow-auto'>
              <SidebarHeader />
              <Navigation setOpen={setOpen} />
            </div>
            <div onClick={() => isMobile() && setOpen(false)}>
              <Badge
                href={pathname === "/resume" ? "/projects" : "/resume"}
                text={pathname === "/resume" ? "Projects / Portfolio" : "Resume"}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        className='fixed lg:hidden bottom-4 right-4 h-8 w-8 border border-neutral-200 rounded-full backdrop-blur-sm flex items-center justify-center z-50'
        onClick={() => setOpen(!open)}
      >
        <IconLayoutSidebarRightCollapse className='h-4 w-4 text-secondary' />
      </button>
    </>
  );
};

export const Navigation = ({ setOpen }: { setOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <div className='flex flex-col space-y-1 my-10 relative z-[100]'>
      {navlinks.map((link: Navlink) => (
        <Link
          key={link.href}
          href={link.href}
          target={link.href.startsWith("mailto") ? "_blank" : undefined}
          onClick={() => isMobile() && setOpen(false)}
          className={twMerge(
            "text-secondary hover:text-primary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm",
            isActive(link.href) && "bg-white shadow-lg text-primary",
          )}
        >
          <link.icon className={twMerge("h-4 w-4 flex-shrink-0", isActive(link.href) && "text-sky-500")} />
          <span>{link.label}</span>
        </Link>
      ))}

      <Heading as='p' className='text-sm md:text-sm lg:text-sm pt-10 px-2'>
        Links
      </Heading>
      {LINKS.map((link: Navlink) => (
        <LinkPreview url={link.href} key={link.href}>
          <div
            className={twMerge(
              "text-secondary hover:text-primary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm",
            )}
          >
            <link.icon className={twMerge("h-4 w-4 flex-shrink-0", isActive(link.href) && "text-sky-500")} />
            <span className='whitespace-pre-wrap'>{link.label}</span>
          </div>
        </LinkPreview>
      ))}

      <Heading as='p' className='text-sm md:text-sm lg:text-sm pt-10 px-2'>
        Community
      </Heading>
      {COMMUNITY_LINKS.map((link: Navlink) => (
        <LinkPreview url={link.href} key={link.href}>
          <div
            className={twMerge(
              "text-secondary hover:text-primary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm",
            )}
          >
            <link.icon className={twMerge("h-4 w-4 flex-shrink-0", isActive(link.href) && "text-sky-500")} />
            <span className='whitespace-pre-wrap'>{formatLabel(link.label)}</span>
          </div>
        </LinkPreview>
      ))}
    </div>
  );
};

const SidebarHeader = () => {
  return (
    <div className='flex space-x-2'>
      <Image
        src={`${prefix}/images/profile.jpg`}
        alt='Avatar'
        height='40'
        width='40'
        className='object-center object-top rounded-full flex-shrink-0 w-10 h-10'
      />
      <div className='flex text-sm flex-col'>
        <p className='font-bold text-primary'>Changhyeon (Kevin) Yoon</p>
        <p className='font-light text-secondary'>Software Engineer</p>
      </div>
    </div>
  );
};
