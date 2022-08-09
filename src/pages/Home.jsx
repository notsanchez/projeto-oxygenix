import React from 'react'
import HomeComponents from '../components/HomeComponents'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className='w-screen h-screen bg-primary bg-[url("https://images4.alphacoders.com/125/1254590.jpg")] bg-cover bg-center'>
        <Navbar />
        <HomeComponents />
    </div>
  )
}

export default Home