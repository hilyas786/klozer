import React from 'react';
import IntroSection from '../../components/IntroSection';
import { CheckIcon } from '@heroicons/react/24/outline';

const humanresource = () => {
  const features = [
    {
      name: 'SOCSO Account Application',
    },
    {
      name: 'EIS Account Application',
    },
    {
      name: 'Online Monthly Tax Deduction/Potongan Cukai Bulanan Account Application',
    },
    {
      name: 'Preparation Of Form E (according to government requirements)',
    },
    {
      name: 'Preparation Of Form EA (according to government requirements)',
    },
    {
      name: 'Preparation Of CP21 (according to government requirements)',
    },
    {
      name: 'Payroll Set Up',
    },
    {
      name: 'Monthly Payroll Processing Service',
    },
    {
      name: 'Monthly Salary Payment Service',
    },
    {
      name: 'Monthly EPF And SOCSO Submissions',
    },
    {
      name: 'Monthly Tax Deduction/Potongan Cukai Bulanan Submission',
    },
    {
      name: 'HRDF Account Registration',
    },
    {
      name: 'HRDF Assessment',
    },
  ];
  return (
    <div>
      <IntroSection
        smallHeading='NEed text'
        mainHeading='Human Resources'
        paragraph='NEED TEXT'
        Title1='Payroll'
        Title2='Employment Contracts'
        Title3='HR Consultation'
        showButton={true}
      />

      <div className='bg-gray-100'>
        <div className='mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8 lg:py-20'>
          <div className='mx-auto max-w-3xl text-center'>
            <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
              Our payroll services at Klozer include
            </h2>
          </div>
          <dl className='mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8'>
            {features.map((feature) => {
              return (
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
                </div>
              );
            })}
          </dl>
        </div>
      </div>

      <section>
        <div className='relative bg-white'>
          <div className='lg:absolute lg:inset-0'>
            <div className='lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2'>
              <img
                className='h-56 w-full object-cover lg:absolute lg:h-full'
                src='https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
                alt=''
              />
            </div>
          </div>
          <div className='relative px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8'>
            <div className='lg:col-start-2 lg:pl-8'>
              <div className='mx-auto max-w-prose text-base lg:ml-auto lg:mr-0 lg:max-w-lg'>
                <h2 className='font-semibold leading-6 text-indigo-600'>
                  Klozer HR Consulting
                </h2>
                <h3 className='mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl'>
                  By outsourcing your human resource solution to us
                </h3>

                <div className='prose prose-indigo mt-5 text-gray-500'>
                  <p>
                    Our well-trained human resource experts will manage all
                    payroll, employee benefits, leaves, and compensations on
                    your behalf.
                  </p>
                  <p>
                    You will reduce business expenditure by removing the cost of
                    hiring an inhouse human resource consultant. This is because
                    an outsourced team is able to provide the same professional
                    services at a much lower cost.
                  </p>
                  <p>
                    You will also be able to focus on business management while
                    our team helps your company to navigate all legality and
                    compliance of any human resource issues for employee
                    satisfaction.
                  </p>
                  <h3>Termination of Employment in Malaysia</h3>
                  <p>
                    What defines the termination of employment in Malaysia? The
                    termination of employment as a cessation of service due to
                    either a company closure or workers redundancy.
                  </p>
                  <p>
                    There are several reasons that falls into the definition,
                    including mergers, acquisitions, corporate restructuring.
                  </p>
                  <h3>Drafting Employment Contract</h3>
                  <p>
                    Every business owner will have to work on their Employment
                    Contract, which is sometimes known as a Contract of Service.
                    The Employment Contract or Contract of Service is an
                    agreement between the employer and the employee, with a set
                    of terms and conditions that is stated clearly in the
                    contract.
                  </p>
                  <p>
                    These terms and conditions are: The title of the job with
                    the scope of work required of the employee, The number of
                    working hours to fulfill within a week, The duration of the
                    probation period, The details of the remuneration package,
                    The benefits that the employee would receive, The period of
                    notice required for work termination, The code of conduct of
                    the employee, The percentage of EPF contribution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default humanresource;
