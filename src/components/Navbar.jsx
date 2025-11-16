import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {

    const [visible, setVisible] = useState(false)
    const { setShowSearch } = useContext(ShopContext)

  return (
    <div className='flex flex-col-reverse sm:flex-row items-center justify-between py-5 font-medium gap-5'>
      
      <Link to='/'><img src={assets.logo} alt="" className='w-30 sm:w-35' /></Link>

      <ul className='hidden sm:flex text-sm gap-5 text-gray-700 font-semibold'>

       <NavLink to='/' className='flex flex-col items-center gap-1'>
         <h1 >HOME</h1>
         <hr className='w-2/4 border-none h-px bg-gray-700 hidden' />
       </NavLink>
       <NavLink to='/collection' className='flex flex-col items-center gap-1'>
         <p>COLLECTION</p>
         <hr className='w-2/4 border-none h-px bg-gray-700 hidden'/>
       </NavLink>
       <NavLink to='/about' className='flex flex-col items-center gap-1'>
         <p>ABOUT</p>
         <hr className='w-2/4 border-none h-px bg-gray-700 hidden' />
       </NavLink>
       <NavLink to='/contact' className='flex flex-col items-center gap-1 '>
         <p>CONTACT</p>
         <hr className='w-2/4 border-none h-px bg-gray-700 hidden' />
       </NavLink>
      </ul>

      <div className='flex items-center sm:gap-5 gap-7 '>
        <img onClick={() => setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' alt="" />

   
      <div className='group relative '>
        <img src={assets.profile_icon} className='w-5 cursor-pointer' alt="" />
        <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className='flex flex-col gap-2 px-5 w-36 py-3 bg-slate-100 text-gray-500 rounded '>
                <p className='cursor-pointer hover:text-black'>My Profile</p>
                <p className='cursor-pointer hover:text-black'>Orders</p>
                <p className='cursor-pointer hover:text-black'>Logout</p>
            </div>
        </div>
      </div>
      <Link to='/cart' className='relative'>
        <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
        <p className='absolute right-[-5px] bottom-[-5px] w-4 leading-4 text-center bg-black text-white aspect-square rounded-full text-[8px]'>10</p>
      </Link>
      <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />

      </div>

      {/* navbar for menu of smal screens */}

      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full': 'w-0'}`}>
        <div className="flex flex-col text-gray-600">
            <div onClick={()=> setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer hover:bg-gray-100'>
                <img src={assets.dropdown_icon} className='h-4 rotate-180' alt="" />
                <p>back</p>
            </div>
            <NavLink onClick={()=>setVisible(false)} to='/' className='py-2 pl-6 border cursor-pointer'>HOME</NavLink>
            <NavLink onClick={()=>setVisible(false)} to='/collection' className='py-2 pl-6 border cursor-pointer'>COLLECTION</NavLink>
            <NavLink onClick={()=>setVisible(false)} to='/about' className='py-2 pl-6 border cursor-pointer'>ABOUT</NavLink>
            <NavLink onClick={()=>setVisible(false)} to='/contact' className='py-2 pl-6 border cursor-pointer'>CONTACT</NavLink>
        </div>
      </div>
    </div>

  )
}

export default Navbar
