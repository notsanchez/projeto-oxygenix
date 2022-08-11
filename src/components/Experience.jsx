import React from 'react'

const Experience = ({ experiences }) => {
  return (
    <>
      {experiences.map((experience) => (
        <div className='w-[750px] h-[170px] bg-blackbg mt-12 rounded-lg border-2 border-whitebg flex flex-col items-start justify-center px-12 gap-2'>
          <h1 className='text-xl font-semibold text-whitebg'>{experience.id}</h1>
          <p className='text-md text-whitebg text-opacity-75'>{experience.description}</p>
        </div>
      ))}
      
    </>
  )
}

export default Experience