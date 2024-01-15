import Laptop from '../assets/laptop.jpg';

export default function Analytics() {
  return (
    <div className="w-full bg-white py-16 px-4 h-screen">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt="Laptop with graphs" />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold'>DATA ANALYTICS  DASHBOARD</p>
          <h1 className='md:text-4xl sm:text-3xl text-2kl font-bold py-2'>Manage Data Analytics Centrally</h1>
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
          <button className='text-[#00df9a] w-[200px] rounded bg-gray-950 my-6
          mx-auto md:mx-0 px-6 py-3 font-bold'>Get Started</button>
        </div>
      </div>
    </div>
  )
}
