import Image from 'next/image';
import Link from 'next/link';
import klozerLogo from '../public/img/klozerlogo.png';
import { Button } from './Button';
import CTA from './CTA';

// const navigation = {
//   main: [
//     { name: 'About', href: '/aboutus' },
//     { name: 'Careers', href: '/careers' },
//     { name: 'Contact', href: '/contact' },
//     { name: 'Company Incorporation', href: '#' },
//   ],
//   social: [
//     {
//       name: 'Whatsapp',
//       href: 'https://api.whatsapp.com/send?phone=60192049269&text=Hi%20Klozer,%20im%20interested%20in%20opening%20a%20business%20in%20malaysia.',
//       icon: (props) => (
//         <svg
//           xmlns='http://www.w3.org/2000/svg'
//           enable-background='new 0 0 24 24'
//           stroke='currentColor'
//           strokeWidth='0.2'
//           fill='currentColor'
//           viewBox='0 0 24 24'
//           className='flex-shrink-0 h-6 w-6'
//         >
//           <path d='M16.6 14c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.2-.5-.5-1-1.1-1.4-1.7-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.3.2-.4.1-.1.1-.3 0-.4-.1-.1-.6-1.3-.8-1.8-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3-.6.6-.9 1.3-.9 2.1.1.9.4 1.8 1 2.6 1.1 1.6 2.5 2.9 4.2 3.7.5.2.9.4 1.4.5.5.2 1 .2 1.6.1.7-.1 1.3-.6 1.7-1.2.2-.4.2-.8.1-1.2l-.4-.2m2.5-9.1C15.2 1 8.9 1 5 4.9c-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2 5.5 0 9.9-4.4 9.9-9.9.1-2.6-1-5.1-2.8-7m-2.7 14c-1.3.8-2.8 1.3-4.4 1.3-1.5 0-2.9-.4-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3c-2.4-4-1.2-9 2.7-11.5S16.6 3.7 19 7.5c2.4 3.9 1.3 9-2.6 11.4' />
//         </svg>
//       ),
//     },
//     {
//       name: 'Email',
//       href: 'mailto:haider@email.com',
//       icon: (props) => (
//         <svg
//           xmlns='http://www.w3.org/2000/svg'
//           fill='none'
//           viewBox='0 0 24 24'
//           stroke-width='1.5'
//           stroke='currentColor'
//           class='w-6 h-6'
//         >
//           <path
//             stroke-linecap='round'
//             stroke-linejoin='round'
//             d='M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z'
//           />
//         </svg>
//       ),
//     },
//   ],
// };
const navigation = {
  services: [
    { name: 'Company Incorporation', href: '/services/company-incorporation' },
    {
      name: 'Accounting, Auditng & Tax Filing',
      href: '/services/account-audit-tax/account-audit-tax-home',
    },
    { name: 'Human Resource', href: '/services/humanresource' },
    { name: 'Labaun Trust Malaysia', href: '/services/labuantrust' },
  ],

  company: [
    { name: 'About', href: '/aboutus' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ],

  // social: [
  //   {
  //     name: 'Facebook',
  //     href: '#',
  //     icon: (props) => (
  //       <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
  //         <path
  //           fillRule='evenodd'
  //           d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
  //           clipRule='evenodd'
  //         />
  //       </svg>
  //     ),
  //   },
  //   {
  //     name: 'Instagram',
  //     href: '#',
  //     icon: (props) => (
  //       <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
  //         <path
  //           fillRule='evenodd'
  //           d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
  //           clipRule='evenodd'
  //         />
  //       </svg>
  //     ),
  //   },
  //   {
  //     name: 'Twitter',
  //     href: '#',
  //     icon: (props) => (
  //       <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
  //         <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
  //       </svg>
  //     ),
  //   },
  //   {
  //     name: 'GitHub',
  //     href: '#',
  //     icon: (props) => (
  //       <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
  //         <path
  //           fillRule='evenodd'
  //           d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
  //           clipRule='evenodd'
  //         />
  //       </svg>
  //     ),
  //   },
  //   {
  //     name: 'Dribbble',
  //     href: '#',
  //     icon: (props) => (
  //       <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
  //         <path
  //           fillRule='evenodd'
  //           d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z'
  //           clipRule='evenodd'
  //         />
  //       </svg>
  //     ),
  //   },
  // ],
};

export default function Footer() {
  return (
    // <footer className='bg-gray-100 '>
    //   <div className='mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8'>
    //     <div className='flex justify-center items-center mb-6'>
    //       <Link href='/'>
    //         <Image src={klozerLogo} alt='/' width={200} height={200} />{' '}
    //       </Link>
    //     </div>
    //     <nav
    //       className='-mx-5 -my-2 flex flex-wrap justify-center'
    //       aria-label='Footer'
    //     >
    //       {navigation.main.map((item) => (
    //         <div key={item.name} className='px-5 py-2'>
    //           <a
    //             href={item.href}
    //             className='text-base text-gray-500 hover:text-gray-900'
    //           >
    //             {item.name}
    //           </a>
    //         </div>
    //       ))}
    //     </nav>
    //     <div className='mt-8 flex justify-center space-x-6'>
    //       {navigation.social.map((item) => (
    //         <a
    //           target='_blank'
    //           rel='noreferrer'
    //           key={item.name}
    //           href={item.href}
    //           className='text-gray-400 hover:text-gray-500'
    //         >
    //           <span className='sr-only'>{item.name}</span>
    //           <item.icon className='h-6 w-6' aria-hidden='true' />
    //         </a>
    //       ))}
    //     </div>
    //     <p className='mt-8 text-center text-base text-gray-400'>
    //       &copy; 2022 The Klozer Group. All rights reserved.
    //     </p>
    //   </div>
    // </footer>
    <footer className='bg-gray-100' aria-labelledby='footer-heading'>
      <h2 id='footer-heading' className='sr-only'>
        Footer
      </h2>
      <div className='mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
        <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
          <div className='space-y-4 xl:col-span-1'>
            <Link href='/'>
              <Image src={klozerLogo} alt='/' />
            </Link>
            {/* <img
              className='h-10'
              src='https://tailwindui.com/img/logos/mark.svg?color=gray&shade=300'
              alt='Company name'
            /> */}
            <p className='text-base text-gray-500'>
              Where we work hand-in-hand to give you the best service this
              industry has to offer, because when you succeed, so do we.
            </p>
            {/* <div className='flex space-x-6'>
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className='text-gray-400 hover:text-gray-500'
                >
                  <span className='sr-only'>{item.name}</span>
                  <item.icon className='h-6 w-6' aria-hidden='true' />
                </a>
              ))}
            </div> */}
          </div>
          <div className='mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0'>
            <div className='md:grid md:grid-cols-2 md:gap-8'>
              <div>
                <h3 className='text-base font-medium text-gray-900'>
                  Services
                </h3>
                <ul role='list' className='mt-4 space-y-4'>
                  {navigation.services.map((item) => (
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
            <div className='md:grid md:grid-cols-2 md:gap-8'>
              <div>
                <h3 className='text-base font-medium text-gray-900'>Company</h3>
                <ul role='list' className='mt-4 space-y-4'>
                  {navigation.company.map((item) => (
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
        <Button href='/' txt='Contact Us' />
        <div className='mt-12 border-t border-gray-200 pt-8'>
          <p className='text-base text-gray-400 xl:text-center'>
            &copy; 2022 THE KLOZER GROUP. ALL RIGHT RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
}
