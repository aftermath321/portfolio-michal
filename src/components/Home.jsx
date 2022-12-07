import React from 'react'
import { HiArrowUp } from 'react-icons/hi'


const Home = () => {
    return (
        <div className='mx-auto w-full h-screen flex justify-center items-center' name='home'>
            <div className='justify-center px-8 text-center'>
                <span className='select-none'></span>
                <h1 id='name' className='text-8xl text-[#fb7e14] text-left'>Michał<br/> Kiełbasa.</h1>
                <span> </span>
                <p>The fullstack Website Developer. Welcome to my page! </p>
                <div className='flex justify-center pt-16'>

                    <button className='flex group border-white border-4 px-8 py-2 justify-center items-center animate-bounce'>
                        Show work!
                        <HiArrowUp size={40} className='group-hover:rotate-180 duration-500' />
                    </button>
                    </div>

                </div>
            </div>
    
    )
}

export default Home