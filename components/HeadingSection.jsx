import React from 'react';

const HeadingSection = ({ SmallHeading, Title, Paragraph }) => {
  return (
    <div className='bg-gray-100 '>
      <div className='mx-auto max-w-7xl py-10 px-4 sm:py-10 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h2 className='text-lg font-semibold text-indigo-600'>
            {SmallHeading}
          </h2>
          <p className='mt-1 sm:text-4xl font-bold tracking-tight text-gray-900 text-3xl'>
            {Title}
          </p>
          <p className='mx-auto mt-5 max-w-[1000px] text-xl text-gray-500'>
            {Paragraph}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeadingSection;
