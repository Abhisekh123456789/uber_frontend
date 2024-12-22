import React, { useEffect, useState } from 'react'
import uberLogo from "../assets/png-transparent-uber-hd-logo-thumbnail.png"
import { Link } from 'react-router-dom'

const UserLogin = () => {
  const [userLoginDetails, setUserLoginDetails] = useState({})
  useEffect(()=>{
 console.log(userLoginDetails,"userLoginDetails")
  },[userLoginDetails])
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
          onChange={(e)=>{
            setUserLoginDetails((prev)=>({
              ...prev,
              password:e.target.value
            }))
          }}

          placeholder='Password'
        />
        <button
          className='bg-[#111] mb-7 text-white rounded px-2 py-2  font-semibold border w-full text-lg placeholder:text-sm'

        >Login</button>
        <p className='text-center'> New here?
          <Link className='text-blue-600' to="/user-signUp"> Create a New Account</Link>
        </p>
      </div>
      <div>
        <Link to="/captain-login"  className='bg-[#10b461] flex items-center justify-center  mb-7 text-white rounded px-2 py-2 font-semibold border w-full text-lg'>
          Sign In As Captain
        </Link>

      </div>


    </div>
  )
}

export default UserLogin
