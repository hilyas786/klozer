import Image from 'next/image';
import Link from 'next/link';
import klskyline from '../../../public/img/klskyline.jpeg';
import { Button } from '../../../components/Button';
import Hero from '../../../components/Hero';

const posts = [
  {
    title: 'MSC Malaysia Status Application In Malaysia',
    href: '/aboutus',
    imageUrl: '/img/klskyline.jpeg',
    description:
      'The MSC Malaysia status is given to companies, both local and foreign, that utilise and develop multimedia technologies in order to enhance or produce their products as well as their services. ',
  },
  {
    title: 'MSC Malaysia Status Application In Malaysia',
    href: '/aboutus',
    imageUrl: '/img/klskyline.jpeg',
    description:
      'The MSC Malaysia status is given to companies, both local and foreign, that utilise and develop multimedia technologies in order to enhance or produce their products as well as their services. ',
  },
  {
    title: 'MSC Malaysia Status Application In Malaysia',
    href: '/contactus',
    imageUrl: '/img/klskyline.jpeg',
    description:
      'The MSC Malaysia status is given to companies, both local and foreign, that utilise and develop multimedia technologies in order to enhance or produce their products as well as their services. ',
  },
];

const BusinessFormation = () => {
  return (
    <>
      <Hero
        src={klskyline}
        heading1='Business'
        heading2='Formation'
        subtext='Guide to Incorporating a company in malaysia.'
        className='sm:gap-0 sm:grid-cols-1'
      >
        <Button variant='primary' txt='Contact us' href='/contact' />
      </Hero>
      {/* Selection choices */}
      <div className='relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28'>
        <div className='absolute inset-0'>
          <div className='h-1/3 bg-white sm:h-2/3' />
        </div>
        <div className='relative mx-auto max-w-7xl'>
          <div className='text-center'>
            <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
              From the blog
            </h2>
            <p className='mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
              libero labore natus atque, ducimus sed.
            </p>
          </div>
          <div className='mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3'>
            {posts.map((post) => (
              <div
                key={post.title}
                className='flex flex-col overflow-hidden rounded-lg shadow-lg'
              >
                <div className='flex-shrink-0'>
                  <Image
                    priority
                    className='h-48 w-full object-cover'
                    width={500}
                    height={500}
                    src={post.imageUrl}
                    alt=''
                  />
                </div>
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
                      <Button href={post.href} txt='Learn More' />
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
};

export default BusinessFormation;
