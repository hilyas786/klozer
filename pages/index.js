import { Fragment } from 'react';
import Image from 'next/image';
import klskyline from '../public/img/klskyline.jpeg';
import { Button } from '../components/Button';
export default function Home() {
  return (
    <main>
      <div>
        {/* Hero card */}
        <div className='relative'>
          <div className='absolute inset-x-0 bottom-0 h-1/2 bg-gray-100' />
          <div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
            <div className='relative shadow-xl sm:overflow-hidden sm:rounded-2xl'>
              <div className='absolute inset-0'>
                <Image
                  className='h-full w-full object-cover'
                  src={klskyline}
                  alt='/'
                />
                <div className='absolute inset-0 bg-indigo-700 mix-blend-multiply' />
              </div>
              <div className='relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8'>
                <h1 className='text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl'>
                  <span className='block text-white'>
                    Company Setting Up In Malaysia?
                  </span>
                  <span className='block text-indigo-200'>
                    SDN BHD & Labaun Setup.
                  </span>
                </h1>
                <p className='mx-auto mt-6 max-w-lg text-center text-xl text-indigo-200 sm:max-w-3xl'>
                  Our years of experience means a complete hassle free
                  experience to setup in Malaysia. Leading Corporate Services
                  Provider in Malaysia.
                </p>
                <div className='mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center justify-evenly '>
                  <div className='flex justify-evenly items-center sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5  '>
                    <Button
                      variant='primary'
                      txt='Learn More'
                      href='/aboutus'
                    />
                    <Button
                      variant='primary'
                      txt='Contact Us'
                      href='/aboutus'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Logo cloud */}
        <div className='bg-gray-100'>
          <div className='mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8'>
            <p className='text-center text-base font-semibold text-gray-500'>
              Trusted by over 5 very average small businesses
            </p>
            <div className='mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5'>
              <div className='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
                <img
                  className='h-12'
                  src='https://tailwindui.com/img/logos/tuple-logo-gray-400.svg'
                  alt='Tuple'
                />
              </div>
              <div className='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
                <img
                  className='h-12'
                  src='https://tailwindui.com/img/logos/mirage-logo-gray-400.svg'
                  alt='Mirage'
                />
              </div>
              <div className='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
                <img
                  className='h-12'
                  src='https://tailwindui.com/img/logos/statickit-logo-gray-400.svg'
                  alt='StaticKit'
                />
              </div>
              <div className='col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1'>
                <img
                  className='h-12'
                  src='https://tailwindui.com/img/logos/transistor-logo-gray-400.svg'
                  alt='Transistor'
                />
              </div>
              <div className='col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1'>
                <img
                  className='h-12'
                  src='https://tailwindui.com/img/logos/workcation-logo-gray-400.svg'
                  alt='Workcation'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* More main page content here... */}
    </main>
  );
}
