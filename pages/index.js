import { Fragment } from 'react';
import Image from 'next/image';
import klskyline from '../public/img/klskyline.jpeg';
import wincentLogo from '../public/img/wincentLogo.jpg';
import { Button } from '../components/Button';
import { InboxIcon, SparklesIcon } from '@heroicons/react/24/outline';
import xeroAdvisor1 from '../public/img/xeroAdvisor1.png';
import xeroSilver from '../public/img/xerosilver.png';
import wt from '../public/img/wt.jpg';
import xeroDash from '../public/img/dashboard.jpg';
import FaqHome from '../components/FaqData/FaqHome';
import munchie from '../public/img/munchiee.jpg';

import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid';
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  CogIcon,
  LockClosedIcon,
  ServerIcon,
  ShieldCheckIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from '@heroicons/react/24/outline';
import {
  AccountingIcon,
  BusinessIcon,
  ForeignIcon,
  HRIcon,
  LabaunIcon,
} from '../components/Navbar';
import Faqs from '../components/Faqs';
import Hero from '../components/Hero';

const features = [
  {
    name: 'Business Formation in Malaysia',
    description:
      'We offer a wide range of services which include all aspects of company formation, secretarial and other corporate services.',
    icon: () => <BusinessIcon className='text-white h-7 w-7' />,
  },
  {
    name: 'Accounting, Auditing & Bookkeeping',
    description:
      'We serve the small and medium-sized business and are recognised for providing quality services to our clients. Business leaders rely on our independent guidance on accounting and other issues to make more confident and informed decisions.',
    icon: () => <AccountingIcon className='text-white h-7 w-7' />,
  },
  {
    name: 'Human Resource Management',
    description:
      'We aim to lighten the burden of the management with a human resource service that is able to assist with payroll and talents.',
    icon: () => <HRIcon className='text-white h-7 w-7' />,
  },
  {
    name: 'Foriengned Owned Company',
    description:
      'We have the expertise in all areas of helping our overseas clients to settle in Malaysia.',
    icon: () => <ForeignIcon className='text-white h-7 w-7' />,
  },

  {
    name: 'Labuan Trust Services',
    description:
      'We will assist in channelling your businesses wealth, we will support in the changing of any business plans, and we will help in making sure your wealth ends up in the right hands.',
    icon: () => <LabaunIcon className='text-white h-7 w-7' />,
  },

  {
    name: 'Always Available',
    description:
      'We aim to provide a service which focuses on communication for our clients. We are always attentive to all our clients. At Klozer we thrive to build healthy releationships with our clients.',
    icon: ChatBubbleOvalLeftEllipsisIcon,
  },
];
export default function Home() {
  return (
    <main>
      {/* Hero card */}
      <Hero
        src={klskyline}
        heading1='Company Setting Up In Malaysia?'
        heading2='SDN BHD & Labuan Setup.'
        subtext=' Our years of experience means a complete hassle free setup in
        Malaysia.'
      >
        <Button variant='primary' txt='Contact Us' href='/contact' />
      </Hero>
      {/* 2nd section */}

      <div className='relative overflow-hidden bg-gray-100 '>
        <div className='relative'>
          <div className='lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8'>
            <div className='mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0'>
              <div>
                <div className='mt-6'>
                  <h2 className='text-3xl font-bold tracking-tight text-gray-900'>
                    The Klozer Group
                  </h2>
                  <p className='mt-4 text-lg text-gray-500'>
                    The Klozer Group comprising of accounting, consulting, and
                    taxation services entities. Klozer and its affiliate offer
                    an extensive range of professional services and a high
                    degree of specialisation. In addition to the traditional
                    accounting, assurance, and taxation services, the firm’s
                    professional services include business incorporation, human
                    resource, and auditing.
                  </p>
                  <div className='mt-6'>
                    <Button
                      href='/aboutus'
                      txt='Get Started'
                      variant='primary'
                    />
                  </div>
                </div>
              </div>
              <div className='mt-8 border-t border-gray-200 pt-6'>
                <blockquote>
                  <div>
                    <p className='text-base text-gray-500'>
                      &ldquo;We dont have to worry about any company legal
                      obligations. Klozer have completely handled everything for
                      us.&rdquo;
                    </p>
                  </div>
                  <footer className='mt-3'>
                    <div className='flex items-center space-x-3'>
                      <div className='flex-shrink-0'>
                        <img
                          className='h-6 w-6 rounded-full'
                          src='https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
                          alt=''
                        />
                      </div>
                      <div className='text-base font-medium text-gray-700'>
                        Marcia Hill, Digital Marketing Manager
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
            <div className='mt-12 sm:mt-16 lg:mt-10'>
              <div className='flex items-center justify-center lg:relative lg:m-0 lg:h-full lg:px-0 h-full sm:w-full mb-2'>
                <Image
                  src={wt}
                  height={500}
                  width={500}
                  alt='/'
                  className='rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 object-cover'
                />
              </div>
            </div>
          </div>
        </div>

        <div className='bg-gray-100 pt-12 sm:pt-16'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='mx-auto max-w-4xl text-center'>
              <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                Trusted by Businesses Globally
              </h2>
              <p className='mt-3 text-xl text-gray-500 sm:mt-4'>
                Leading Corporate Services Provider in Malaysia.
              </p>
            </div>
          </div>
          <div className='mt-10 bg-gray-100 pb-12 sm:pb-16'>
            <div className='relative'>
              <div className='absolute inset-0 h-1/2 bg-gray-100' />
              <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className='mx-auto max-w-4xl'>
                  <dl className='rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3'>
                    <div className='flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r'>
                      <dt className='order-2 mt-2 text-lg font-medium leading-6 text-gray-500'>
                        Successfull Cases
                      </dt>
                      <dd className='order-1 text-5xl font-bold tracking-tight text-indigo-600'>
                        2000+
                      </dd>
                    </div>
                    <div className='flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r'>
                      <dt className='order-2 mt-2 text-lg font-medium leading-6 text-gray-500'>
                        Years Established
                      </dt>
                      <dd className='order-1 text-5xl font-bold tracking-tight text-indigo-600'>
                        10+
                      </dd>
                    </div>
                    <div className='flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l'>
                      <dt className='order-2 mt-2 text-lg font-medium leading-6 text-gray-500'>
                        Response Within
                      </dt>
                      <dd className='order-1 text-5xl font-bold tracking-tight text-indigo-600'>
                        2 Hrs
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='bg-indigo-700'>
          <div className='mx-auto max-w-7xl py-16 px-4 sm:py-20 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-bold tracking-tight text-white'>
              The worlds most innovative companies use our app
            </h2>
            <div className='mt-8 flow-root lg:mt-10'>
              <div className='-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4'>
                <div className='mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0'>
                  <img
                    className='h-12'
                    src='https://tailwindui.com/img/logos/tuple-logo-indigo-300.svg'
                    alt='Tuple'
                  />
                </div>
                <div className='mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0'>
                  <img
                    className='h-12'
                    src='https://tailwindui.com/img/logos/mirage-logo-indigo-300.svg'
                    alt='Mirage'
                  />
                </div>
                <div className='mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0'>
                  <img
                    className='h-12'
                    src='https://tailwindui.com/img/logos/statickit-logo-indigo-300.svg'
                    alt='StaticKit'
                  />
                </div>
                <div className='mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0'>
                  <img
                    className='h-12'
                    src='https://tailwindui.com/img/logos/transistor-logo-indigo-300.svg'
                    alt='Transistor'
                  />
                </div>
                <div className='mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0'>
                  <img
                    className='h-12'
                    src='https://tailwindui.com/img/logos/workcation-logo-indigo-300.svg'
                    alt='Workcation'
                  />
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* features list section  */}
        <div className='relative bg-gray-100 py-10 sm:py-10 lg:py-10'>
          <div className='mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8'>
            <h2 className='text-lg font-semibold text-indigo-600'>
              Our Services
            </h2>
            <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
              Opening a business in Malaysia is simple ...
            </p>
            <p className='mx-auto mt-5 max-w-prose text-xl text-gray-500'>
              We cover all services
            </p>
            <div className='mt-12'>
              <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
                {features.map((feature) => (
                  <div key={feature.name} className='pt-6'>
                    <div className='flow-root rounded-lg bg-gray-50 px-6 pb-8'>
                      <div className='-mt-6'>
                        <div>
                          <span className='inline-flex items-center justify-center rounded-md bg-indigo-500 p-3 shadow-lg'>
                            <feature.icon
                              className='h-6 w-6 text-white'
                              aria-hidden='true'
                            />
                          </span>
                        </div>
                        <h3 className='mt-8 text-lg font-medium tracking-tight text-gray-900'>
                          {feature.name}
                        </h3>
                        <p className='mt-5 text-base text-gray-500'>
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* features list section ends  */}
        {/* XERO SECTION  */}
        <div className='mt-14'>
          <div className='lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8'>
            <div className='mx-auto max-w-xl px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0'>
              <div>
                <div className='flex justify-between '>
                  {/* <SparklesIcon
                      className='h-6 w-6 text-white'
                      aria-hidden='true'
                    /> */}
                  <Image src={xeroSilver} alt='/' width={200} />
                </div>
                <div className='mt-6'>
                  <h2 className='items-center text-3xl font-bold tracking-tight text-gray-900 flex'>
                    Xero Verified
                    <span className='text-indigo-600 ml-3'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='2.5'
                        stroke='currentColor'
                        class='w-7 h-7'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z'
                        />
                      </svg>
                    </span>
                  </h2>
                  <p className='mt-4 text-lg text-gray-500'>
                    Our accounting services not only help you plan for growth,
                    but help you achieve it by taking away as much of the
                    distracting bookkeeping, payroll and admin as possible.
                    Klozer are Verified by Xero.
                  </p>
                  <div className='mt-6'>
                    <Button
                      href='https://www.xero.com/my/advisors/bookkeeper/klozer-tech-17e9bc0e82f3/'
                      txt='Vist our Xero Page'
                      target='_blank'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-12 sm:mt-16 lg:col-start-1 lg:mt-0'>
              <div className='-ml-48 pr-4 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0'>
                <Image
                  className='w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none'
                  src={xeroDash}
                  alt='/'
                />
                {/* <img
                  className='w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none'
                  src='https://tailwindui.com/img/component-images/inbox-app-screenshot-2.jpg'
                  alt='Customer profile user interface'
                /> */}
              </div>
            </div>
          </div>
        </div>

        {/* Careers section  */}
        <div className='relative bg-gray-100 py-16'>
          <div
            className='absolute inset-x-0 top-0 hidden h-1/2 bg-gray-100 lg:block'
            aria-hidden='true'
          />
          <div className='mx-auto max-w-7xl bg-indigo-700 lg:bg-transparent lg:px-8'>
            <div className='lg:grid lg:grid-cols-12'>
              <div className='relative z-10 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-16'>
                <div
                  className='absolute inset-x-0 h-1/2 bg-gray-100 lg:hidden'
                  aria-hidden='true'
                />
                <div className='mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0'>
                  <div className='aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1'>
                    <Image
                      src={munchie}
                      className='rounded-3xl object-cover object-center shadow-2xl '
                      alt='/'
                    />
                  </div>
                </div>
              </div>

              <div className='relative bg-indigo-700 lg:col-span-10 lg:col-start-3 lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center lg:rounded-3xl'>
                <div
                  className='absolute inset-0 hidden overflow-hidden rounded-3xl lg:block'
                  aria-hidden='true'
                >
                  <svg
                    className='absolute bottom-full left-full translate-y-1/3 -translate-x-2/3 transform xl:bottom-auto xl:top-0 xl:translate-y-0'
                    width={404}
                    height={384}
                    fill='none'
                    viewBox='0 0 404 384'
                    aria-hidden='true'
                  >
                    <defs>
                      <pattern
                        id='64e643ad-2176-4f86-b3d7-f2c5da3b6a6d'
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                        patternUnits='userSpaceOnUse'
                      >
                        <rect
                          x={0}
                          y={0}
                          width={4}
                          height={4}
                          className='text-indigo-500'
                          fill='currentColor'
                        />
                      </pattern>
                    </defs>
                    <rect
                      width={404}
                      height={384}
                      fill='url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)'
                    />
                  </svg>
                  <svg
                    className='absolute top-full -translate-y-1/3 -translate-x-1/3 transform xl:-translate-y-1/2'
                    width={404}
                    height={384}
                    fill='none'
                    viewBox='0 0 404 384'
                    aria-hidden='true'
                  >
                    <defs>
                      <pattern
                        id='64e643ad-2176-4f86-b3d7-f2c5da3b6a6d'
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                        patternUnits='userSpaceOnUse'
                      >
                        <rect
                          x={0}
                          y={0}
                          width={4}
                          height={4}
                          className='text-indigo-500'
                          fill='currentColor'
                        />
                      </pattern>
                    </defs>
                    <rect
                      width={404}
                      height={384}
                      fill='url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)'
                    />
                  </svg>
                </div>
                <div className='relative mx-auto max-w-md space-y-6 py-12 px-4 sm:max-w-3xl sm:py-16 sm:px-6 lg:col-span-6 lg:col-start-4 lg:max-w-none lg:p-0'>
                  <h2
                    className='text-3xl font-bold tracking-tight text-white'
                    id='join-heading'
                  >
                    Join our team
                  </h2>
                  <p className='text-lg text-white'>
                    Looking for a place to grow in your career and personal
                    life? Partner with us! Be a part of our youthful team of
                    dreamers today.
                  </p>
                  <Button
                    href='/careers'
                    txt='Explore Open Positions '
                    className='py-3 h-full mt-7'
                  />
                  {/* <a
                    className='block w-full rounded-md border border-transparent bg-white py-3 px-5 text-center text-base font-medium text-indigo-700 shadow-md hover:bg-gray-50 sm:inline-block sm:w-auto'
                    href='#'
                  >
                    Explore open positions
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA SECTION  */}

        {/* CTA SECTION ENDS  */}
      </div>
    </main>
  );
}
