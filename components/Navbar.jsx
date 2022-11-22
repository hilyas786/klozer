import Link from 'next/link';
import ThemeChanger from './DarkSwitch';
import { Disclosure } from '@headlessui/react';
import React from 'react';
import Image from 'next/image';
import klozerLogo from '../public/img/klozerlogo.png';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Button } from './Button';

export function BusinessIcon({ className }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke-width='1.5'
      stroke='currentColor'
      className={className}
    >
      <path
        stroke-linecap='round'
        stroke-linejoin='round'
        d='M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z'
      />
    </svg>
  );
}

export function AccountingIcon({ className }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 64 64'
      aria-hidden='true'
      fill='currentColor'
      strokeWidth={1}
      stroke='currentColor'
      className={className}
    >
      <path
        d='M56.49,41.38H47.21V7.65a1.5,1.5,0,0,0-1.5-1.5H7.51A1.5,1.5,0,0,0,6,7.65V46.71A11.18,11.18,0,0,0,16.37,57.83l.78,0H44.24A14.47,14.47,0,0,0,55,53.23a10.3,10.3,0,0,0,2.51-4.64A24.22,24.22,0,0,0,58,42.88,1.5,1.5,0,0,0,56.49,41.38ZM17.15,54.85l-.59,0A8.16,8.16,0,0,1,9,46.71V9.15h35.2V41.38H26.79a1.5,1.5,0,0,0-1.5,1.5v3.84A8.15,8.15,0,0,1,17.15,54.85Zm37.41-7a7.31,7.31,0,0,1-1.82,3.33,11.47,11.47,0,0,1-8.51,3.64H24.75a11.12,11.12,0,0,0,3.54-8.14V44.38H55A17,17,0,0,1,54.56,47.88ZM25.84,15.49a1.5,1.5,0,0,1,1.5-1.5H39a1.5,1.5,0,0,1,0,3H27.34A1.5,1.5,0,0,1,25.84,15.49Zm14.67,10.3a1.5,1.5,0,0,1-1.5,1.5H28.44a1.5,1.5,0,0,1,0-3H39A1.5,1.5,0,0,1,40.51,25.79ZM39,37.58H17.88a1.5,1.5,0,1,1,0-3H39a1.5,1.5,0,0,1,0,3ZM22.09,24.05a4.51,4.51,0,0,1-.79,3.78,4.46,4.46,0,0,1-1.91,1.43V30.5a1.5,1.5,0,0,1-3,0V29.41a4.52,4.52,0,0,1-2.94-2.86,1.5,1.5,0,0,1,2.85-1,1.53,1.53,0,0,0,1.48,1,1.5,1.5,0,0,0,1.39-1.87,1.29,1.29,0,0,0-.89-.88c-.46-.17-1-.2-1.42-.34a4.56,4.56,0,0,1-3.41-4.64A4.5,4.5,0,0,1,16.4,15V13.8a1.5,1.5,0,1,1,3,0v1.14a4.45,4.45,0,0,1,1.08.52,4.5,4.5,0,0,1,1.92,3.16,1.5,1.5,0,1,1-3,.37,1.5,1.5,0,0,0-3,.07,1.62,1.62,0,0,0,1.27,1.59c.2.06.4.1.59.14a5.6,5.6,0,0,1,1.85.64A4.16,4.16,0,0,1,22.09,24.05Z'
        data-name='Layer 6'
      />
    </svg>
  );
}
// classname for nav is class='text-indigo-600 flex-shrink-0 h-7 w-7'
export function HRIcon({ className }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke-width='1.5'
      stroke='currentColor'
      className={className}
    >
      <path
        stroke-linecap='round'
        stroke-linejoin='round'
        d='M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z'
      />
    </svg>
  );
}
export function ForeignIcon({ className }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke-width='1.5'
      stroke='currentColor'
      className={className}
    >
      <path
        stroke-linecap='round'
        stroke-linejoin='round'
        d='M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525'
      />
    </svg>
  );
}
export function LabaunIcon({ className }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke-width='1.5'
      stroke='currentColor'
      className={className}
    >
      <path
        stroke-linecap='round'
        stroke-linejoin='round'
        d='M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z'
      />
    </svg>
  );
}

function WhatsappIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      enable-background='new 0 0 24 24'
      stroke='currentColor'
      strokeWidth='0.2'
      fill='currentColor'
      viewBox='0 0 24 24'
      className='flex-shrink-0 h-6 w-6 text-indigo-600'
    >
      <path d='M16.6 14c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.2-.5-.5-1-1.1-1.4-1.7-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.3.2-.4.1-.1.1-.3 0-.4-.1-.1-.6-1.3-.8-1.8-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3-.6.6-.9 1.3-.9 2.1.1.9.4 1.8 1 2.6 1.1 1.6 2.5 2.9 4.2 3.7.5.2.9.4 1.4.5.5.2 1 .2 1.6.1.7-.1 1.3-.6 1.7-1.2.2-.4.2-.8.1-1.2l-.4-.2m2.5-9.1C15.2 1 8.9 1 5 4.9c-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2 5.5 0 9.9-4.4 9.9-9.9.1-2.6-1-5.1-2.8-7m-2.7 14c-1.3.8-2.8 1.3-4.4 1.3-1.5 0-2.9-.4-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3c-2.4-4-1.2-9 2.7-11.5S16.6 3.7 19 7.5c2.4 3.9 1.3 9-2.6 11.4' />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke-width='1.5'
      stroke='currentColor'
      className='flex-shrink-0 h-6 w-6 text-indigo-600'
    >
      <path
        stroke-linecap='round'
        stroke-linejoin='round'
        d='M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z'
      />
    </svg>
  );
}

