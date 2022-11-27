import React from 'react';
import IntroSection from '../components/IntroSection';
import Button from '../components/Button';

const posts = [
  {
    title: 'SENIOR ACCOUNT EXECUTIVE',
    href: 'mailto:h@gmail.com',
    description:
      'Minimum Experience: 3-5 Years Project Scope Involved in all accounting activities. Coordinate and liaise with other departments.',
  },
  {
    title: 'ACCOUNT EXECUTIVE',
    href: 'mailto:h@gmail.com',
    description:
      'Minimum Experience: 1-2 Years Project Scope: Project management responsibilities include delivering every project on time within budget and scope. Project managers should have a background in business skills, management, budgeting, and analysis.',
  },
];

export default function careers() {
  return (
    <>
      <IntroSection
        smallHeading='We are hiring!'
        mainHeading='Join a thriving company'
        paragraph='Klozer is leading corporate services provider that offers services such as company incorporation, professional accounting, tax and compliance etc. We offer our services for start-ups, SMEs, & MNCs Our office is located in Petaling Jaya, Malaysia.'
        Title1='Competitive salary'
        Title2='Grow your skills'
        Title3='Work-life balance'
        showButton={false}
      />
      <div className='relative bg-gray-100 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-10 lg:pb-28'>
        <div className='absolute inset-0'>
          <div className='h-1/3 bg-gray-100 sm:h-2/3' />
        </div>
        <div className='relative mx-auto max-w-7xl'>
          <div className='text-center'>
            <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
              Apply Now
            </h2>
            <p className='mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4'>
              Current Available Positions
            </p>
          </div>
          <div className='mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-2'>
            {posts.map((post) => (
              <div
                key={post.title}
                className='flex flex-col overflow-hidden rounded-lg shadow-lg'
              >
                <div className='flex flex-1 flex-col justify-between bg-white p-6'>
                  <div className='flex-1'>
                    <a href={post.href} className='mt-2 block'>
                      <p className='text-xl font-semibold text-gray-900'>
                        {post.title}
                      </p>
                      <p className='mt-3 text-base text-gray-500'>
                        {post.description}
                      </p>
                    </a>
                  </div>
                  <div className='mt-6 flex items-center'>
                    <div className='flex-shrink-0'>
                      <Button href={post.href} txt='Apply' />
                    </div>
                    <div className='ml-3'></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
