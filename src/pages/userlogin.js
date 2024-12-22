import React, { useContext, useEffect, useState } from 'react'
import uberLogo from "../assets/png-transparent-uber-hd-logo-thumbnail.png"
import { Link, useNavigate } from 'react-router-dom'

import { UserDataContext } from '../context/userContext'
import { CallApi } from '../constant/callApi'
import toast from 'react-hot-toast';

const UserLogin = () => {
  const [userLoginDetails, setUserLoginDetails] = useState({})

  const navigate = useNavigate()

  const validation = () => {
    if (!userLoginDetails.email) {
      toast.error("Please enter email", { duration: 2000, })
      return false
    }
    
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(userLoginDetails.email)) {
      toast.error("Please enter a valid email", { duration: 2000, })
      return false
    }
    if (!userLoginDetails.password) {
      toast.error("Please enter password", { duration: 2000, })
      return false
    }
    if(!(userLoginDetails.password.length>6)){
      toast.error("Password must be at least 6 characters", { duration: 2000, })
      return false
    }
    return true
  }
  const { user, setUser } = useContext(UserDataContext)

  const handelLogin = async () => {
    try {
      const error = validation()
      if (!error) {
        return false
      }
      const config = {
        method: 'post',
        data: userLoginDetails,
        url: '/loginUser'
      }
      const response = await CallApi(config)
      console.log(response, "response")
      if (response?.code == 200) {
        toast.success('Login success fully!', { duration: 2000, })
        setUser(response?.data?.user)
        localStorage.setItem('token', JSON.stringify(response?.data?.token))

        navigate('/home')
      }
      else if(response?.code==401){
        toast.error(response?.message ,{duration: 2000,})
      }
      else{
        response?.errors.forEach(item => {  
          toast.error(item.msg ,{duration: 2000,})
        });
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='p-7  h-screen flex flex-col justify-between'>
      <div>

        <img alt="Uber Logo" className="w-16 mb-10" src={uberLogo} />


        <h3 className='text-lg mb-2 font-medium'>What's Your email</h3>
        <input
          type="text"
          placeholder='email@example.com'
          onChange={(e) => {
            setUserLoginDetails((prev) => ({
              ...prev,
              email: e.target.value,
            }));
          }}

          className='bg-[#eeeeee] mb-7 rounded px-2 py-2  border w-full text-lg placeholder:text-sm'
        />
        <h3 className='text-lg mb-2  font-medium'>Password</h3>
        <input type="password"
          className='bg-[#eeeeee] mb-7 rounded px-2 py-2  border w-full text-lg placeholder:text-sm'
          onChange={(e) => {
            setUserLoginDetails((prev) => ({
              ...prev,
              password: e.target.value
            }))
          }}

          placeholder='Password'
        />
        <button
          className='bg-[#111] mb-7 text-white rounded px-2 py-2  font-semibold border w-full text-lg placeholder:text-sm'
          onClick={() => { handelLogin() }}

        >Login</button>
        <p className='text-center'> New here?
          <Link className='text-blue-600' to="/user-signUp"> Create a New Account</Link>
        </p>
      </div>
      <div>
        <Link to="/captain-login" className='bg-[#10b461] flex items-center justify-center  mb-7 text-white rounded px-2 py-2 font-semibold border w-full text-lg'>
          Sign In As Captain
        </Link>

      </div>


    </div>
  )
}

export default UserLogin
