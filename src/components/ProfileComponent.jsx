import React, { useEffect, useState } from 'react'
import About from './About'
import Experience from './Experience'
import Projects from './Projects'
import { BsGithub } from "react-icons/bs";
import Social from './Social';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useParams } from "react-router-dom";

const ProfileComponent = () => {

    const [ show, setShow ] = useState(1)
    const [ data, setData ] = useState('')
    const [ error, setError ] = useState(true)

    const user = useParams()
    const token = localStorage.getItem("token")

    useEffect(() => {
        axios.get('http://localhost:3001/users/' + user.id).then(res => {
            setError(false)
            setData(res.data)
        }).catch(() => {
            setError(true)
        })
    },[])

    const handleLogOut = () => {
        localStorage.clear()
    }

  return (
    <div className='flex h-max flex-col bg-black items-center'>
        {error ? (
            <>
                <div className='w-screen h-screen text-white flex items-center justify-center'>
                    <h1>Pagina nao encontrada</h1>
                </div>
            </>
        ) : (
            <div className='max-w-4xl flex flex-col items-center'>
                <div className='w-screen h-[250px] bg-[url("https://i.pinimg.com/originals/dd/f1/48/ddf1482dcd4dc5fc267cfa0a6c0cd720.gif")] bg-cover bg-center flex items-center justify-center'>
                    <img src={data.picture} className='h-[200px] mt-56 rounded-full object-cover border-2 border-whitebg' />
                </div>
                
                <div className='flex flex-col items-center justify-center mt-24'>
                    {token == user.id ? (
                        <div className='flex gap-2 mb-2'>
                            <Link to="/" onClick={handleLogOut} className='h-[50px] w-[100px] hover:w-[110px] border-2 border-transparent hover:border-whitebg bg-secondaryblack rounded-full text-whitebg transition-all duration-300 flex items-center justify-center'>Log out</Link>
                            <button className='h-[50px] w-[120px] hover:w-[130px] bg-whitebg rounded-lg text-blackbg transition-all duration-300'>Editar perfil</button>
                        </div>
                    ) : (
                        <></>
                    )}
                    
                    <h1 className='text-4xl font-bold text-whitebg'>{data.name}</h1>
                    <h1 className='italic text-whitebg mt-2'>{data.age}y</h1>
                    <h1 className='italic text-whitebg'>{data.description}</h1>

                        <a href={data.github} className='mt-4 w-[150px] h-[30px] hover:w-[180px] gap-2 border-2 border-whitebg bg-blackbg rounded-lg flex items-center justify-center text-whitebg font-semibold transition-all duration-300'>
                            <BsGithub />
                            <h1>GitHub</h1>
                        </a>
                </div>

                <div className='flex gap-6 mt-6'>
                    <button
                        onClick={() => setShow(1)}
                        className={`text-4xl font-semibold text-whitebg ${show === 1 && 'bg-secondary'} px-6 py-2 rounded-full transition-all duration-300`}>
                        Sobre
                    </button>
                    <button 
                        onClick={() => setShow(2)}
                        className={`text-4xl font-semibold text-whitebg ${show === 2 && 'bg-secondary'} px-6 py-2 rounded-full transition-all duration-300`}>
                        Projetos
                    </button>
                    <button 
                        onClick={() => setShow(3)}
                        className={`text-4xl font-semibold text-whitebg ${show === 3 && 'bg-secondary'} px-6 py-2 rounded-full transition-all duration-300`}>
                        Experiencia
                    </button>
                    <button 
                        onClick={() => setShow(4)}
                        className={`text-4xl font-semibold text-whitebg ${show === 4 && 'bg-secondary'} px-6 py-2 rounded-full transition-all duration-300`}>
                        Social
                    </button>
                </div>

                {show === 1 && (
                    <About about={data.about}/>
                )}
                {show === 2 && (
                    <Projects projects={data.projects} user={user.id} token={token}/>
                )}
                {show === 3 && (
                    <Experience experiences={data.experience}/>
                )}
                {show === 4 && (
                    <Social social={data.socials}/>
                )}

                <div className='relative mt-52 mb-6 text-whitebg text-[12px]'>
                    <p>Feito com 🖤 pela <Link to="/" className='text-secondary'>Oxygenix</Link></p>
                </div>
            </div>
        )}
        
    </div>
  )
}

export default ProfileComponent