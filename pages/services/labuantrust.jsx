import React from 'react';
import Image from 'next/image';
import IntroSection from '../../components/IntroSection';

import labuanfsa from '../../public/img/labuanfsa.png';

export default function labuantrust() {
  const labuan = [
    {
      id: 1,
      emphasis: 'A paid up capital of USD1 for 100% foreign-owned.',
    },
    {
      id: 2,
      emphasis: 'The target market is international.',
    },
    {
      id: 3,
      emphasis: 'A minimum of one director and one shareholder.',
    },
    {
      id: 4,
      emphasis:
        'Re-domicile; can be transferred to any jurisdiction that recognises a Labuan Company.',
    },
    {
      id: 5,
      emphasis:
        'The business can have shares in a Malaysia Sdn Bhd and other forms of investment.',
    },
    {
      id: 6,
      emphasis: 'Corporate tax of 3% for the international market.',
    },
    {
      id: 7,
      emphasis:
        'Directors will be subjected to no personal tax, while expatriates employed will receive a tax rebate of 50% on a 0-28% personal tax rate.',
    },
    {
      id: 8,
      emphasis: 'Audit reporting is only required for trading companies.',
    },
    {
      id: 9,
      emphasis:
        'All information is strictly confidential unless permission is granted by the owner of the Labuan Company',
    },
  ];
  const sdn = [
    {
      id: 1,
      emphasis: 'A target market within Malaysia.',
    },
    {
      id: 2,
      emphasis:
        'A paid up capital of RM1 million for 100% foreign-owned or RM400,000 for Joint Venture with a Malaysian.',
    },
    {
      id: 3,
      emphasis: 'A minimum of one director and one shareholder.',
    },
    {
      id: 4,
      emphasis:
        'Business and industry licenses are dependant on the business, which  will require local Malaysian participation.',
    },
    {
      id: 5,
      emphasis:
        'Re-domicile is not possible. The business can have shares in a Labuan Company and other forms of investment.',
    },
    {
      id: 6,
      emphasis: 'Corporate tax of 24% for both local and international market.',
    },
    {
      id: 7,
      emphasis:
        'Expatriates employed including the directors will have a 0-28% personal tax rate.',
    },
    {
      id: 8,
      emphasis:
        'Audit reporting is required unless the business is a private exempt company or has less than RM300,000 turnover.',
    },
    {
      id: 9,
      emphasis:
        'All information including financial accounts are searchable with no permission required.',
    },
  ];

  return (
    <>
      <IntroSection
        smallHeading='Offshore'
        mainHeading='Labuan Trust Malaysia'
        paragraph=' Labuan is one of the top locations in Malaysia for business
      ventures in the Asia Pacific region. More business owners are planting international ventures in Labuan.'
        Title1='100% Ownership'
        Title2='Low tax benefits'
        Title3='Visa Applications'
        showButton={true}
      />
      <section className='bg-gray-100 body-font'>
        <div className='container mx-auto max-w-[1280px] flex px-5 py-24 md:flex-row flex-col items-center '>
          <div className='flex flex-col mb-16 md:mb-0 items-center text-center'>
            {/* <h1 class=' font-bold text-3xl sm:text-4xl  mb-4  text-gray-900'>
              Labuan Company Setup
            </h1> */}
            <div className='flex items-center justify-center'>
              <Image src={labuanfsa} alt='/' />
            </div>
            <p className='mb-8 leading-relaxed text-lg text-gray-700 '>
              The Malaysian government constantly welcomes all foreigners and
              foreign investors to set up their international businesses in
              Malaysia with a low tax benefit and 100% ownership through the
              Labuan International Company. However, there are certain
              expectations of which business owners are required to comply with
              through specific authorities such as the Labuan Financial Services
              Authority, the Inland Revenue Authority, the Central Bank of
              Malaysia, and the Malaysia Immigration Department.
            </p>
          </div>
        </div>
      </section>

      <div className='relative bg-gray-900'>
        <div className='absolute bottom-0 h-80 w-full xl:inset-0 xl:h-full'>
          <div className='h-full w-full xl:grid xl:grid-cols-2'>
            <div className='h-full xl:relative xl:col-start-2'>
              <Image
                priority
                className='h-full w-full object-cover opacity-25 xl:absolute xl:inset-0'
                src='https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100'
                alt='People working on laptops'
                width={500}
                height={500}
              />

              <div
                aria-hidden='true'
                className='absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r'
              />
            </div>
          </div>
        </div>
        <div className='mx-auto max-w-4xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-flow-col-dense xl:grid-cols-1 xl:gap-x-8'>
          <div className='relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24'>
            <h2 className='text-base font-semibold text-indigo-300'>
              Comparisons
            </h2>
            <p className='mt-3 text-3xl font-bold tracking-tight text-white'>
              Labuan Company Vs Sdn. Bhd.
            </p>
            <p className='mt-5 text-lg text-gray-300'>
              In comparison to the Malaysia Sdn Bhd, the Labuan Company is
              slightly different. A Labuan Company is required to file a report
              of transactions to the Labuan Authority. These Include:
            </p>
            {/* <h2 className='text-base font-semibold text-indigo-300 mt-10'></h2> */}
            <div className='mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2'>
              {labuan.map((item) => (
                <p key={item.id}>
                  {/* <span className='block text-2xl font-bold text-white'>
                    {item.stat}
                  </span> */}

                  <span className='mt-1 block text-base text-gray-300'>
                    <span className='font-medium text-white'>
                      {item.emphasis}
                    </span>
                    {/* {item.rest} */}
                  </span>
                </p>
              ))}
            </div>
            <div className='mb-10'>
              <span className='h-1 w-full bg-indigo-600 absolute rounded-xl mt-5 mb-5' />
            </div>
            <h2 className='text-3xl font-bold text-white mt-7'>Sdn. Bhd.</h2>
            <p className='mt-5 text-lg text-gray-300'>
              The Sdn. Bhd business structure includes the following:
            </p>
            <div className='mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2'>
              {sdn.map((item) => (
                <p key={item.id}>
                  {/* <span className='block text-2xl font-bold text-white'>
                    {item.stat}
                  </span> */}
                  {/* <div>{item.icon}</div> */}
                  <span className='mt-1 block text-base text-gray-300'>
                    <span className='font-medium text-white'>
                      {item.emphasis}
                    </span>
                    {/* {item.rest} */}
                  </span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
