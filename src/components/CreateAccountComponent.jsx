import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const CreateAccountComponent = () => {

  const [ modalPage, setModalPage ] = useState(1)
  const [ career, setCareer ] = useState(2)

  const [ userId, setUserId ] = useState('')
  const [ name, setName ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ github, setGithub ] = useState('')
  const [ behance, setBehance ] = useState('')

  const handleAddUser = () => {
    axios.post("https://oxygenix-api.herokuapp.com/users/", {
      id: userId,
      password: password,
      name: name,
      picture: "https://icon-library.com/images/default-user-icon/default-user-icon-8.jpg",
      background: "",
      age: "",
      description: "",
      about: "",
      github: github,
      behance: behance,
      projects: [],
      experience: [],
      socials: []
    }).then(() => {
      localStorage.setItem("token", userId)
      window.location.replace("/");
    })
  }

  useEffect(() => {
    const tempToken = localStorage.getItem("tempToken")
    if(tempToken !== ''){
      setUserId(tempToken)
      localStorage.clear()
    }
  },[])

  return (
    <div className='w-[900px] h-[600px] bg-blackbg rounded-2xl flex flex-col items-start px-24 justify-center gap-6 drop-shadow-xl'>

      {modalPage == 1 ? (
        <>
          <div className='flex flex-col'>
              <h1 className='text-whitebg text-4xl font-bold'>Criar sua conta</h1>
              <h1 className='text-whitebg text-lg font-semibold text-opacity-40'>Escolha o username do seu link. Você não podera mudar depois</h1>
          </div>

          <div className='flex flex-col gap-4 items-start'>
              <input value={userId} onChange={(e) => setUserId(e.target.value)} type="text" placeholder='Oxygenix.cf/seunome' className='px-12 py-2 bg-whitebg rounded-md text-blackbg font-semibold' />
              <input onChange={(e) => setName(e.target.value)} type="text" placeholder='Seu nome' className='px-12 py-2 bg-whitebg rounded-md text-blackbg font-semibold' />
              <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='sua senha' className='px-12 py-2 bg-whitebg rounded-md text-blackbg font-semibold' />
          </div>

          <div className='flex flex-col gap-6 items-start'>
              <button onClick={() => {
                if(userId && name && password !== ''){
                  setModalPage(2)
                }
              }} className='px-12 py-2 bg-primary rounded-full text-white font-semibold'>Seguinte > </button>
              <Link to="/login" className='px-12 py-2 text-[12px] bg-primary bg-opacity-40 rounded-full text-white font-semibold'>Entrar na sua conta</Link>
          </div>
        </>
      ): (
        <>
          <div className='flex flex-col'>
              <h1 className='text-whitebg text-xl font-bold opacity-80'>Olá, {name}</h1>
              
              <h1 className='text-whitebg text-4xl font-bold'>Você é</h1>
          </div>

          <div className='flex flex-col gap-4 items-start'>
              <div className='flex'>
                <button onClick={() => {
                  setCareer(1)
                  setGithub('')
                  setBehance('')
                }} className={`px-8 py-2 ${career == 1 ? ('bg-secondary') : ("bg-primary opacity-50")} text-whitebg font-semibold rounded-l-lg transition-all duration-300`}>Designer</button>
                <button onClick={() => {
                  setCareer(2)
                  setGithub('')
                  setBehance('')
                }} className={`px-8 py-2 ${career == 2 ? ('bg-secondary') : ("bg-primary opacity-50")} text-whitebg font-semibold rounded-r-lg transition-all duration-300`}>Desenvolvedor</button>
              </div>

              {career !== null ? (
                <>
                  <div className='flex'>
                    <input type="text" value={career == 2 ? ('GitHub.com/') : ('Behance.net/')} disabled className='bg-secondaryblack text-whitebg text-end w-[150px] rounded-l-lg px-2 font-semibold opacity-70' />
                    <input 
                    value={github || behance}
                    onChange={(e) => {
                      career == 2 ? setGithub(e.target.value) : setBehance(e.target.value)
                    }} type="text" className='w-[150px] px-2 py-2 bg-whitebg text-blackbg bg-opacity-70 rounded-r-lg font-semibold focus:outline-none' />
                  </div>
                </>
              ) : (<></>)}
              
          </div>

          <div className='flex flex-col gap-6 items-start'>
              <button onClick={handleAddUser} className='px-12 py-2 bg-primary rounded-full text-white font-semibold hover:px-20 transition-all duration-300'>Finalizar cadastro </button>
              <Link to="/login" className='px-12 py-2 text-[12px] bg-primary bg-opacity-40 rounded-full text-white font-semibold'>Entrar na sua conta</Link>
          </div>
        </>
      )}
    

    </div>
  )
}

export default CreateAccountComponent