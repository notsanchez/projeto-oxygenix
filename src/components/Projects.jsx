import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { MdOutlineRemoveCircle } from "react-icons/md";

const Projects = ({ projects, user, token }) => {

  const [ showNewProject, setShowNewProject ] = useState(false)
  const [ isLogged, setIsLogged ] = useState(false)

  const [ projectName, setProjectName ] = useState('')
  const [ projectDesc, setProjectDesc ] = useState('')
  const [ projectUrl, setProjectUrl ] = useState('')
  
  useEffect(() => {
    if(token !== null){
      setIsLogged(true)
    } else {
      setIsLogged(false)
    }
  },[])

  const handleSubmitProject = () => {
    if(projectName && projectDesc !== ''){
      axios.patch('http://localhost:8000/users/' + token, {
        projects: [
          ...projects,
          {
            id: projectName,
            description: projectDesc,
            url: projectUrl
          }
        ]
      }).then(() => {
        window.location.reload()
      })
    }
  }

  return (
    <>
      {projects.length !== 0 ? (
        <>
        {projects.map((project, i) => (
          <div key={i} className='w-[750px] h-[200px] bg-blackbg mt-12 rounded-full flex flex-col items-start justify-center px-12 gap-2 text-whitebg hover:text-primary transition-all duration-300'>
            
            <h1 className='text-xl font-semibold '>{project.id}</h1>
            <p className='text-md text-whitebg text-opacity-75'>{project.description}</p>
            
            <div className='w-[650px] flex justify-end px-6 gap-2 items-center'>
                
                <Link to={project.url} className='bg-secondary py-2 px-4 rounded-full text-whitebg hover:px-12 transition-all duration-300'>Ver projeto</Link>

                <div className='flex gap-2 items-center'>
                  {isLogged && (
                    <>
                      <button onClick={() => {
                        projects.splice(i, 1)
                        axios.patch('http://localhost:8000/users/' + token, {
                          projects: [
                            ...projects
                          ]
                        })
                        window.location.reload()
                      }} className='text-red-500 rounded-full transition-all duration-300 font-bold text-2xl'><MdOutlineRemoveCircle/></button>
                    </>
                  )}
                </div>
            </div>
          </div>
        ))}
        {showNewProject && (
          <div className='w-[750px] h-[210px] bg-secondaryblack mt-12 rounded-lg flex flex-col items-start justify-center px-8 gap-4 text-whitebg hover:text-primary transition-all duration-300'>
            <input
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              type="text" 
              placeholder='Nome do projeto *'
              required
              className='bg-secondaryblack text-white focus:outline-none font-semibold' 
            />
            <input
              value={projectUrl}
              onChange={(e) => setProjectUrl(e.target.value)}
              type="text" 
              placeholder='URL do projeto' 
              className='bg-secondaryblack text-white focus:outline-none font-semibold'
            />
            <textarea
              value={projectDesc}
              onChange={(e) => setProjectDesc(e.target.value)}
              type="text" 
              placeholder='Descrição *'
              required
              className='bg-secondaryblack text-white focus:outline-none font-semibold'
            />
            <div className='w-[650px] flex items-end justify-end gap-2'>
                <button onClick={handleSubmitProject} className='bg-primary py-2 px-4 rounded-full text-whitebg hover:px-12 transition-all duration-300'>Salvar projeto</button>
                <button onClick={() => setShowNewProject(false)} className='text-red-500 rounded-full transition-all duration-300 font-bold text-xl'><MdOutlineRemoveCircle/></button>
            </div>
          </div>
        )}
        {user == token ? (
          <div className='w-full flex items-start justify-end mt-6'>
            <button onClick={() => setShowNewProject(true)} className='bg-blackbg w-[150px] h-[40px] rounded-full flex items-center justify-center text-white font-semibold'>
              <h1>Adicinar projeto</h1>
            </button>
          </div>
        ) : (<></>)}
        
        </>
      ) : (
        <div className='flex flex-col items-center justify-center'>
          {showNewProject == false ? (
            <h1 className='text-2xl font-semibold text-whitebg mt-12'>Ainda não possuo nenhum projeto </h1>
          ): (<></>)}

          <div>
            {showNewProject && (
            <div className='w-[750px] h-[210px] bg-secondaryblack mt-12 rounded-lg flex flex-col items-start justify-center px-8 gap-4 text-whitebg hover:text-primary transition-all duration-300'>
              <input
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                type="text" 
                placeholder='Nome do projeto *'
                required
                className='bg-secondaryblack text-white focus:outline-none font-semibold' 
              />
              <input
                value={projectUrl}
                onChange={(e) => setProjectUrl(e.target.value)}
                type="text" 
                placeholder='URL do projeto' 
                className='bg-secondaryblack text-white focus:outline-none font-semibold'
              />
              <textarea
                value={projectDesc}
                onChange={(e) => setProjectDesc(e.target.value)}
                type="text" 
                placeholder='Descrição *'
                required
                className='bg-secondaryblack text-white focus:outline-none font-semibold'
              />
              <div className='w-[650px] flex items-end justify-end gap-2'>
                  <button onClick={handleSubmitProject} className='bg-primary py-2 px-4 rounded-full text-whitebg hover:px-12 transition-all duration-300'>Salvar projeto</button>
                  <button onClick={() => setShowNewProject(false)} className='text-red-500 rounded-full transition-all duration-300 font-bold text-xl'><MdOutlineRemoveCircle/></button>
              </div>
            </div>
          )}
          {user == token ? (
            <div className='w-full flex items-start justify-end mt-6'>
              {showNewProject && showNewProject ? (
                  <></>
                ) : (
                  <button onClick={() => setShowNewProject(true)} className='bg-primary text-white px-12 py-2 rounded-lg mt-12 hover:px-16 hover:bg-secondary transition-all duration-300'>
                    <h1>Adicinar projeto</h1>
                  </button>
                )}
            </div>
            ) : (<></>)}
          </div>
        </div>
      )}
      
    </>
  )
}

export default Projects