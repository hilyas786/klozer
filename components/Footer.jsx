import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import klozerLogo from '../public/img/klozerlogo.png';
import Button from './Button';

const navigation = {
  services: [
    { name: 'Company Incorporation', href: '/services/company-incorporation' },
    {
      name: 'Accounting, Auditng & Tax Filing',
      href: '/services/account-audit-tax/account-audit-tax-home',
    },
    { name: 'Human Resource', href: '/services/humanresource' },
    { name: 'Labuan Trust Malaysia', href: '/services/labuantrust' },
  ],

  company: [
    { name: 'About', href: '/aboutus' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ],

  social: [
    {
      name: 'Whatsapp',
      href: 'https://api.whatsapp.com/send?phone=60123193515&text=Hi%20Klozer,%20im%20interested%20in%20opening%20a%20business%20in%20malaysia.',
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enableBackground="new 0 0 24 24"
          stroke="currentColor"
          strokeWidth="0.2"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="flex-shrink-0 h-6 w-6 text-indigo-600"
        >
          <path d="M16.6 14c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.2-.5-.5-1-1.1-1.4-1.7-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.3.2-.4.1-.1.1-.3 0-.4-.1-.1-.6-1.3-.8-1.8-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3-.6.6-.9 1.3-.9 2.1.1.9.4 1.8 1 2.6 1.1 1.6 2.5 2.9 4.2 3.7.5.2.9.4 1.4.5.5.2 1 .2 1.6.1.7-.1 1.3-.6 1.7-1.2.2-.4.2-.8.1-1.2l-.4-.2m2.5-9.1C15.2 1 8.9 1 5 4.9c-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2 5.5 0 9.9-4.4 9.9-9.9.1-2.6-1-5.1-2.8-7m-2.7 14c-1.3.8-2.8 1.3-4.4 1.3-1.5 0-2.9-.4-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3c-2.4-4-1.2-9 2.7-11.5S16.6 3.7 19 7.5c2.4 3.9 1.3 9-2.6 11.4" />
        </svg>
      ),
    },
    {
      name: 'Email',
      href: 'mailto:wincentlow@klozergroup.com',
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="flex-shrink-0 h-6 w-6 text-indigo-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"
          />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-100" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-4 xl:col-span-1">
            <Link href="/">
              <Image src={klozerLogo} alt="/" />
            </Link>
            {/* <img
              className='h-10'
              src='https://tailwindui.com/img/logos/mark.svg?color=gray&shade=300'
              alt='Company name'
            /> */}
            <p className="text-base text-gray-500">
              Where we work hand-in-hand to give you the best service this
              industry has to offer, because when you succeed, so do we.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-base font-medium text-gray-900">
                  Services
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* <div className='mt-12 md:mt-0'>
                <h3 className='text-base font-medium text-gray-900'>Support</h3>
                <ul role='list' className='mt-4 space-y-4'>
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className='text-base text-gray-500 hover:text-gray-900'
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div> */}
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-base font-medium text-gray-900">Company</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* <div className='mt-12 md:mt-0'>
                <h3 className='text-base font-medium text-gray-900'>Legal</h3>
                <ul role='list' className='mt-4 space-y-4'>
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className='text-base text-gray-500 hover:text-gray-900'
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div> */}
            </div>
          </div>
        </div>
        <Button href="/" txt="Contact Us" className="mt-5" />
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 text-center">
            &copy; 2022 THE KLOZER GROUP. ALL RIGHT RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
}
