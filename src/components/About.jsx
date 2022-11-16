import React from 'react'

const About = () => {
    return (
        <div className='w-full h-screen ' name='about'>
            <div className='items-center justify-center flex flex-col w-full p-4'>
                <h1 className='text-4xl py-6'>About</h1>
                <div className='grid grid-cols-2 w-full max-w-[1000px] gap-8 '>
                    <div className='justify-center items-center'>
                        <p className='text-bold text-4xl'>Hi. I'm Michał, nice to meet you. Please take a look around.</p>

                    </div>
                    <div className='justify-center items-center'> I am passionate about building excellent software that improves
                        the lives of those around me. I specialize in creating software
                        for clients ranging from individuals and small-businesses all the
                        way to large enterprise corporations. What would you do if you had
                        a software expert available at your fingertips?</div>
                </div>
            </div>
        </div>
    )
}

export default About