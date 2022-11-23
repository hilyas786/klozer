import { Fragment, useState } from 'react';
import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';
import {
  Bars3Icon,
  EnvelopeIcon,
  PhoneIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { Button } from '../components/Button';

function BusinessIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke-width='1.5'
      stroke='currentColor'
      className='text-teal-200 flex-shrink-0 h-7 w-7'
    >
      <path
        stroke-linecap='round'
        stroke-linejoin='round'
        d='M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z'
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
      className='flex-shrink-0 h-6 w-6 text-teal-200'
    >
      <path d='M16.6 14c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.2-.5-.5-1-1.1-1.4-1.7-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.3.2-.4.1-.1.1-.3 0-.4-.1-.1-.6-1.3-.8-1.8-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3-.6.6-.9 1.3-.9 2.1.1.9.4 1.8 1 2.6 1.1 1.6 2.5 2.9 4.2 3.7.5.2.9.4 1.4.5.5.2 1 .2 1.6.1.7-.1 1.3-.6 1.7-1.2.2-.4.2-.8.1-1.2l-.4-.2m2.5-9.1C15.2 1 8.9 1 5 4.9c-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2 5.5 0 9.9-4.4 9.9-9.9.1-2.6-1-5.1-2.8-7m-2.7 14c-1.3.8-2.8 1.3-4.4 1.3-1.5 0-2.9-.4-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3c-2.4-4-1.2-9 2.7-11.5S16.6 3.7 19 7.5c2.4 3.9 1.3 9-2.6 11.4' />
    </svg>
  );
}
export default function Contact() {
  const [submit, onSubmit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e) {
    setIsLoading(true);
    e.preventDefault();

    const formData = {};

    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    await fetch('/api/mail', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
    console.log(formData);
    onSubmit(true);
    setIsLoading(false);
  }
  return (
    <>
      <div className='overflow-hidden '>
        {/* Header */}
        <div className='bg-gray-100'>
          <div className='py-[80px] lg:py-32'>
            <div className='relative z-10 mx-auto max-w-7xl pl-4 pr-8 sm:px-6 lg:px-8'>
              <h1 className='text-4xl font-bold tracking-tight text-warm-gray-900 sm:text-5xl lg:text-6xl'>
                We would love to hear from you.
              </h1>
              <p className='mt-6 max-w-3xl text-xl text-warm-gray-500'>
                At Klozer, we have a client first approach. We are more than
                happy to assist you with any queries which you may have.
              </p>
            </div>
          </div>
        </div>

        {/* Contact section */}
        <section
          className='relative bg-gray-100'
          aria-labelledby='contact-heading'
        >
          <div
            className='absolute h-1/2 w-full bg-warm-gray-50'
            aria-hidden='true'
          />
          {/* Decorative dot pattern */}
          <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 '>
            <svg
              className='absolute top-0 right-0 z-0 -translate-y-16 translate-x-1/2 transform sm:translate-x-1/4 md:-translate-y-24 lg:-translate-y-72'
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
                    className='text-warm-gray-200'
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
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='relative bg-white shadow-xl'>
              <h2 id='contact-heading' className='sr-only'>
                Contact us
              </h2>
              {!submit ? (
                <div className='grid grid-cols-1 lg:grid-cols-3'>
                  {/* Contact information */}
                  <div className='relative overflow-hidden bg-gradient-to-b from-indigo-800 to-teal-600 py-10 px-6 sm:px-10 xl:p-12'>
                    {/* Decorative angle backgrounds */}
                    <div
                      className='pointer-events-none absolute inset-0 sm:hidden'
                      aria-hidden='true'
                    >
                      <svg
                        className='absolute inset-0 h-full w-full'
                        width={343}
                        height={388}
                        viewBox='0 0 343 388'
                        fill='none'
                        preserveAspectRatio='xMidYMid slice'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z'
                          fill='url(#linear1)'
                          fillOpacity='.1'
                        />
                        <defs>
                          <linearGradient
                            id='linear1'
                            x1='254.553'
                            y1='107.554'
                            x2='961.66'
                            y2='814.66'
                            gradientUnits='userSpaceOnUse'
                          >
                            <stop stopColor='#fff' />
                            <stop offset={1} stopColor='#fff' stopOpacity={0} />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div
                      className='pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 sm:block lg:hidden'
                      aria-hidden='true'
                    >
                      <svg
                        className='absolute inset-0 h-full w-full'
                        width={359}
                        height={339}
                        viewBox='0 0 359 339'
                        fill='none'
                        preserveAspectRatio='xMidYMid slice'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z'
                          fill='url(#linear2)'
                          fillOpacity='.1'
                        />
                        <defs>
                          <linearGradient
                            id='linear2'
                            x1='192.553'
                            y1='28.553'
                            x2='899.66'
                            y2='735.66'
                            gradientUnits='userSpaceOnUse'
                          >
                            <stop stopColor='#fff' />
                            <stop offset={1} stopColor='#fff' stopOpacity={0} />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div
                      className='pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 lg:block'
                      aria-hidden='true'
                    >
                      <svg
                        className='absolute inset-0 h-full w-full'
                        width={160}
                        height={678}
                        viewBox='0 0 160 678'
                        fill='none'
                        preserveAspectRatio='xMidYMid slice'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z'
                          fill='url(#linear3)'
                          fillOpacity='.1'
                        />
                        <defs>
                          <linearGradient
                            id='linear3'
                            x1='192.553'
                            y1='325.553'
                            x2='899.66'
                            y2='1032.66'
                            gradientUnits='userSpaceOnUse'
                          >
                            <stop stopColor='#fff' />
                            <stop offset={1} stopColor='#fff' stopOpacity={0} />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <h3 className='text-lg font-medium text-white'>
                      Contact information
                    </h3>
                    <p className='mt-6 max-w-3xl text-base text-teal-50'>
                      If you live nearby and would like to talk about any aspect
                      of our services, feel free to stop by our offices during
                      regular business hours.
                    </p>
                    <dl className='mt-8 space-y-6'>
                      <dt>
                        <span className='sr-only'>Phone number</span>
                      </dt>
                      <dd className='flex text-base text-teal-50'>
                        <BusinessIcon
                          className='h-6 w-6 flex-shrink-0 text-teal-200'
                          aria-hidden='true'
                        />
                        <span className='ml-3'>
                          Klozer Consultancy Services Sdn Bhd. <br />
                          No 19A, Jalan SS25/23 Petaling Jaya, Malaysia
                        </span>
                      </dd>
                      <dt>
                        <span className='sr-only'>Phone number</span>
                      </dt>
                      <dd className='flex text-base text-teal-50'>
                        <PhoneIcon
                          className='h-6 w-6 flex-shrink-0 text-teal-200'
                          aria-hidden='true'
                        />
                        <span className='ml-3'>+60378876071</span>
                      </dd>
                      <dt>
                        <span className='sr-only'>Email</span>
                      </dt>
                      <dd className='flex text-base text-teal-50'>
                        <EnvelopeIcon
                          className='h-6 w-6 flex-shrink-0 text-teal-200'
                          aria-hidden='true'
                        />
                        <span className='ml-3'>wincentlow@klozergroup.com</span>
                      </dd>
                      <dt>
                        <span className='sr-only'>Email</span>
                      </dt>
                      <dd className='flex text-base text-teal-50'>
                        <Link
                          href='https://api.whatsapp.com/send?phone=60192049269&text=Hi%20Klozer,%20im%20interested%20in%20opening%20a%20business%20in%20malaysia.'
                          alt='/'
                        >
                          <WhatsappIcon
                            className='h-6 w-6 flex-shrink-0 text-teal-200'
                            aria-hidden='true'
                          />
                        </Link>
                        <span className='ml-3'>+60123193515</span>
                      </dd>
                    </dl>
                  </div>

                  {/* Contact form */}
                  <div className='py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12'>
                    <h3 className='text-lg font-medium text-warm-gray-900'>
                      Send us a message
                    </h3>
                    <form
                      onSubmit={handleSubmit}
                      method='POST'
                      className='mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'
                    >
                      <div>
                        <label
                          htmlFor='first-name'
                          className='block text-sm font-medium text-warm-gray-900'
                        >
                          First name
                        </label>
                        <div className='mt-1'>
                          <input
                            required
                            type='name'
                            name='firstName'
                            id='firstName'
                            autoComplete='given-name'
                            className='block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-teal-500 focus:ring-teal-500 border'
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor='email'
                          className='block text-sm font-medium text-warm-gray-900'
                        >
                          Email
                        </label>
                        <div className='mt-1'>
                          <input
                            required
                            id='email'
                            name='email'
                            type='email'
                            autoComplete='email'
                            className='block w-full rounded-md border-warm-gray-300 border py-3 px-4 text-warm-gray-900 shadow-sm focus:border-teal-500 focus:ring-teal-500'
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor='email'
                          className='block text-sm font-medium text-warm-gray-900'
                        >
                          Company Name
                        </label>
                        <div className='mt-1'>
                          <input
                            id='companyname'
                            name='companyname'
                            type='text'
                            className='block w-full rounded-md border-warm-gray-300 border py-3 px-4 text-warm-gray-900 shadow-sm focus:border-teal-500 focus:ring-teal-500'
                          />
                        </div>
                      </div>
                      <div>
                        <div className='sm:col-span-2'>
                          <label
                            htmlFor='phone'
                            className='block text-sm font-medium text-warm-gray-900'
                          >
                            Phone
                          </label>
                        </div>
                        <div className='mt-1'>
                          <input
                            type='text'
                            name='phone'
                            id='phone'
                            autoComplete='tel'
                            className='block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-teal-500 focus:ring-teal-500 border'
                            aria-describedby='phone-optional'
                          />
                        </div>
                      </div>

                      <div className='sm:col-span-2'>
                        <label
                          htmlFor='incorp'
                          className='block text-sm font-medium text-warm-gray-900'
                        >
                          What type of company incorporation are you looking
                          for?
                        </label>
                        <div className='mt-1'>
                          <select
                            required
                            name='incorp'
                            id='incorp'
                            className='block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-teal-500 focus:ring-teal-500 border '
                          >
                            <option selected disabled>
                              ------
                            </option>
                            <option value='SDN.BHD'>
                              SDN.BHD / Private Limited
                            </option>
                            <option value='Labuan/Offshore Company'>
                              Labuan / Offshore Company
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className='sm:col-span-2'>
                        <label
                          htmlFor='visa'
                          className='block text-sm font-medium text-warm-gray-900'
                        >
                          Do you want to apply for a work permit?
                        </label>
                        <div className='mt-1'>
                          <select
                            required
                            name='visa'
                            id='visa'
                            className='block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-teal-500 focus:ring-teal-500 border '
                          >
                            <option selected disabled>
                              ------
                            </option>
                            <option value='Yes'>Yes</option>
                            <option value='No'>No</option>
                          </select>
                        </div>
                      </div>
                      <div className='sm:col-span-2'>
                        <div className='flex justify-between'>
                          <label
                            htmlFor='message'
                            className='block text-sm font-medium text-warm-gray-900'
                          >
                            Message
                          </label>
                          <span
                            id='message-max'
                            className='text-sm text-warm-gray-500'
                          >
                            Max. 500 characters
                          </span>
                        </div>
                        <div className='mt-1'>
                          <textarea
                            id='message'
                            name='message'
                            rows={4}
                            className='block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-teal-500 focus:ring-teal-500 border'
                            aria-describedby='message-max'
                            defaultValue={''}
                          />
                        </div>
                      </div>
                      <div className='sm:col-span-2 sm:flex sm:justify-end'>
                        <button
                          type='submit'
                          className='relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-white group
                        
                        
                        '
                        >
                          {isLoading ? (
                            <svg
                              class='animate-spin ml-7 h-5 w-5 text-white'
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                            >
                              <circle
                                class='opacity-20'
                                cx='12'
                                cy='12'
                                r='10'
                                stroke='currentColor'
                                stroke-width='4'
                              />
                              <path
                                class='opacity-15'
                                fill='currentColor'
                                d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                              />
                            </svg>
                          ) : (
                            <>
                              <span class='absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full' />
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
                              <span class='relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white text-base'>
                                Submit
                              </span>
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              ) : (
                <div className='  bg-black shadow rounded-2xl py-12 lg:px-28 px-8'>
                  <p className='md:text-3xl text-xl font-bold leading-7 text-center text-gray-700 dark:text-white'>
                    Thank You, We will be in touch soon!
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
