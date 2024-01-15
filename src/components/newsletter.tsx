export default function Newsletter() {
  return (
    <div className="w-full py-16 text-white bg-gray-950 px-4 h-screen">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="md:text-4xl sm:text-3xl text-xl font-bold py-2">Want tips & trics...</h1>
          <p>Sign up to our Newsletter</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input 
              className="p-3 flex w-full rounded-md text-black"
              type="email" 
              placeholder="Enter e-mail" />
            <button className='bg-[#00df9a] w-[200px] rounded-md text-gray-950 my-6
              ml-4 px-6 py-3 font-bold'>Notify Me</button>
          </div>
          <p> 
            We care about the protection of your data. Read our 
            <span className="text-[#00df9a]"> Privacy Policy </span>
          </p>
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}
