import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const HomeComponents = () => {

    const [ name, setName ] = useState('');

    const handleNewAccount = () => {
        localStorage.setItem("tempToken", name)
    }

  return (
    <div className='w-screen top-[50%] fixed items-center justify-start'> 
        <div className='flex flex-col px-12 gap-12'>
            <div className='flex flex-col gap-2'>
                <h1 className='text-6xl font-bold text-whitebg'>Tudo que você faz. Em<br/>apenas um lugar.</h1>
                <h1 className='text-2xl font-semibold text-whitebg'>Mostre para o mundo seu trabalho.</h1>
            </div>

            <div className='flex gap-2'>
                <div className='flex text-center'>
                    <input className='bg-whitebg text-end rounded-l-lg font-semibold' value={'Oxygenix.tk/'} disabled/>
                    <input className='bg-whitebg text-start rounded-r-lg font-semibold focus:outline-none' value={name} onChange={(e) => setName(e.target.value)} placeholder='seu nome'/>
                </div>
                <Link to="/create" onClick={handleNewAccount} className='bg-blackbg text-whitebg font-bold px-6 py-6 rounded-full hover:px-12 transition-all duration-300'>Criar seu Oxygenix</Link>
            </div>
        </div>
    </div>
  )
}

export default HomeComponents