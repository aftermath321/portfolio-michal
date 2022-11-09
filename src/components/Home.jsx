import React from 'react'
import { HiArrowUp } from 'react-icons/hi'

const Home = () => {
    return (
        <div className='mx-auto w-full h-screen flex justify-center items-center'>
            <div className='justify-center px-8 text-center'>
                <p>Hi, my name is</p>
                <h1 className='text-5xl'>Michał Kiełbasa.</h1>
                <p>I am a fullstack Web Developer. I attended CodersLab Java Developer course and self taught JavaScript along with ReactJS/NextJS. </p>
                <div className='flex justify-center pt-16'>

                    <button className='flex group border-white border-4 px-8 py-2 justify-center items-center'>
                        Show work!

                        <HiArrowUp size={40} className='group-hover:rotate-180 duration-500' />

                    </button>

                </div>
            </div>
        </div>
    )
}

export default Home