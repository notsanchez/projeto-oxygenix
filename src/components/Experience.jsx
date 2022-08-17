import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdOutlineRemoveCircle } from "react-icons/md";

const Experience = ({ experiences, user, token }) => {

  const [ showNewProject, setShowNewProject ] = useState(false)
  const [ isLogged, setIsLogged ] = useState(false)

  const [ experienceName, setExperienceName ] = useState('')
  const [ experienceDesc, setExperienceDesc ] = useState('')
  
  useEffect(() => {
    if(token !== null){
      setIsLogged(true)
    } else {
      setIsLogged(false)
    }
  },[])

  const handleSubmitProject = () => {
    if(experienceName && experienceDesc !== ''){
      axios.patch('http://localhost:3001/users/' + token, {
        experience: [
          ...experiences,
          {
            id: experienceName,
            description: experienceDesc,
          }
        ]
      }).then(() => {
        window.location.reload()
      })
    }
  }

  return (
    <>
      {experiences.length !== 0 ? (
        <>
          {experiences.map((experience, i) => (
            <div key={i} className='w-[750px] h-[200px] bg-blackbg mt-12 rounded-lg border-whitebg border-2 flex flex-col items-start justify-center px-12 gap-2 text-whitebg hover:text-primary transition-all duration-300'>
              
              <h1 className='text-xl font-semibold '>{experience.id}</h1>
              <p className='text-md text-whitebg text-opacity-75'>{experience.description}</p>
              
              <div className='w-[650px] flex justify-end px-6 gap-2 items-center'>
                  
                  <div className='flex gap-2 items-center'>
                    {isLogged && (
                      <>
                        <button onClick={() => {
                          experiences.splice(i, 1)
                          axios.patch('http://localhost:3001/users/' + token, {
                            experience: [
                              ...experiences
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
                value={experienceName}
                onChange={(e) => setExperienceName(e.target.value)}
                type="text" 
                placeholder='Nome da empresa / projeto *'
                required
                className='bg-secondaryblack text-white focus:outline-none font-semibold' 
              />
              <textarea
                value={experienceDesc}
                onChange={(e) => setExperienceDesc(e.target.value)}
                type="text" 
                placeholder='Descrição *'
                required
                className='bg-secondaryblack text-white focus:outline-none font-semibold'
              />
              <div className='w-[650px] flex items-end justify-end gap-2'>
                  <button onClick={handleSubmitProject} className='bg-primary py-2 px-4 rounded-full text-whitebg hover:px-12 transition-all duration-300'>Salvar Experiencia</button>
                  <button onClick={() => setShowNewProject(false)} className='text-red-500 rounded-full transition-all duration-300 font-bold text-xl'><MdOutlineRemoveCircle/></button>
              </div>
            </div>
          )}
          {user == token ? (
            <div className='w-full flex items-start justify-end mt-6'>
              <button onClick={() => setShowNewProject(true)} className='bg-blackbg w-[180px] h-[50px] rounded-full flex items-center justify-center text-white font-semibold'>
                <h1>Adicinar experiencia</h1>
              </button>
            </div>
          ) : (<></>)}
        </>
      ) : (
        <div className='h-[250px] flex items-center justify-center text-center flex-col mt-12'>
          {showNewProject == false ? (
            <h1 className='text-whitebg font-semibold text-2xl'>Ainda não tenho experiencias :( </h1>
          ) : (<></>)}
          <div className='flex flex-col mt-24'>
            {showNewProject && (
              <div className='w-[750px] h-[210px] bg-secondaryblack rounded-lg flex flex-col items-start justify-center px-8 gap-4 text-whitebg hover:text-primary transition-all duration-300'>
                <input
                  value={experienceName}
                  onChange={(e) => setExperienceName(e.target.value)}
                  type="text" 
                  placeholder='Nome da empresa / projeto *'
                  required
                  className='bg-secondaryblack text-white focus:outline-none font-semibold' 
                />
                <textarea
                  value={experienceDesc}
                  onChange={(e) => setExperienceDesc(e.target.value)}
                  type="text" 
                  placeholder='Descrição *'
                  required
                  className='bg-secondaryblack text-white focus:outline-none font-semibold'
                />
                <div className='w-[650px] flex items-end justify-end gap-2'>
                    <button onClick={handleSubmitProject} className='bg-primary py-2 px-4 rounded-full text-whitebg hover:px-12 transition-all duration-300'>Salvar Experiencia</button>
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
                    <h1>Adicinar experiencia</h1>
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

export default Experience