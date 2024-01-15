import React from 'react';

import Single from "../assets/single.png"
import Double from "../assets/double.png"
import Triple from "../assets/triple.png"

export default function Cards() {
  return (
    <div className='w-full py-[10rem] px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <div className='w-full bg-gray-100 shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-20 bg-transparent mx-auto mt-[-3rem] bg-white' src={Single} />
          <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
          <p className='text-center text-4xl font-bold'>$149</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
            <p className='py-2 border-b mx-8'>1 Granted User</p>
            <p className='py-2 border-b mx-8'>Send up to 2GB</p>
          </div>
          <button className='bg-[#00df9a] w-[200px] rounded text-gray-900 my-6
          mx-auto px-6 py-3 font-bold'>Start Trial</button>
        </div>
        <div className='w-full bg-gray-100 shadow-xl md:my-0 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-20 bg-transparent mx-auto mt-[-3rem] bg-white' src={Double} />
          <h2 className='text-2xl font-bold text-center py-8'>Double Users</h2>
          <p className='text-center text-4xl font-bold'>$149</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
            <p className='py-2 border-b mx-8'>1 Granted User</p>
            <p className='py-2 border-b mx-8'>Send up to 2GB</p>
          </div>
          <button className='bg-[#00df9a] w-[200px] rounded text-gray-900 my-6
          mx-auto px-6 py-3 font-bold'>Start Trial</button>
        </div>
        <div className='w-full bg-gray-100 shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-20 bg-transparent mx-auto mt-[-3rem] bg-white' src={Triple} />
          <h2 className='text-2xl font-bold text-center py-8'>Triple Users</h2>
          <p className='text-center text-4xl font-bold'>$149</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
            <p className='py-2 border-b mx-8'>1 Granted User</p>
            <p className='py-2 border-b mx-8'>Send up to 2GB</p>
          </div>
          <button className='bg-[#00df9a] w-[200px] rounded text-gray-900 my-6
          mx-auto px-6 py-3 font-bold'>Start Trial</button>
        </div>
      </div>
    </div>
  )
}
