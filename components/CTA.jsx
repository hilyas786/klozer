import React from 'react';
import { Button } from './Button';

const CTA = () => {
  return (
    <div className='bg-indigo-50'>
      <div className='mx-auto max-w-7xl py-5 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-10 lg:px-8'>
        <h2 className='text-3xl font-bold tracking-tight text-gray-900 md:text-4xl'>
          <span className='block'>Ready to open a company?</span>
          <span className='block text-indigo-600'>Consult with us today</span>
        </h2>
        <div className='mt-8 flex lg:mt-0 lg:flex-shrink-0'>
          <div className='inline-flex rounded-md shadow'>
            <Button href='/contact' txt='Get started' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
