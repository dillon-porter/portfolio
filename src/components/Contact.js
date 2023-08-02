import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-full bg-[#fff] flex justify-center items-center p-4 md:pt-60'>
        <form method='POST' action="https://getform.io/f/cc4dffe1-b1b3-4143-8767-f00c46c64c00" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#92b7fa] text-zinc-800'>Contact</p>
                <p className="mt-2 mb-5 max-w-2xl text-xl text-gray-500">// Submit the form below or shoot me an email - dillonporter@hotmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' required />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' required />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='bg-[#92b7fa] text-black border-2 hover:bg-[#00205B] hover:border-[#92b7fa] hover:text-sky-400 px-4 py-3 my-8 mx-auto flex items-center'>Contact Me</button>
        </form>
    </div>
  )
}

export default Contact

