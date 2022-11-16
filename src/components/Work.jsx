import React from 'react'
import Ecommerce from '../assets/ecommerce.png'

const Work = () => {
  return (
    <div className='w-full lg:h-screen' name='work'>
      <div className=' w-full mx-auto flex flex-col justify-center items-center p-4 py-8'>
        <p className='text-5xl py-8'>My work!</p>

        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>


          <div data-Aos='fade-up' alt='ecommerce photo' style={{ backgroundImage: `url(${Ecommerce})` }}
            className='group container content-div mx-auto rounded-md shadow-sm shadow-white'>

            <div className="opacity-0 group-hover:opacity-100 w-[250px] flex flex-col pt-8">
              <span className="text-2xl font-bold text-white tracking-wider text-center items-center ">
                E-commerce template              </span>
              <div className="pt-8 text-center ">

               
                <button className='rounded-lg m-4 font-bold text-2xl bg-white text-black p-2'
                >
                  Demo
                </button>
                <button className='rounded-lg m-4 font-bold text-2xl bg-white text-black p-2'
                >
                  Code
                </button>
              </div>
            </div>
          </div>
          <div data-Aos='fade-up' alt='ecommerce photo' style={{ backgroundImage: `url(${Ecommerce})` }}
            className='group container content-div mx-auto rounded-md shadow-md shadow-white'>

            <div className="opacity-0 group-hover:opacity-100 w-[250px] flex flex-col pt-8">
              <span className="text-2xl font-bold text-white tracking-wider text-center items-center ">
                E-commerce template              </span>
              <div className="pt-8 text-center ">

               
                <button className='rounded-lg m-4 font-bold text-2xl bg-white text-black p-2'
                >
                  Demo
                </button>
                <button className='rounded-lg m-4 font-bold text-2xl bg-white text-black p-2'
                >
                  Code
                </button>
              </div>
            </div>
          </div>
       
          <div data-Aos='fade-up' alt='ecommerce photo' style={{ backgroundImage: `url(${Ecommerce})` }}
            className='group container content-div mx-auto rounded-md shadow-md shadow-white'>

            <div className="opacity-0 group-hover:opacity-100 w-[250px] flex flex-col pt-8">
              <span className="text-2xl font-bold text-white tracking-wider text-center items-center ">
                E-commerce template              </span>
              <div className="pt-8 text-center ">

               
                <button className='rounded-lg m-4 font-bold text-2xl bg-white text-black p-2'
                >
                  Demo
                </button>
                <button className='rounded-lg m-4 font-bold text-2xl bg-white text-black p-2'
                >
                  Code
                </button>
              </div>
            </div>
          </div>

        </div>

      </div></div>

  )
}

export default Work