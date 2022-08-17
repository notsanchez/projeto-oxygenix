import React, { useState } from 'react';
import axios from 'axios';

const Social = ({ social, token, user }) => {

  const [ isOpen, setIsOpen ] = useState(false)
  const [ socialTitle, setSocialTitle ] = useState('')
  const [ socialURL, setSocialURL ] = useState('')

  const handleNewSocial = () => {
    if(socialTitle && socialURL !== ''){
      axios.patch("https://oxygenix-api.herokuapp.com/users/" + token, {
        socials: [
          ...social,
          {
            id: socialTitle,
            url: socialURL
          }
        ]
      }).then(
        window.location.reload()
      )
    }
  }

  return (
    <>
      {social.length !== 0 ? (
        <div className='flex flex-col items-center justify-center'> 
          <h1 className='text-2xl font-semibold text-whitebg mt-8'>Sinta-se a vontade para <span className='text-secondary'>entrar em contato.</span></h1>
          
          {token == user ? (
            <>
              {social.map((socials, i) => (
                <div key={i}>
                  <a className='gap-6 w-[500px] h-[60px] bg-blackbg rounded-lg mt-6 flex items-center justify-center text-whitebg font-bold'>
                    <h1>{socials.id} <button onClick={() => {
                      social.splice(i, 1)
                      axios.patch('https://oxygenix-api.herokuapp.com/users/' + token, {
                        socials: [
                          ...social
                        ]
                      })
                      window.location.reload()
                    }} className='text-red-500 font-bold'>X</button></h1>
                  </a>
                </div>
              ))}
            </>
          ) : (
            <>
              {social.map((socials) => (
                <a href={socials.url} target="_blank" rel="noopener noreferrer" className='w-[500px] h-[60px] bg-blackbg rounded-lg mt-6 flex items-center justify-center text-whitebg font-bold'>
                  <h1>{socials.id}</h1>
                </a>
              ))}
            </>
          )}

          

          {token == user && (
            <div className='flex flex-col items-center justify-center'>
              {isOpen && isOpen ? (
                <>
                  <div className='flex flex-col gap-4 text-center items-center justify-center w-[500px] h-[90px] bg-blackbg mt-6 rounded-lg'>
                    <input onChange={(e) => setSocialTitle(e.target.value)} type="text" placeholder='Titulo' className='text-center bg-blackbg font-semibold text-whitebg' />
                    <input onChange={(e) => setSocialURL(e.target.value)} type="text" placeholder='URL' className='text-center bg-blackbg font-semibold text-whitebg' />
                  </div>

                  <div className='flex gap-2'>
                    <button onClick={handleNewSocial} className='bg-primary text-white px-12 py-2 rounded-lg mt-12 hover:px-16 hover:bg-secondary transition-all duration-300'>Concluir</button>
                    <button onClick={() => setIsOpen(!isOpen)} className='bg-red-500 text-white px-6 py-2 rounded-lg mt-12 hover:px-8 hover:bg-red-400 transition-all duration-300'>X</button>
                  </div>
                </>
              ) : (
                <button onClick={() => setIsOpen(true)} className='bg-primary text-white px-12 py-2 rounded-lg mt-12 hover:px-16 hover:bg-secondary transition-all duration-300'>Adicionar novo</button>
              )}
            </div>
          )}
          
      </div>
      ) : (
        <>
          <div className='h-[100px] flex items-center justify-center'>
            {isOpen && isOpen ? (
              <></>
            ) : (
              <h1 className='text-2xl font-semibold text-whitebg'>Nenhuma rede social adicionada</h1>
            )}
            
          </div>

          <div>
          {token == user && (
            <div className='flex flex-col items-center justify-center'>
              {isOpen && isOpen ? (
                  <>
                    <div className='flex flex-col gap-4 text-center items-center justify-center w-[500px] h-[90px] bg-blackbg mt-6 rounded-lg'>
                      <input onChange={(e) => setSocialTitle(e.target.value)} type="text" placeholder='Titulo' className='text-center bg-blackbg font-semibold text-whitebg' />
                      <input onChange={(e) => setSocialURL(e.target.value)} type="text" placeholder='URL' className='text-center bg-blackbg font-semibold text-whitebg' />
                    </div>

                    <div className='flex gap-2'>
                      <button onClick={handleNewSocial} className='bg-primary text-white px-12 py-2 rounded-lg mt-12 hover:px-16 hover:bg-secondary transition-all duration-300'>Concluir</button>
                      <button onClick={() => setIsOpen(!isOpen)} className='bg-red-500 text-white px-6 py-2 rounded-lg mt-12 hover:px-8 hover:bg-red-400 transition-all duration-300'>X</button>
                    </div>
                  </>
                ) : (
                  <button onClick={() => setIsOpen(true)} className='bg-primary text-white px-12 py-2 rounded-lg mt-12 hover:px-16 hover:bg-secondary transition-all duration-300'>Adicionar novo</button>
                )}
              </div>
            )}
          </div>
        </>
      )}
      
    </>
  )
}

export default Social