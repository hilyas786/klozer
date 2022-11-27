import React from 'react';
import Image from 'next/image';
import { SparklesIcon, BriefcaseIcon } from '@heroicons/react/24/outline';
import IntroSection from '../components/IntroSection';
import personaltouch from '../public/img/personaltouch.jpg';
import wt from '../public/img/wt.jpg';
import working from '../public/img/working.jpg';
import Button from '../components/Button';

const whyus = [
  {
    description:
      'We know what we are doing. We have gained the trust of more than 1,000 companies',
  },
  {
    description:
      'Register a company from anywhere in the world. Just contact us!',
  },
  {
    description:
      'We are fast With Klozer, your company will be ready to operate in Malaysia in less than a week',
  },
];

export default function Aboutus() {
  return (
    <>
      <IntroSection
        smallHeading='Personal touch'
        mainHeading='About us'
        paragraph='Klozer Group, corporate services provider in Malaysia. At Klozer our main focus is client satisfaction. One stop solution that covers accounting, incoporation, taxations, consulting, visa and so much more.'
        Title1='Client Orientated'
        Title2='Everything Covered'
        Title3='Responsive Team'
        showButton={false}
      />

      <div className='relative overflow-hidden bg-gray-100 pt-12 pb-32'>
        <div className='relative'>
          <div className='lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8'>
            <div className='mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0'>
              <div>
                <div>
                  <span className='flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600'>
                    <BriefcaseIcon
                      className='h-8 w-8 text-white'
                      aria-hidden='true'
                    />
                  </span>
                </div>
                <div className='mt-6'>
                  <h2 className='text-3xl font-bold tracking-tight text-gray-900'>
                    Personal Touch.
                  </h2>
                  <p className='mt-4 text-lg text-gray-500'>
                    Let us handle all the processes from{' '}
                    <span className='text-indigo-600 font-semibold'>
                      A to Z
                    </span>{' '}
                    as you build your company here. We will personally guide you
                    through, ensuring that you are in the best possible position
                    to fulfil your business vision.
                  </p>
                  <div className='mt-6'>
                    <Button href='/contact' txt='Contact Us' />
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-12 sm:mt-16 lg:mt-0'>
              <div className='-mr-48 pl-4 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0'>
                <Image
                  priority
                  src={personaltouch}
                  className='w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none'
                  alt='/'
                />
              </div>
            </div>
          </div>
        </div>

        <div className='mt-24'>
          <div className='lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8'>
            <div className='mx-auto max-w-xl px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0'>
              <div>
                <div>
                  <span className='flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600'>
                    <SparklesIcon
                      className='h-8 w-8 text-white'
                      aria-hidden='true'
                    />
                  </span>
                </div>
                <div className='mt-6'>
                  <h2 className='text-3xl font-bold tracking-tight text-gray-900'>
                    Who is Klozer for ?
                  </h2>
                  <p className='mt-4 text-lg text-gray-500'>
                    Klozer is for every one and all! Begin Your Journey with Us.
                    We Promise Satisfaction. If you are a Malaysian, the process
                    is simple and fast. <br /> <br /> International Clients If
                    you are a non-Malaysian,{' '}
                    <span className='text-indigo-600 font-semibold'>
                      don’t worry!
                    </span>{' '}
                    Our dedicated team will ensure that every necessary process
                    is settled with accuracy and efficiency.
                  </p>
                  <div className='mt-6'>
                    <Button href='/contact' txt='Contact Us' />
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-12 sm:mt-16 lg:col-start-1 lg:mt-0'>
              <div className='-ml-48 pr-4 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0'>
                <Image
                  priority
                  src={working}
                  className='w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none '
                  alt='/'
                />
              </div>
            </div>
          </div>
        </div>

        <div className='relative'>
          <div className='lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8'>
            <div className='mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0'>
              <div>
                <div className='mt-10'>
                  <span className='flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600'>
                    <BriefcaseIcon
                      className='h-8 w-8 text-white'
                      aria-hidden='true'
                    />
                  </span>
                </div>
                <div className='mt-6'>
                  <h2 className='text-3xl font-bold tracking-tight text-gray-900'>
                    Why consider Klozer?
                  </h2>
                  {whyus.map((item) => (
                    <ul
                      key={item.description}
                      className='list-disc text-gray-500 text-lg mt-4'
                    >
                      <li>{item.description}</li>
                    </ul>
                  ))}
                  <div className='mt-8 overflow-hidden'>
                    <dl className='-mx-8 -mt-8 flex flex-wrap'>
                      <div className='flex flex-col px-8 pt-8'>
                        <dt className='order-2 text-base font-medium text-gray-500'>
                          Succesfull Cases
                        </dt>
                        <dd className='order-1 text-2xl font-bold text-indigo-600 sm:text-3xl sm:tracking-tight'>
                          2000+
                        </dd>
                      </div>
                      <div className='flex flex-col px-8 pt-8'>
                        <dt className='order-2 text-base font-medium text-gray-500'>
                          Years Established
                        </dt>
                        <dd className='order-1 text-2xl font-bold text-indigo-600 sm:text-3xl sm:tracking-tight'>
                          10+
                        </dd>
                      </div>
                      <div className='flex flex-col px-8 pt-8'>
                        <dt className='order-2 text-base font-medium text-gray-500'>
                          Response Within
                        </dt>
                        <dd className='order-1 text-2xl font-bold text-indigo-600 sm:text-3xl sm:tracking-tight'>
                          2 Hrs
                        </dd>
                      </div>
                    </dl>
                  </div>
                  <div className='mt-6'>
                    <Button href='/contact' txt='Contact Us' />
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-12 sm:mt-16 lg:mt-0'>
              <div className='-mr-48 pl-4 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0'>
                <Image
                  priority
                  src={wt}
                  className='w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none'
                  alt='/'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
