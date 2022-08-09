import React from 'react'

const CreateAccountComponent = () => {
  return (
    <div className='w-[900px] h-[600px] bg-blackbg rounded-2xl flex flex-col items-start px-24 justify-center gap-6'>

    <div className='flex flex-col'>
        <h1 className='text-whitebg text-4xl font-bold'>Criar sua conta</h1>
        <h1 className='text-whitebg text-lg font-semibold text-opacity-40'>Escolha o username do seu link. Você não podera mudar depois</h1>
    </div>

    <div className='flex flex-col gap-4 items-start'>
        <input type="text" placeholder='Oxygenix.tk/seunome' className='px-12 py-2 bg-whitebg rounded-md text-blackbg font-semibold' />
        <input type="text" placeholder='Seu nome' className='px-12 py-2 bg-whitebg rounded-md text-blackbg font-semibold' />
        <input type="text" placeholder='sua senha' className='px-12 py-2 bg-whitebg rounded-md text-blackbg font-semibold' />
    </div>

    <div className='flex flex-col gap-6 items-start'>
        <button className='px-12 py-2 bg-primary rounded-full text-white font-semibold'>Criar conta</button>
        <button className='px-12 py-2 text-[12px] bg-primary bg-opacity-40 rounded-full text-white font-semibold'>Entrar na sua conta</button>
    </div>

    </div>
  )
}

export default CreateAccountComponent