import React, { useState, useEffect } from 'react'
import axios from 'axios'

const About = ({ about, token }) => {

  const [ isLogged, setIsLogged ] = useState(false)
  const [ onChange, setOnChange ] = useState(false)

  const [ newAbout, setNewAbout ] = useState('')  

  useEffect(() => {
    if(token !== null){
      setIsLogged(true)
    } else {
      setIsLogged(false)
    }
  },[])

  const handleSetNewAbout = () => {
    axios.patch('http://localhost:3001/users/' + token, {
      about: newAbout
    }).then(() => {
      window.location.reload()
    })
  }

  return (
    <div className='flex flex-col items-center'>
      {onChange == true ? (
        <>
          <textarea cols="70" rows="8" defaultValue={about} onChange={(e) => setNewAbout(e.target.value)} className='bg-black text-whitebg mt-12 text-2xl text-center font-semibold'></textarea>
        </>
      ) : (
        <p className='text-center mt-12 text-2xl text-whitebg'>{about}</p>
      ) }

      {isLogged && (
        <>
          {onChange == true ? (
            <button onClick={handleSetNewAbout} className='px-12 py-2 bg-secondary mt-12 rounded-full text-whitebg font-xl font-semibold'>Salvar</button>
          ) : (
            <button onClick={() => {
              setOnChange(!onChange)
              setNewAbout(about)
            }} className='px-12 py-2 bg-secondary mt-12 rounded-full text-whitebg font-xl font-semibold'>Editar</button>
          )}
        </>
      )}
    </div>
  )
}

export default About