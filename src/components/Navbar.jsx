import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaTimes } from 'react-icons/fa'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'
import { MdContactPage } from 'react-icons/md'
import * as Scroll from 'react-scroll';
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'



const Navbar = () => {
    const [mobile, setMobile] = useState(false);

    const handleClick = () => setMobile(!mobile)

    return (
        <div className='fixed w-full z-10 flex h-[40px] justify-between items-center px-4 bg-black'>
            <div>

            </div>

             {/* Mobile menu icon */}
            <div className='z-10 md:hidden text-2xl py-4 top-0 absolute right-10' onClick={handleClick}>
                {!mobile ? <GiHamburgerMenu /> : <FaTimes />}
            </div>

                    {/* Mobile menu */}
            <div className={!mobile ? 'hidden' : 'bg-black absolute justify-center items-center flex flex-col top-0 left-0 h-[110vh] w-full'}>
                <ul >
                    <Link to='home' smooth='true' duration={300}><li onClick={handleClick} className='py-4 text-2xl font-bold'>Home</li></Link>
                    <Link to='about' smooth='true' duration={300}><li onClick={handleClick} className='py-4 text-2xl font-bold'>About</li></Link>
                    <Link to='skills' smooth='true' duration={300}><li onClick={handleClick} className='py-4 text-2xl font-bold'>Skills</li></Link>
                    <Link to='work' smooth='true' duration={300}><li onClick={handleClick} className='py-4 text-2xl font-bold'>Work</li></Link>
                    <Link to='contact' smooth='true' duration={300}><li onClick={handleClick} className='py-4 text-2xl font-bold'>Contact</li></Link>
                </ul>
            </div>

            {/* Top right menu */}
            <div>
                <nav>
                    <ul className='hidden md:flex cursor-pointer sticky'>
                        <Link to='home' smooth='true' duration={300} ><li className='text-xl hover:text-[#fb7e14] '>Home</li></Link>
                        <Link to='about' smooth='true' duration={300} ><li className='text-xl hover:text-[#fb7e14]'>About</li></Link>
                        <Link to='skills' smooth='true' duration={300} ><li className='text-xl hover:text-[#fb7e14]'>Skills</li></Link>
                        <Link to='work' smooth='true' duration={300} ><li className='text-xl hover:text-[#fb7e14]'>Work</li></Link>
                        <Link to='contact' smooth='true' duration={300} > <li className='text-xl hover:text-[#fb7e14]'>Contact</li></Link>
                    </ul>
                </nav>
            </div>

           


    

            {/* Side menu */}
            <div className='hidden fixed bg-white lg:flex left-0 top-[35%]'>
                <ul>
                    <li className='w-[160px] h-[50px] text-gray-400 items-center justify-center flex ml-[-100px] duration-300 hover:ml-[-10px]'>
                        <a target='_blank' href='https://github.com/aftermath321' className='flex justify-between items-center w-full '> Github <BsGithub size={40} /> </a></li>
                    <li className='w-[160px] h-[50px] text-red-600 items-center justify-center flex ml-[-100px] duration-300 hover:ml-[-10px]'>
                        <a target='_blank' href='mailto:' className='flex justify-between items-center w-full '> Email <SiGmail size={40} /> </a></li>
                    <li className='w-[160px] h-[50px] text-blue-500 items-center justify-center flex ml-[-100px] duration-300 hover:ml-[-10px]'>
                        <a target='_blank' href='https://www.linkedin.com/in/micha%C5%82-kie%C5%82basa-48a28116a/' className='flex justify-between items-center w-full '>  LinkedIn <BsLinkedin size={40} /> </a></li>
                    <li className='w-[160px] h-[50px] text-black items-center justify-center flex ml-[-100px] duration-300 hover:ml-[-10px]'>
                        <a target='_blank' href='https://drive.google.com/file/d/1pYKPiGWlgcFGu3x9dqDLhd9gOUl92LFJ/view?usp=sharing' className='flex justify-between items-center w-full '> Resume <MdContactPage size={45} /> </a></li>
                </ul>

            </div>

        </div>
    )
}

export default Navbar