import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import Start from './pages/start'
import UserLogin from './pages/userlogin'
import UserSignUp from './pages/userSignUp'
import CaptainSignUp from './pages/captainSignUp'
import CaptainLogin from './pages/captainLogin'
import { UserDataContext } from './context/userContext'
import Home from './pages/home'
import UserProtectedRaper from './pages/userProtectedRaper'
import UserLogout from './pages/userlogout'

const App = () => {
  const userDetails = useContext(UserDataContext)
  console.log(userDetails, "userDetails")
  return (
    <div>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path="/user-signUp" element={<UserSignUp />} />
        <Route path="/captain-signup" element={<CaptainSignUp />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/home" element={
         <UserProtectedRaper>
           <Home/>
         </UserProtectedRaper>
          } />
      <Route path="/user-logout" element={<UserLogout/>}></Route>
      </Routes>
      <Toaster
  position="top-center"
  reverseOrder={false}
/>


    </div>
  )
}

export default App
