import React from 'react'
import { SiMysql, SiMongodb, SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiNodedotjs } from 'react-icons/si'
import { FaJava } from 'react-icons/fa'


const Skills = () => {
    return (
        <div className='w-full h-screen'>
            <div className='max-w-[1000px] flex-col mx-auto p-4 flex justify-center items-center w-full h-full'>

                <p className='flex text-5xl text-bold py-8'>Skills</p>

                <div className='w-full grid grid-cols-4 gap-y-8 text-center py-8'>

                    <div className='flex-row flex group w-[250px]'>
                        <SiMysql size={80}  className='hover:text-gray-800 duration-500' />
                        <div className='scale-0 group-hover:scale-100 duration-500 ml-4 text-4xl flex text-bold justify-center items-center '>MySQL</div>
                    </div>
                 


                </div>

            </div>
        </div>
    )
}

export default Skills