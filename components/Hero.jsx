import React from 'react';
import Image from 'next/image';

import clsx from 'clsx';

const Hero = ({ src, heading1, heading2, subtext, children, className }) => {
  return (
    <div className="relative bg-gray-100">
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
          <div className="absolute inset-0">
            <Image
              width={1000}
              height={1000}
              priority={true}
              className="h-full w-full object-cover"
              src={src}
              alt="/"
            />
            <div className="absolute inset-0 bg-indigo-500 mix-blend-multiply" />
          </div>
          <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block text-white">{heading1}</span>
              <span className="block text-indigo-200">{heading2}</span>
            </h1>
            <p className="mx-auto mt-6 max-w-lg text-center text-xl text-indigo-200 sm:max-w-3xl">
              {subtext}
            </p>
            <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center justify-evenly ">
              <div
                className={clsx(
                  'flex justify-center items-center mx-auto',
                  className
                )}
              >
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
