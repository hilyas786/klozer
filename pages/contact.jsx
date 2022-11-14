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

const offices = [
  {
    id: 1,
    city: 'Los Angeles',
    address: ['4556 Brendan Ferry', 'Los Angeles, CA 90210'],
  },
  {
    id: 2,
    city: 'New York',
    address: ['886 Walter Streets', 'New York, NY 12345'],
  },
  {
    id: 3,
    city: 'Toronto',
    address: ['7363 Cynthia Pass', 'Toronto, ON N3Y 4H8'],
  },
  { id: 4, city: 'London', address: ['114 Cobble Lane', 'London N1 2EF'] },
];

const footerNavigation = {
  solutions: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' },
  ],
  support: [
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'API Status', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Partners', href: '#' },
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props) => (
        <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
          <path
            fillRule='evenodd'
            d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
            clipRule='evenodd'
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props) => (
        <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
          <path
            fillRule='evenodd'
            d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
            clipRule='evenodd'
          />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (props) => (
        <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
          <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: '#',
      icon: (props) => (
        <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
          <path
            fillRule='evenodd'
            d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
            clipRule='evenodd'
          />
        </svg>
      ),
    },
    {
      name: 'Dribbble',
      href: '#',
      icon: (props) => (
        <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
          <path
            fillRule='evenodd'
            d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z'
            clipRule='evenodd'
          />
        </svg>
      ),
    },
  ],
};

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
      <main>
        {/* Header */}
        <div className='bg-warm-gray-50'>
          <div className='py-24 lg:py-32'>
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
          className='relative bg-white'
          aria-labelledby='contact-heading'
        >
          <div
            className='absolute h-1/2 w-full bg-warm-gray-50'
            aria-hidden='true'
          />
          {/* Decorative dot pattern */}
          <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
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
                        <span className='ml-3'>60195195</span>
                      </dd>
                      <dt>
                        <span className='sr-only'>Email</span>
                      </dt>
                      <dd className='flex text-base text-teal-50'>
                        <EnvelopeIcon
                          className='h-6 w-6 flex-shrink-0 text-teal-200'
                          aria-hidden='true'
                        />
                        <span className='ml-3'>klozer.com</span>
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
                        <span className='ml-3'>1235465456</span>
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
      </main>
    </>
  );
}
