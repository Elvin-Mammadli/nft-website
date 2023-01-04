import React from 'react'

function NFTDropPage() {
  return (
    <div className='flex h-screen flex-col lg:grid lg:grid-cols-10'>
      {/* Left */}
      <div className='lg:col-span-4 bg-gradient-to-br from-cyan-800 to-rose-500'>
        <div className='flex flex-col items-center justify-center py-2 lg:min-h-screen '>
          <div className='bg-gradient-to-br from-yellow-400 to-purple-600 p-2 rounded-xl'>
            <img
              className='w-44 rounded-xl object-cover lg:h-96 lg:w-72'
              src="https://links.papareact.com/8sg" alt="" />
          </div>
          <div className='space-y-2 p-5 text-center'>
            <h1 className='text-4xl font-bold text-white'>
              Frontend Apes
            </h1>
            <h2 className='text-xl text-gray-300'>
              Collection of Frontend Apes NFT
            </h2>
          </div>
        </div>


      </div>

      {/* Right */}
      <div className='flex flex-1 flex-col p-12 lg:col-span-6'>
        {/* header */}
        <header className='flex items-center justify-between'>
          <h1 className='w-52 cursor-pointer text-xl
          font-extralight sm:w-80'>
            The <span className='font-extrabold underline decoration-pink-600/50'>Frontend</span> NFT Market Place
          </h1>

          <button className='rounded-full bg-rose-400 px-4 py-2 text-xs text-white font-bold lg:px-5 lg:py-3 lg:text-base'>Sign In</button>
        </header>

        <hr className='my-2 border' />

        {/* content */}
        <div className='mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:justify-center lg:space-y-0'>
          <img className='w-80 object-cover pb-10 lg:h-40' src="https://links.papareact.com/bdy" alt="" />

          <h1 className='text-3xl font-bold lg:text-5xl lg:font-extrabold'>The FRONTEND Ape Club | NFT Page</h1>
          <p className='pt-2 text-xl text-green-500'>17/21 NFT claimed</p>
        </div>

        {/* mint button */}
        <button className='h-16 bg-red-600 w-full text-white rounded-full font-bold'>Mint NFT (0.01 ETH)</button>
      </div>
    </div>
  )
}

export default NFTDropPage