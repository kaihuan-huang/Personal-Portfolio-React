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
                <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type="text" placeholder='Name' name='name' />
                <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type="email" placeholder='name@company.com' name='email' required/>
                <textarea className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' name="message" rows="10" placeholder='Your message...'></textarea> 
                <button  className='text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>
                Submit!
               </button> 
                </form>
        </div>
      </div>
    );
  };

export default Contact