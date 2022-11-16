import React, {useEffect} from 'react'
import { SiMysql, SiMongodb, SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiNodedotjs, SiReact } from 'react-icons/si'
import Aos from 'aos';
import 'aos/dist/aos.css'


const Skills = () => {

    useEffect(() => {
      Aos.init({duration: 1000
        ,disable: function(){
        let maxWidth = 640;
        return window.innerWidth > maxWidth;
      }
    })
    }, [])

    return (
        <div name='skills' className='w-full lg:h-screen'>
            <div className=' flex-col p-4 flex justify-center items-center w-full'>

                <p className='flex text-5xl text-bold py-8'>Skills</p>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:py-8 '>

                    <div data-Aos='fade-right' className='flex-row flex group '>
                        <SiMysql size={80} className='group-hover:text-gray-800 group-hover:-translate-y-6 duration-500' />
                            <div data-Aos='fade-right' className='ml-4 scale-0 group-hover:scale-100 duration-500 text-4xl  flex text-bold justify-center items-center '>MySQL</div>
                            
                    </div>

                    <div data-Aos='fade-right' className='flex-row flex group '>
                        <SiMongodb size={80} className='group-hover:text-gray-800 duration-500' />
                        <div data-Aos='fade-right' className='ml-4 scale-0 group-hover:scale-100 duration-500 text-4xl  flex text-bold justify-center items-center '>MongoDB</div>
                        
                    </div>

                    <div data-Aos='fade-right' className='flex-row flex group '>
                        <SiJavascript size={80} className='group-hover:text-gray-800 duration-500' />
                        <div data-Aos='fade-right' className='ml-4 scale-0 group-hover:scale-100 duration-500 text-4xl  flex text-bold justify-center items-center '>JavaScript</div>
                        
                    </div>

                    <div data-Aos='fade-right' className='flex-row flex group'>
                        <SiCss3 size={80} className='group-hover:text-gray-800 duration-500' />
                        <div data-Aos='fade-right' className='ml-4 scale-0 group-hover:scale-100 duration-500 text-4xl  flex text-bold justify-center items-center '>CSS 3</div>
                        
                    </div>

                    <div data-Aos='fade-right' className='flex-row flex group '>
                        <SiHtml5 size={80} className='group-hover:text-gray-800 duration-500' />
                        <div data-Aos='fade-right' className='ml-4 scale-0 group-hover:scale-100 duration-500 text-4xl  flex text-bold justify-center items-center '>HTML 5</div>
                        
                    </div>

                    <div data-Aos='fade-right' className='flex-row flex group '>
                        <SiTailwindcss size={80} className='group-hover:text-gray-800 duration-500' />
                        <div data-Aos='fade-right' className='ml-4 scale-0 group-hover:scale-100 duration-500 text-4xl  flex text-bold justify-center items-center '>Tailwind</div>
                        
                    </div>

                    <div data-Aos='fade-right' className='flex-row flex group '>
                        <SiNodedotjs size={80} className='group-hover:text-gray-800 duration-500' />
                        <div data-Aos='fade-right' className='ml-4 scale-0 group-hover:scale-100 duration-500 text-4xl  flex text-bold justify-center items-center '>NodeJS</div>
                        
                    </div>

                    <div data-Aos='fade-right' className='flex-row flex group '>
                        <SiReact size={80} className='group-hover:text-gray-800 duration-500' />
                        <div data-Aos='fade-right' className='ml-4 scale-0 group-hover:scale-100 duration-500 text-4xl  flex text-bold justify-center items-center '>ReactJS</div>
                        
                    </div>



                </div>

            </div>
        </div>
    )
}

export default Skills