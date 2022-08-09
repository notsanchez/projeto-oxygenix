import React from 'react'

const Social = () => {
  return (
    <div className='flex flex-col items-center justify-center'> 
        <h1 className='text-2xl font-semibold text-whitebg mt-8'>Sinta-se a vontade para <span className='text-secondary'>entrar em contato.</span></h1>
        <button className='w-[500px] h-[60px] bg-blackbg rounded-lg mt-6 flex items-center justify-center text-whitebg font-bold'>
            <h1>LinkedIn</h1>
        </button>
        <button className='w-[500px] h-[60px] bg-blackbg rounded-lg mt-6 flex items-center justify-center text-whitebg font-bold'>
            <h1>Instagram</h1>
        </button>
    </div>
  )
}

export default Social