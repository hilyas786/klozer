import Image from 'next/image';
import React from 'react';
import Faqs from '../../../components/Faqs';
import tax from '../../../public/img/tax.jpg';
import IntroSection from '../../../components/IntroSection';
import FaqsAccounts from '../../../components/FaqData/FaqAccount';
import HeadingSection from '../../../components/HeadingSection';
import { Button } from '../../../components/Button';
import { CheckIcon } from '@heroicons/react/24/outline';
const accountaudittax = () => {
  const features = [
    {
      name: 'We will assist with monthly, quarterly, and yearly bookkeeping for active companies, both Malaysian and foreign owned.',
    },
    {
      name: 'We operate with a licensed and trustworthy software for a speedy and accurate delivery.',
    },
    {
      name: 'You will be promptly notified when there is an update or change in requirements.',
    },
    {
      name: 'We believe in honesty, we will review and organize your information with transparency.',
    },
    {
      name: 'As we pride ourselves in timeliness, you can expect your accounts to be fulfilled and submitted on time.',
    },
  ];
  return (
    <>
      <IntroSection
        smallHeading='Financial obligations, covered.'
        mainHeading='Accounting, Audit & Tax'
        paragraph='Klozer accountants will not just manage credits and debits, but also monitor all accounts, help create a detailed budget, advise you and your business on the
        financial status, while spotting and solving problems as fast as possible.'
        Title1='Accounting Experts'
        Title2='Tax Planning'
        Title3='Legal Compliances'
        showButton={true}
      />

      <div className='bg-gray-100'>
        <div className='mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:grid lg:grid-cols-3 lg:gap-x-12 lg:px-8 lg:py-40'>
          <div>
            <h2 className='text-lg font-semibold leading-8 tracking-tight text-indigo-600'>
              Yearly, Quarterly or Monthly Packages
            </h2>
            <p className='mt-2 text-4xl font-bold tracking-tight text-gray-900'>
              Accounting & Bookkeeping
            </p>
            <p className='mt-6 text-base leading-7 text-gray-600'>
              Accounting plays an important role for all businesses. Accounting
              involves the setting up of records and the maintenance of said
              records in a very detailed manner, with the goal of keeping all
              parties aware of the growth and prospect of the company.
            </p>
          </div>
          <div className='mt-20 lg:col-span-2 lg:mt-0'>
            <dl className='grid grid-rows-3 gap-12 sm:grid-flow-row sm:grid-cols-2 sm:grid-rows-4'>
              {features.map((feature) => (
                <div key={feature.name} className='relative'>
                  <dt>
                    <CheckIcon
                      className='absolute mt-1 h-6 w-6 text-indigo-600'
                      aria-hidden='true'
                    />
                    <p className='ml-10 text-lg font-semibold leading-8 text-gray-900'>
                      {feature.name}
                    </p>
                  </dt>
                  {/* <dd className='mt-2 ml-10 text-base leading-7 text-gray-600'>
                    {feature.description}
                  </dd> */}
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <HeadingSection
        SmallHeading='Taxation'
        Title='Tax Compliance Malaysia'
        Paragraph=' Taxation is a highly specialised task which involves legislation and rules that constatly changes every year. Proper tax planning, documenting and presenting is required to ensure a correct submission for every company and business.'
      />
      <section class='text-gray-600 body-font bg-gray-100'>
        <div class='container px-5 py-14 mx-auto flex flex-wrap'>
          <div class='flex flex-wrap w-full'>
            <div class='lg:w-2/5 md:w-1/2 md:pr-10 md:py-6'>
              <h1 className='text-3xl font-bold mb-5'>
                Preparation and reviewing of tax computation
              </h1>
              <div class='flex relative pb-12'>
                <div class='h-full w-10 absolute inset-0 flex items-center justify-center'>
                  <div class='h-full w-1 bg-gray-300 pointer-events-none'></div>
                </div>
                <div class='flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    class='w-5 h-5'
                    viewBox='0 0 24 24'
                  >
                    <path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
                    <path d='M22 4L12 14.01l-3-3'></path>
                  </svg>
                </div>
                <div class='flex-grow pl-4'>
                  <h2 class='font-medium title-font text-sm text-gray-900 mb-1 tracking-wider'>
                    Filing of Tax Returns via Form C / C1 / PT / TA/ TC/ TR or
                    TN.
                  </h2>
                </div>
              </div>

              <div class='flex relative pb-12'>
                <div class='h-full w-10 absolute inset-0 flex items-center justify-center'>
                  <div class='h-full w-1 bg-gray-200 pointer-events-none'></div>
                </div>
                <div class='flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    class='w-5 h-5'
                    viewBox='0 0 24 24'
                  >
                    <path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
                    <path d='M22 4L12 14.01l-3-3'></path>
                  </svg>
                </div>
                <div class='flex-grow pl-4'>
                  <h2 class='font-medium title-font text-sm text-gray-900 mb-1 tracking-wider'>
                    Filing of Estimate of Tax Payable (CP204) or Estimation
                    (CP204A).
                  </h2>
                </div>
              </div>
              <div class='flex relative pb-12'>
                <div class='h-full w-10 absolute inset-0 flex items-center justify-center'>
                  <div class='h-full w-1 bg-gray-200 pointer-events-none'></div>
                </div>
                <div class='flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    class='w-5 h-5'
                    viewBox='0 0 24 24'
                  >
                    <path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
                    <path d='M22 4L12 14.01l-3-3'></path>
                  </svg>
                </div>
                <div class='flex-grow pl-4'>
                  <h2 class='font-medium title-font text-sm text-gray-900 mb-1 tracking-wider'>
                    Preparation of working sheets alongside appendices
                  </h2>
                </div>
              </div>
              <div class='flex relative pb-12'>
                <div class='h-full w-10 absolute inset-0 flex items-center justify-center'>
                  <div class='h-full w-1 bg-gray-200 pointer-events-none'></div>
                </div>
                <div class='flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    class='w-5 h-5'
                    viewBox='0 0 24 24'
                  >
                    <path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
                    <path d='M22 4L12 14.01l-3-3'></path>
                  </svg>
                </div>
                <div class='flex-grow pl-4'>
                  <h2 class='font-medium title-font text-sm text-gray-900 mb-1 tracking-wider'>
                    Registration of Income Tax Number (C & E number).
                  </h2>
                </div>
              </div>
              <div class='flex relative pb-12'>
                <div class='h-full w-10 absolute inset-0 flex items-center justify-center'>
                  <div class='h-full w-1 bg-gray-200 pointer-events-none'></div>
                </div>
                <div class='flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    class='w-5 h-5'
                    viewBox='0 0 24 24'
                  >
                    <path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
                    <path d='M22 4L12 14.01l-3-3'></path>
                  </svg>
                </div>
                <div class='flex-grow pl-4'>
                  <h2 class='font-medium title-font text-sm text-gray-900 mb-1 tracking-wider'>
                    Assisting with statement of monetary and non-monetary
                    payment to a dealer, an agent, or a distributor.
                  </h2>
                </div>
              </div>
              <div class='flex relative pb-12'>
                <div class='h-full w-10 absolute inset-0 flex items-center justify-center'>
                  <div class='h-full w-1 bg-gray-200 pointer-events-none'></div>
                </div>
                <div class='flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    class='w-5 h-5'
                    viewBox='0 0 24 24'
                  >
                    <path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
                    <path d='M22 4L12 14.01l-3-3'></path>
                  </svg>
                </div>
                <div class='flex-grow pl-4'>
                  <h2 class='font-medium title-font text-sm text-gray-900 mb-1 tracking-wider'>
                    Offering advice on the payment of the balance of tax
                    payable, should there be any, based on the submitted Tax
                    Returns.
                  </h2>
                </div>
              </div>
              <div class='flex relative pb-12'>
                <div class='h-full w-10 absolute inset-0 flex items-center justify-center'>
                  <div class='h-full w-1 bg-gray-200 pointer-events-none'></div>
                </div>
                <div class='flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    class='w-5 h-5'
                    viewBox='0 0 24 24'
                  >
                    <path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
                    <path d='M22 4L12 14.01l-3-3'></path>
                  </svg>
                </div>
                <div class='flex-grow pl-4'>
                  <h2 class='font-medium title-font text-sm text-gray-900 mb-1 tracking-wider'>
                    Sending updates on the latest tax developments
                  </h2>
                </div>
              </div>
              <div class='flex relative'>
                <div class='flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    class='w-5 h-5'
                    viewBox='0 0 24 24'
                  >
                    <path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
                    <path d='M22 4L12 14.01l-3-3'></path>
                  </svg>
                </div>
                <div class='flex-grow pl-4'>
                  <h2 class='font-medium title-font text-sm text-gray-900 mb-1 tracking-wider'>
                    Providing reminders of deadlines
                  </h2>
                </div>
              </div>
            </div>
            <Image
              className='lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12'
              alt='/'
              src={tax}
            />
          </div>
        </div>
      </section>
      <HeadingSection
        SmallHeading='Expert Advice'
        Title='Tax Consulting'
        Paragraph='We assist in all areas of tax consultation, including legislations, rules, ramifications, tax compliance, guidelines, tax planning, review, and more, for businesses of large, medium and small sizes, providing a customised and tailored tax consultant service that will meet your business needs.'
      />
      <section class='text-gray-600 body-font bg-gray-100'>
        <div class='container px-5 py-24 mx-auto'>
          <div class='flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col'>
            <div class='sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0'>
              <svg
                fill='none'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                class='sm:w-16 sm:h-16 w-10 h-10'
                viewBox='0 0 24 24'
              >
                <path d='M22 12h-4l-3 9L9 3l-3 9H2'></path>
              </svg>
            </div>
            <div class='flex-grow sm:text-left text-center mt-6 sm:mt-0'>
              <h2 class='text-gray-900 text-lg title-font font-medium mb-2'>
                Tax Planning Malaysia
              </h2>
              <p class='leading-relaxed text-base text-gray-700'>
                Tax planning is crucial for businesses as it analyses a
                business’ financial situation and strategizes a plan from a tax
                perspective. Through tax planning, we can work toward tax
                efficiency by ensuring that the elements of a financial plan
                will work well together in the most efficient way.
              </p>
            </div>
          </div>
          <div class='flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col'>
            <div class='flex-grow sm:text-left text-center mt-6 sm:mt-0'>
              <h2 class='text-gray-900 text-lg title-font font-medium mb-2'>
                Tax Agent, Chartered Accountant and Consultant Tax Agent,
              </h2>
              <p class='leading-relaxed text-base text-gray-700'>
                At Klozer, our tax agents will ensure an error-free tax filing
                experience from start to finish. They will cover all aspects of
                taxation, which will allow you to focus solely on your business
                plans for the new year
              </p>
            </div>
            <div class='sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0'>
              <svg
                fill='none'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                class='sm:w-16 sm:h-16 w-10 h-10'
                viewBox='0 0 24 24'
              >
                <circle cx='6' cy='6' r='3'></circle>
                <circle cx='6' cy='18' r='3'></circle>
                <path d='M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12'></path>
              </svg>
            </div>
          </div>
          <div class='flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col'>
            <div class='sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0'>
              <svg
                fill='none'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                class='sm:w-16 sm:h-16 w-10 h-10'
                viewBox='0 0 24 24'
              >
                <path d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2'></path>
                <circle cx='12' cy='7' r='4'></circle>
              </svg>
            </div>
            <div class='flex-grow sm:text-left text-center mt-6 sm:mt-0'>
              <h2 class='text-gray-900 text-lg title-font font-medium mb-2'>
                Withholding Tax Service Malaysia
              </h2>
              <p class='leading-relaxed text-base text-gray-700'>
                Note the withholding tax percentage based on the below payment
                types: Interest Paid to Non-Resident Persons: 15% Royalty Paid
                to Non-Resident Persons: 10% Special Classes of Income Paid to
                Non-Resident Persons: 10% Contract Payments to Non-Resident
                Contractors: 10% + 3% Non-Resident Public Entertainers: 15%
                Income under Section 4(f): 10%
              </p>
            </div>
          </div>
          {/* <button class='flex mx-auto mt-20 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
            Button
          </button> */}
          <div className='flex items-center justify-center mt-10 '>
            <Button href='/contact' txt='Contact Us' />
          </div>
        </div>
      </section>
      {/* <Faqs faqs={FaqsAccounts} /> */}
    </>
  );
};

export default accountaudittax;
