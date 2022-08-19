import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { motion } from "framer-motion"

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
    axios.patch('https://oxygenix-api.herokuapp.com/users/' + token, {
      about: newAbout
    }).then(() => {
      window.location.reload()
    })
  }

  return (
    <motion.div 
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className='flex flex-col items-center'>
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
            <button onClick={handleSetNewAbout} className='bg-primary text-white px-12 py-2 rounded-lg mt-12 hover:px-16 hover:bg-secondary transition-all duration-300'>Salvar</button>
          ) : (
            <button onClick={() => {
              setOnChange(!onChange)
              setNewAbout(about)
            }} className='bg-primary text-white px-12 py-2 rounded-lg mt-12 hover:px-16 hover:bg-secondary transition-all duration-300'>Editar</button>
          )}
        </>
      )}
    </motion.div>
  )
}

export default About