const features = [
  {
    name: 'Company Incorporation',
    href: '/services/company-incorporation',
    description:
      'Get a better understanding of where your traffic is coming from.',
    icon: BusinessIcon,
  },
  {
    name: 'Accounting, Auditng & Tax Filing',
    href: '/services/account-audit-tax/account-audit-tax-home',
    description: 'Speak directly to your customers in a more meaningful way.',
    icon: AccountingIcon,
  },
  {
    name: 'Human Resource',
    href: '/services/humanresource',
    description: "Your customers' data will be safe and secure.",
    icon: HRIcon,
  },
  {
    name: 'Labaun Trust Malaysia',
    href: '/services/labuantrust',
    description:
      'Build strategic funnels that will drive your customers to convert',
    icon: LabaunIcon,
  },
];
const callsToAction = [
  {
    name: 'WhatsApp Us',
    href: 'https://api.whatsapp.com/send?phone=60192049269&text=Hi%20Klozer,%20im%20interested%20in%20opening%20a%20business%20in%20malaysia.',
    icon: WhatsappIcon,
  },
  { name: 'Email Us', href: 'mailto:haider@email.com', icon: EmailIcon },
];
// const resources = [
//   {
//     name: 'Help Center',
//     description:
//       'Get all of your questions answered in our forums or contact support.',
//     href: '#',
//     icon: LifebuoyIcon,
//   },
//   {
//     name: 'Guides',
//     description:
//       'Learn how to maximize our platform to get the most out of it.',
//     href: '#',
//     icon: BookmarkSquareIcon,
//   },
//   {
//     name: 'Events',
//     description:
//       'See what meet-ups and other events we might be planning near you.',
//     href: '#',
//     icon: CalendarIcon,
//   },
//   {
//     name: 'Security',
//     description: 'Understand how we take your privacy seriously.',
//     href: '#',
//     icon: ShieldCheckIcon,
//   },
// ];
// const recentPosts = [
//   { id: 1, name: 'Boost your conversion rate', href: '#' },
//   {
//     id: 2,
//     name: 'How to use search engine optimization to drive traffic to your site',
//     href: '#',
//   },
//   { id: 3, name: 'Improve your customer experience', href: '#' },
// ];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  return (
    <div className=' bg-gray-200 sticky top-0 z-50 '>
      <Popover className='sticky top-0 z-50 bg-gray-100 '>
        <div className='mx-auto max-w-7xl px-4 sm:px-6'>
          <div className='flex items-center justify-between py-6 md:justify-start md:space-x-10'>
            <div className='flex justify-start lg:w-0 lg:flex-1'>
              <Link href='/'>
                <span className='sr-only'>Klozer</span>
                <Image src={klozerLogo} alt='/' width={170} height={170} />
              </Link>
            </div>
            <div className='-my-2 -mr-2 md:hidden'>
              <Popover.Button className='inline-flex items-center justify-center rounded-md bg-gray-100 p-2 text-black hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                <span className='sr-only'>Open menu</span>
                <Bars3Icon className='h-6 w-6' aria-hidden='true' />
              </Popover.Button>
            </div>
            <Popover.Group as='nav' className='hidden space-x-10 md:flex'>
              <Popover className='relative'>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-indigo-600' : 'text-gray-900',
                        'group inline-flex items-center  bg-gray-100 text-base font-medium hover:text-gray-900 '
                      )}
                    >
                      <span>Services</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-gray-600' : 'text-gray-400',
                          'ml-2 h-5 w-5 group-hover:text-gray-500'
                        )}
                        aria-hidden='true'
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter='transition ease-out duration-200'
                      enterFrom='opacity-0 translate-y-1'
                      enterTo='opacity-100 translate-y-0'
                      leave='transition ease-in duration-150'
                      leaveFrom='opacity-100 translate-y-0'
                      leaveTo='opacity-0 translate-y-1'
                    >
                      <Popover.Panel className='absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2'>
                        <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                          <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                            {features.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className='-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50'
                              >
                                <item.icon
                                  className='h-6 w-6 flex-shrink-0 text-indigo-600'
                                  aria-hidden='true'
                                />
                                <div className='ml-4'>
                                  <p className='text-base font-medium text-gray-900'>
                                    {item.name}
                                  </p>
                                  <p className='mt-1 text-sm text-gray-500'>
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                          <div className='space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8'>
                            {callsToAction.map((item) => (
                              <div key={item.name} className='flow-root'>
                                <Link
                                  href={item.href}
                                  className='-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100'
                                >
                                  <item.icon
                                    className='h-6 w-6 flex-shrink-0 text-gray-400'
                                    aria-hidden='true'
                                  />
                                  <span className='ml-3'>{item.name}</span>
                                </Link>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              <Link
                href='/aboutus'
                classname='text-base font-medium text-gray-500 hover:text-gray-900'
              >
                About Us
              </Link>

              <Link
                href='/careers'
                classname='text-base font-medium text-gray-500 hover:text-gray-900'
              >
                Careers
              </Link>
            </Popover.Group>
            <div className='hidden items-center justify-end md:flex md:flex-1 lg:w-0'>
              {/*  */}
              <Button href='/contact' txt='Contact Us' />
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter='duration-200 ease-out'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='duration-100 ease-in'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          <Popover.Panel
            focus
            className='absolute inset-x-0 top-0 z-20 origin-top-right transform p-2 transition md:hidden'
          >
            <div className='divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5'>
              <div className='px-5 pt-5 pb-6'>
                <div className='flex items-center justify-between'>
                  <Image src={klozerLogo} alt='/' width={150} height={150} />
                  <div className='-mr-2'>
                    <Popover.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                      <span className='sr-only'>Close menu</span>
                      <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                    </Popover.Button>
                  </div>
                </div>
                <div className='mt-6'>
                  <nav className='grid gap-y-8'>
                    {features.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className='-m-3 flex items-center rounded-md p-3 hover:bg-gray-50'
                      >
                        <item.icon
                          className='h-6 w-6 flex-shrink-0 text-indigo-600'
                          aria-hidden='true'
                        />
                        <span className='ml-3 text-base font-medium text-gray-900'>
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
              <div className='space-y-6 py-2 px-5'>
                {/* <div className='grid grid-cols-2 gap-y-4 gap-x-8'>
                  <a
                    href='#'
                    className='text-base font-medium text-gray-900 hover:text-gray-700'
                  >
                    Pricing
                  </a>

                  <a
                    href='#'
                    className='text-base font-medium text-gray-900 hover:text-gray-700'
                  >
                    Docs
                  </a>
                  {resources.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='text-base font-medium text-gray-900 hover:text-gray-700'
                    >
                      {item.name}
                    </a>
                  ))}
                </div> */}
                <div className='flex items-center justify-center w-full'>
                  <Button
                    href='/contact'
                    txt='Contact Us'
                    variant='primary'
                    className='text-center items-center justify-center flex px-5 py-4 '
                  />
                  {/* <a
                    href='#_'
                    class=' relative w-full inline-flex items-center justify-center py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group'
                  >
                    <span class='absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full'></span>
                    <span class='absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12'>
                      <svg
                        class='w-5 h-5 text-green-400'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M14 5l7 7m0 0l-7 7m7-7H3'
                        />
                      </svg>
                    </span>
                    <span class='absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200'>
                      <svg
                        class='w-5 h-5 text-green-400'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M14 5l7 7m0 0l-7 7m7-7H3'
                        ></path>
                      </svg>
                    </span>
                    <span class='relative w-full text-center transition-colors duration-200 ease-in-out group-hover:text-white'>
                      Contact Us
                    </span>
                  </a> */}

                  {/* <a
                    href='#'
                    className='flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700'
                  >
                    Contact Us
                  </a>
                  <p className='mt-6 text-center text-base font-medium text-gray-500'>
                    Existing customer?
                    <a
                      href='#'
                      className='text-indigo-600 hover:text-indigo-500'
                    >
                      Sign in
                    </a>
                  </p> */}
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}
