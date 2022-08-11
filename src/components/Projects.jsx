import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Projects = ({ projects, user, token }) => {

  const [ showNewProject, setShowNewProject ] = useState(false)

  return (
    <>
      {projects.map((project) => (
        <div className='w-[750px] h-[170px] bg-blackbg mt-12 rounded-full flex flex-col items-start justify-center px-12 gap-2 cursor-pointer text-whitebg hover:text-primary transition-all duration-300'>
          <h1 className='text-xl font-semibold '>{project.id}</h1>
          <p className='text-md text-whitebg text-opacity-75'>{project.description}</p>
          <div className='w-[650px] flex items-end justify-end px-6'>
              <Link to={project.url} className='bg-primary py-2 px-4 rounded-full text-whitebg hover:px-12 transition-all duration-300'>Ver projeto</Link>
          </div>
        </div>
      ))}
      {showNewProject && (
        <div className='w-[750px] h-[170px] bg-secondaryblack mt-12 rounded-full flex flex-col items-start justify-center px-12 gap-2 cursor-pointer text-whitebg hover:text-primary transition-all duration-300'>
          <input type="text" placeholder='Nome do projeto' className='bg-secondaryblack text-white focus:outline-none font-semibold' />
          <input type="text" placeholder='Descrição' className='bg-secondaryblack text-white focus:outline-none font-semibold'/>
          <div className='w-[650px] flex items-end justify-end px-6'>
              <Link to="/" className='bg-primary py-2 px-4 rounded-full text-whitebg hover:px-12 transition-all duration-300'>Salvar projeto</Link>
          </div>
        </div>
      )}
      {user == token ? (
        <div className='w-full flex items-start justify-end mt-2'>
          <button onClick={() => setShowNewProject(true)} className='bg-blackbg w-[150px] h-[40px] rounded-full flex items-center justify-center text-white font-semibold'>
            <h1>Adicinar projeto</h1>
          </button>
        </div>
      ) : (<></>)}
      
    </>
  )
}

export default Projects