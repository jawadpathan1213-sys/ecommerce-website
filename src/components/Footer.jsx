import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-5 sm:gap-14 my-10 mt-15 sm:mt-40 text-xs sm:text-base'>
       <div>
        <img src={assets.logo} className='mb-2 sm:mb-5 w-32' alt="" />
        <p className='w-full sm:1/2 md:w-3/4 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione molestiae ipsum modi, itaque iusto quas dolorum beatae corrupti earum. Facere architecto eos voluptas nisi, possimus minus ab voluptates illo quas!</p>
       </div>
       <div >
        <p className='text-xl font-semibold mb-2 sm:mb-5'>COMPANY</p>
        <ul className='text-gray-600 font-medium flex flex-col gap-1'>
        <li >Home</li>
        <li >About us</li>
        <li >Delivery</li>
        <li>Privacy policy</li>
        </ul>
       </div>
       <div >
        <p className='text-xl font-semibold mb-2 sm:mb-5'>GET IN TOUCH</p>
        <ul className='text-gray-600 font-medium flex flex-col gap-1'>
        <li>+92 322 9672054</li>
        <li>jawadpathan1213@gmail.com</li>
        <li>Instagram </li>
        </ul>
       </div>
    </div>
    <hr className='text-gray-300'/>
      <p className=' text-xs sm:text-base font-semibold text-center py-3 sm:py-5 '>Copyright 2024@ greatstack.dev - All Right Reserved.</p>
    </>
  )
}

export default Footer
