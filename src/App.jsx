import React from 'react'
import CreateAccount from './pages/CreateAccount'
import Home from './pages/Home'
import LoginAccount from './pages/LoginAccount'
import Profile from './pages/Profile'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className='bg-primary w-screen h-screen'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<CreateAccount />} />
          <Route path='/login' element={<LoginAccount />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App