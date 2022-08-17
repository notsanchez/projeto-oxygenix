import React from 'react'
import CreateAccount from './pages/CreateAccount'
import Home from './pages/Home'
import LoginAccount from './pages/LoginAccount'
import Profile from './pages/Profile'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

const App = () => {

  const token = localStorage.getItem("token")

  return (
    <Router>
      <div className='bg-black w-screen h-screen'>
        <Routes>
          {token == null ? (
              <>
                <Route path='/' element={<Home />} />
                <Route path='/create' element={<CreateAccount />} />
                <Route path='/login' element={<LoginAccount />} />
                <Route path='/:id' element={<Profile />} />
              </>
          ) : (
            <>
              <Route path='/:id' element={<Profile />} />
              <Route
                path="/"
                element={<Navigate to={`/` + token} replace />}
              />
            </>
          )}
        </Routes>
      </div>
    </Router>
  )
}

export default App