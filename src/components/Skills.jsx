import React, { useEffect } from 'react'
import { SiMysql, SiMongodb, SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiNodedotjs, SiReact } from 'react-icons/si'
import Aos from 'aos';
import 'aos/dist/aos.css'


const Skills = () => {

    useEffect(() => {
        Aos.init({
            duration: 2000
            , disable: function () {
                let maxWidth = 640;
                return window.innerWidth > maxWidth;
            }
        })
    }, [])

    return (
        <div name='skills' className='w-full lg:h-screen'>
            <div className=' flex-col p-4 flex justify-center items-center w-full'>

                <h2 className='flex text-5xl text-bold py-8'>Skills</h2>
                <p className='text-2xl'>Some of the technologies I have worked with:</p>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:py-10 '>

                    <div data-Aos='fade-right' className='flex-row flex group '>
                        <SiMysql size={80} className='group-hover:text-[#fb7e14] group-hover:-translate-y-6 duration-300' />
                        <div data-Aos='fade-right' className='group-hover:text-[#fb7e14] ml-4 scale-0 group-hover:scale-100 duration-300 text-4xl  flex text-bold justify-center items-center '>MySQL</div>

                    </div>

                    <div data-Aos='fade-right' className='flex-row flex group '>
                        <SiMongodb size={80} className='group-hover:text-[#fb7e14] group-hover:-translate-y-6 duration-300' />
                        <div data-Aos='fade-right' className='group-hover:text-[#fb7e14] ml-4 scale-0 group-hover:scale-100 duration-300 text-4xl  flex text-bold justify-center items-center '>MongoDB</div>

                    </div>

                    <div data-Aos='fade-right' className='flex-row flex group '>
                        <SiJavascript size={80} className='group-hover:text-[#fb7e14] group-hover:-translate-y-6 duration-300' />
                        <div data-Aos='fade-right' className='group-hover:text-[#fb7e14] ml-4 scale-0 group-hover:scale-100 duration-300 text-4xl  flex text-bold justify-center items-center '>JavaScript</div>

                    </div>

                    <div data-Aos='fade-right' className='flex-row flex group'>
                        <SiCss3 size={80} className='group-hover:text-[#fb7e14] group-hover:-translate-y-6 duration-300' />
                        <div data-Aos='fade-right' className='group-hover:text-[#fb7e14] ml-4 scale-0 group-hover:scale-100 duration-300 text-4xl  flex text-bold justify-center items-center '>CSS 3</div>

                    </div>

                    <div data-Aos='fade-right' className='flex-row flex group '>
                        <SiHtml5 size={80} className='group-hover:text-[#fb7e14] group-hover:-translate-y-6 duration-300' />
                        <div data-Aos='fade-right' className='group-hover:text-[#fb7e14] ml-4 scale-0 group-hover:scale-100 duration-300 text-4xl  flex text-bold justify-center items-center '>HTML 5</div>

                    </div>

                    <div data-Aos='fade-right' className='flex-row flex group '>
                        <SiTailwindcss size={80} className='group-hover:text-[#fb7e14] group-hover:translate-y-6 duration-300' />
                        <div data-Aos='fade-right' className='group-hover:text-[#fb7e14] ml-4 scale-0 group-hover:scale-100 duration-300 text-4xl  flex text-bold justify-center items-center '>Tailwind</div>

                    </div>

                    <div data-Aos='fade-right' className='flex-row flex group '>
                        <SiNodedotjs size={80} className='group-hover:text-[#fb7e14] group-hover:translate-y-6 duration-300' />
                        <div data-Aos='fade-right' className='group-hover:text-[#fb7e14] ml-4 scale-0 group-hover:scale-100 duration-300 text-4xl  flex text-bold justify-center items-center '>NodeJS</div>
                    </div>

                    <div data-Aos='fade-right' className='flex-row flex group '>
                        <SiReact size={80} className='group-hover:text-[#fb7e14] group-hover:translate-y-6 duration-300' />
                        <div data-Aos='fade-right' className='group-hover:text-[#fb7e14] ml-4 scale-0 group-hover:scale-100 duration-300 text-4xl  flex text-bold justify-center items-center '>ReactJS</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills