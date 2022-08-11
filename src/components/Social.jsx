import React from 'react'
import { Link } from 'react-router-dom'

const Social = ({ social }) => {
  return (
    <>
      <div className='flex flex-col items-center justify-center'> 
          <h1 className='text-2xl font-semibold text-whitebg mt-8'>Sinta-se a vontade para <span className='text-secondary'>entrar em contato.</span></h1>
          {social.map((socials) => (
            <a href={socials.url} className='w-[500px] h-[60px] bg-blackbg rounded-lg mt-6 flex items-center justify-center text-whitebg font-bold'>
              <h1>{socials.id}</h1>
            </a>
          ))}
          
      </div>
    </>
  )
}

export default Social