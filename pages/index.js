import { Fragment } from 'react';
import Image from 'next/image';
import klskyline from '../public/img/klskyline.jpeg';
import wincentLogo from '../public/img/wincentLogo.jpg';
import { Button } from '../components/Button';
import { InboxIcon, SparklesIcon } from '@heroicons/react/24/outline';
import xeroAdvisor1 from '../public/img/xeroAdvisor1.png';
import xeroSilver from '../public/img/xerosilver.png';
function animtedCounter(targer, time = 200, start = 0) {
  return {
    current: 0,
    target: targer,
    time: time,
    start: start,
    updatecounter: function () {
      start = this.start;
      const increment = (this.target - start) / this.time;
      const handle = setInterval(() => {
        if (this.current < this.target) this.current += increment;
        else {
          clearInterval(handle);
          this.current = this.target;
        }
      }, 1);
    },
  };
}

export default function Home() {
  return (
    <main>
      {/* Hero card */}
      <div className='relative bg-gray-100'>
        <div className='absolute inset-x-0 bottom-0 h-1/2 bg-gray-100' />
        <div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
          <div className='relative shadow-xl sm:overflow-hidden sm:rounded-2xl'>
            <div className='absolute inset-0'>
              <Image
                className='h-full w-full object-cover'
                src={klskyline}
                alt='/'
              />
              <div className='absolute inset-0 bg-indigo-700 mix-blend-multiply' />
            </div>
            <div className='relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8'>
              <h1 className='text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl'>
                <span className='block text-white'>
                  Company Setting Up In Malaysia?
                </span>
                <span className='block text-indigo-200'>
                  SDN BHD & Labuan Setup.
                </span>
              </h1>
              <p className='mx-auto mt-6 max-w-lg text-center text-xl text-indigo-200 sm:max-w-3xl'>
                Our years of experience means a complete hassle free setup in
                Malaysia.
              </p>
              <div className='mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center justify-evenly '>
                <div className='flex justify-evenly items-center sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5  '>
                  <Button variant='primary' txt='Learn More' href='/aboutus' />
                  <Button variant='primary' txt='Contact Us' href='/contact' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* STATS */}

      {/* <div className='bg-gray-100 pt-12 sm:pt-16'>
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
      </div> */}

      {/* 2nd section */}

      <div className='relative overflow-hidden bg-gray-100 pb-32'>
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
                  src={wincentLogo}
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

        <div className='bg-indigo-700'>
          <div className='mx-auto max-w-7xl py-16 px-4 sm:py-20 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-bold tracking-tight text-white'>
              The world's most innovative companies use our app
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
        </div>
        {/* <div className='mt-24'>
          <div className='lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8'>
            <div className='mx-auto max-w-xl px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0'>
              <div>
                <div>
                  <span className='flex h-12 w-12 items-center justify-center rounded-md bg-indigo-600'>
                    <SparklesIcon
                      className='h-6 w-6 text-white'
                      aria-hidden='true'
                    />
                  </span>
                </div>
                <div className='mt-6'>
                  <h2 className='text-3xl font-bold tracking-tight text-gray-900'>
                    Better understand your customers
                  </h2>
                  <p className='mt-4 text-lg text-gray-500'>
                    Semper curabitur ullamcorper posuere nunc sed. Ornare
                    iaculis bibendum malesuada faucibus lacinia porttitor.
                    Pulvinar laoreet sagittis viverra duis. In venenatis sem
                    arcu pretium pharetra at. Lectus viverra dui tellus ornare
                    pharetra.
                  </p>
                  <div className='mt-6'>
                    <a
                      href='#'
                      className='inline-flex rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700'
                    >
                      Get started
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-12 sm:mt-16 lg:col-start-1 lg:mt-0'>
              <div className='-ml-48 pr-4 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0'>
                <img
                  className='w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none'
                  src='https://tailwindui.com/img/component-images/inbox-app-screenshot-2.jpg'
                  alt='Customer profile user interface'
                />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </main>
  );
}
