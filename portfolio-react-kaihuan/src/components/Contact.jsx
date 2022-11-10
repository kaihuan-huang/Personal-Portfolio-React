import React from 'react'

const Contact = () => {
    return (
      <div name='contact' className='w-full h-screen text-gray-500'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
          <div className='max-w-[px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
              <p className='text-4xl font-bold inline text-pink-600'>
              Contact Me!
              </p>
            </div>
            </div>
                <form  action="https://getform.io/f/1c0e4abb-a618-4077-b6a2-37a87fff03ba" method="POST" className='flex flex-col max-w-[700px] w-full'>
                <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
                <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
                <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea> 
                <button  className='text-pink-600 group border-2 px-6 py-3 hover:text-[#cab0e9]'>
                Submit!
               </button> 
                </form>
        </div>
      </div>
    );
  };

export default Contact