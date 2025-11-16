import React from 'react'

const NewsLetterBox = () => {

    const onSubmitHandler = (event)=>{
      event.preventDefault()
    }
  return (
    <div className='text-center'>
      <p className=' text-xl sm:text-2xl font-medium text-gray-800'>Subscribe now and get 20% off</p>
      <p className='text-gray-400 mt-3 text-xs sm:text-sm'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, ipsam.
      </p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border sm:pl-3 pl-1 border-gray-300'>
        <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter email' required/>
        <button type='submit' className='bg-black text-white text-xs sm:text-sm py-2 sm:py-4 px-2 sm:px-10'>SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default NewsLetterBox
