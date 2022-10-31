import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaTimes } from 'react-icons/fa'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'
import { MdContactPage } from 'react-icons/md'



const Navbar = () => {
    const [mobile, setMobile] = useState(false);

    const handleClick = () => setMobile(!mobile)
    
    return (
        <div className='fixed w-full flex h-[80px] justify-between items-center px-4'>
                <div>

                </div>

            {/* Top right menu */}
            <div>
                <nav>
                    <ul className='hidden md:flex'>
                        <li className='text-xl font-bold'>Home</li>
                        <li className='text-xl font-bold'>About</li>
                        <li className='text-xl font-bold'>Skills</li>
                        <li className='text-xl font-bold'>Experience</li>
                        <li className='text-xl font-bold'>Contact</li>
                    </ul>
                </nav>
            </div>

            {/* Mobile menu icon */}
            <div className='z-10 md:hidden text-2xl py-4 absolute right-10' onClick={handleClick}>
                {!mobile ? <GiHamburgerMenu /> : <FaTimes />}
            </div>
            

            {/* Mobile menu */}
            <div className={!mobile ? 'hidden' : 'absolute justify-center items-center flex flex-col top-0 left-0 h-screen w-full'}>
                <ul >
                    <li onClick={handleClick} className='py-4 text-2xl font-bold'>Home</li>
                    <li onClick={handleClick} className='py-4 text-2xl font-bold'>About</li>
                    <li onClick={handleClick} className='py-4 text-2xl font-bold'>Skills</li>
                    <li onClick={handleClick} className='py-4 text-2xl font-bold'>Experience</li>
                    <li onClick={handleClick} className='py-4 text-2xl font-bold'>Contact</li>
                </ul>
            </div>

            {/* Side menu */}
            <div className='hidden fixed lg:flex left-0 top-[35%]'>
                <ul>
                    <li className='w-[160px] h-[50px] bg-white text-gray-400 items-center justify-center flex ml-[-100px] duration-300 hover:ml-[-10px]'>
                        <a href='https://github.com/aftermath321' className='flex justify-between items-center w-full '> Github <BsGithub size={40} /> </a></li>
                    <li className='w-[160px] h-[50px] bg-white text-red-600 items-center justify-center flex ml-[-100px] duration-300 hover:ml-[-10px]'><a href='mailto:' className='flex justify-between items-center w-full '> Email <SiGmail size={40} /> </a></li>
                    <li className='w-[160px] h-[50px] bg-white text-blue-500 items-center justify-center flex ml-[-100px] duration-300 hover:ml-[-10px]'><a href='https://www.linkedin.com/in/micha%C5%82-kie%C5%82basa-48a28116a/' className='flex justify-between items-center w-full '>  LinkedIn <BsLinkedin size={40} /> </a></li>
                    <li className='w-[160px] h-[50px] bg-white text items-center justify-center flex ml-[-100px] duration-300 hover:ml-[-10px]'><a href='/' className='flex justify-between items-center w-full '> Resume <MdContactPage size={45} /> </a></li>
                </ul>

            </div>

        </div>
    )
}

export default Navbar