import React from 'react'

const Contact = () => {

 

  return (

    <div className='mx-auto flex justify-center items-center h-screen w-full p-4 text-black' name='contact'>

      <form method='POST' action='https://getform.io/f/dc4e4d8a-dc96-4d03-9948-0b991af7de68' className='flex flex-col max-w-[600px] w-full'>
        <div className='py-4'>
          <p className=' font-bold text-5xl py-4 text-white'>Write to me!</p>
        </div>
        <input type='text' placeholder='Name' name='name'  className='p-2 m-4 text-black'/>
        <input type='email' placeholder='E-mail' name='email' className='p-2 m-4 text-black' />
        <textarea rows={10} placeholder='Message' name='message' className='p-2 m-4 text-black' />
        <button type='submit' className='bg-white'> Send!</button>
      </form>
    </div>
  )
}

export default Contact