import React from 'react';

import Typed from 'react-typed';

const Hero = () => {
  return ( 
    <div className='text-white h-screen'>
      <div className="max-w-[800px] mt-auto w-full h-screen mx-auto
        text-center flex flex-col">
        <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS.</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data.</h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'> Fast, flexible, financing, for </p>
          <Typed 
            className='md:text-5xl sm:text-4xl text-xl font-bold pl-2 md:pl-4'
            strings={["BTB", "BTC", "SASS"]} 
            typeSpeed={120}
            backSpeed={140} loop/>
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS Platforms</p>
        <button className='bg-[#00df9a] w-[200px] rounded text-gray-900 my-6
          mx-auto px-6 py-3 font-bold'>
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Hero;
