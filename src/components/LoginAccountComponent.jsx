import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const LoginAccountComponent = () => {

    const [ user, setUser ] = useState('')
    const [ pass, setPass] = useState('')

    const [ error, setError ] = useState(false)

    const handleSubmitLogin = () => {
      axios.get('http://localhost:8000/users/' + user).then(res => {
        if(res.data.password == pass){
          setError(false)
          localStorage.setItem("token", res.data.id)
          window.location.replace("/");
        }
      }).catch(() => {
        setError(true)
      })
    }

  return (
    <div className='w-[900px] h-[600px] bg-blackbg rounded-2xl flex flex-col items-start px-24 justify-center gap-6 drop-shadow-xl'>

      <div className='flex flex-col'>
          <h1 className='text-whitebg text-4xl font-bold'>Entrar na sua conta</h1>
      </div>
      {error == true ? (
        <div className='w-[320px] h-8 bg-red-500 rounded-full bg-opacity-60 flex items-center text-white justify-center'>
          <h1>Credenciais incorretas</h1>
        </div>
      ) : <></>}
    
    <div className='flex flex-col gap-4 items-start'>
        <input 
          onChange={(e) => setUser(e.target.value)} 
          type="text" 
          placeholder='Oxygenix.tk/seunome' 
          className='px-12 py-2 bg-whitebg rounded-md text-blackbg font-semibold'   
        />
        <input 
          onChange={(e) => setPass(e.target.value)} 
          type="password" 
          placeholder='sua senha' 
          className='px-12 py-2 bg-whitebg rounded-md text-blackbg font-semibold' 
        />
      </div>

      <div className='flex flex-col gap-6 items-start'>
          <button className='px-12 py-2 bg-primary rounded-full text-white font-semibold' onClick={handleSubmitLogin}>Entrar</button>
          <Link to="/create" className='px-12 py-2 text-[12px] bg-primary bg-opacity-40 rounded-full text-white font-semibold'>Criar sua conta</Link>
      </div>

    </div>
  )
}

export default LoginAccountComponent