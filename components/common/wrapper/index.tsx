import React from "react";

interface WrapperProps {
  children: React.ReactNode;
}

export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <main className='flex min-h-full w-full min-w-full flex-col justify-center'>
      <nav className='border-b-px flex h-16 w-full items-center gap-5 border-b border-b-gray-200 bg-white bg-opacity-20 px-10 backdrop-blur-lg'>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/blog'>Blog</a>
        </li>
      </nav>
      <div className='h-full w-full'>{children}</div>
    </main>
  );
};
