import React, { useState } from 'react'
import About from './About'
import Experience from './Experience'
import Projects from './Projects'
import { BsGithub } from "react-icons/bs";
import Social from './Social';
import { Link } from 'react-router-dom'

const ProfileComponent = () => {

    const [ show, setShow ] = useState(1)

  return (
    <div className='flex h-max flex-col bg-black items-center'>
        <div className='max-w-4xl flex flex-col items-center'>
            <div className='w-screen h-[250px] bg-[url("https://i.pinimg.com/originals/dd/f1/48/ddf1482dcd4dc5fc267cfa0a6c0cd720.gif")] bg-cover bg-center flex items-center justify-center'>
                <img src="https://i.pinimg.com/originals/0e/17/0d/0e170d544b6c1f4de93563b2d77a5dad.gif" className='w-40 h-40 mt-56 rounded-full object-cover border-2 border-whitebg' />
            </div>
            
            <div className='flex flex-col items-center justify-center mt-20'>
                <div className='flex gap-2 mb-2'>
                    <button className='h-[50px] w-[100px] hover:h-[60px] hover:w-[110px] border-2 border-transparent hover:border-whitebg bg-secondaryblack rounded-full text-whitebg transition-all duration-300'>Log out</button>
                    <button className='h-[50px] w-[120px] hover:h-[60px] hover:w-[130px] border-2 border-transparent hover:border-blackbg bg-whitebg rounded-lg text-blackbg transition-all duration-300'>Editar perfil</button>
                </div>
                <h1 className='text-4xl font-bold text-whitebg'>Matheus Sanchez</h1>
                <h1 className='italic text-whitebg mt-2'>JSX | NodeJS developer</h1>

                <button className='mt-4 w-[150px] h-[30px] hover:w-[180px] gap-2 border-2 border-whitebg bg-blackbg rounded-lg flex items-center justify-center text-whitebg font-semibold transition-all duration-300'>
                    <BsGithub />
                    <h1>GitHub</h1>
                </button>
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
                <About />
            )}
            {show === 2 && (
                <Projects />
            )}
            {show === 3 && (
                <Experience />
            )}
            {show === 4 && (
                <Social />
            )}

            <div className='relative mt-52 mb-6 text-whitebg text-[12px]'>
                <p>Feito com 🖤 pela <Link to="/" className='text-secondary'>Oxygenix</Link></p>
            </div>
        </div>
    </div>
  )
}

export default ProfileComponent