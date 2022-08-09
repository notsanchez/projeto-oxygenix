import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-center py-6'>
        <div className='w-[1700px] h-20 rounded-full bg-blackbg flex items-center justify-between px-12'>
            <h1 className='text-whitebg font-bold text-2xl'>Oxygenix</h1>

            <div className='flex gap-4'>
                <Link to="/login" className='text-whitebg bg-secondaryblack px-6 py-2 rounded-md font-semibold'>Log in</Link>
                <Link to="/create" className='text-blackbg bg-whitebg px-6 py-2 rounded-md font-semibold'>Sign up free</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar