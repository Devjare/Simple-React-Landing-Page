import React from 'react';

import {
  FaDribbbleSquare,
  FaFacebook,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare
} from 'react-icons/fa';

export default function Footer() {
  return (
    <div className='max-w-[1240px] bg-gray-950 text-gray-300  mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] my-4'>React.</h1>
        <p className=''>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          laoreet mi ex, fermentum vestibulum risus viverra in. Nunc in
          ultrices enim. Aenean a turpis nec dui elementum maximus. Aliquam
          malesuada nisi dolor, ut egestas enim tincidunt quis. Suspendisse
          nec nunc vel felis tincidunt vehicula. Etiam accumsan, enim a
          bibendum tincidunt, tellus velit tincidunt mi, et ultricies metus
          nunc ac lacus. Donec lacinia ante eu neque euismod cursus. Nunc
          elementum lorem quis nibh placerat gravida.
        </p>
        <div className='flex justify-around md:w-[75%] my-6'>
          <FaInstagramSquare size={30} />
          <FaGithubSquare    size={30} />
          <FaDribbbleSquare  size={30} />
          <FaTwitterSquare   size={30} />
          <FaFacebookSquare  size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
        <div>
          <h6 className='font-medium text-gray-400'>Solutions</h6>
          <ul>
            <li className='py-2 text-sm'>Analytics</li>
            <li className='py-2 text-sm'>Marketing</li>
            <li className='py-2 text-sm'>Commerce</li>
            <li className='py-2 text-sm'>Insights</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400'>Support</h6>
          <ul>
            <li className='py-2 text-sm'>Pricing</li>
            <li className='py-2 text-sm'>Documentation</li>
            <li className='py-2 text-sm'>Guides</li>
            <li className='py-2 text-sm'>API Status</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400'>Company</h6>
          <ul>
            <li className='py-2 text-sm'>About</li>
            <li className='py-2 text-sm'>Blog</li>
            <li className='py-2 text-sm'>Jobs</li>
            <li className='py-2 text-sm'>Press</li>
            <li className='py-2 text-sm'>Careers</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400'>Legal</h6>
          <ul>
            <li className='py-2 text-sm'>Claim</li>
            <li className='py-2 text-sm'>Policy</li>
            <li className='py-2 text-sm'>Terms</li>
            <li className='py-2 text-sm'>Press</li>
            <li className='py-2 text-sm'>Careers</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
