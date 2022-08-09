import React from 'react'

const Projects = () => {
  return (
    <div className='w-[750px] h-[170px] bg-blackbg mt-12 rounded-full flex flex-col items-start justify-center px-12 gap-2 cursor-pointer text-whitebg hover:text-primary transition-all duration-300'>
        <h1 className='text-xl font-semibold '>Pokedex - ViteJS</h1>
        <p className='text-md text-whitebg text-opacity-75'>Pokedex consumindo dados da PokéAPI feito com Vitejs, com funcionalidades de ver todos as peginas de pokemons e ver um por um utlizando urlParams.</p>
        <div className='w-[650px] flex items-end justify-end px-6'>
            <button className='bg-primary py-2 px-4 rounded-full text-whitebg hover:px-12 transition-all duration-300'>Ver projeto</button>
        </div>
    </div>
  )
}

export default Projects