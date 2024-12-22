import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/home'
import UserLogin from './pages/userlogin'
import UserSignUp from './pages/userSignUp'
import CaptainSignUp from './pages/captainSignUp'
import CaptainLogin from './pages/captainLogin'
import { UserDataContext } from './context/userContext'

const App = () => {
  const userDetails=useContext(UserDataContext)
  console.log(userDetails,"userDetails")
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<UserLogin/>}/>
        <Route path="/user-signUp" element={<UserSignUp/>}/>
        <Route path="/captain-signup"element={<CaptainSignUp/>}/>
        <Route path="/user-login" element={<UserLogin/>}/>
        <Route path="/captain-login" element={<CaptainLogin/>}/>
      </Routes>
   
    </div>
  )
}

export default App
