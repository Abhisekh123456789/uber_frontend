import React, { useEffect, useState } from 'react'
import uberLogo from "../assets/png-transparent-uber-hd-logo-thumbnail.png"
import { Link } from 'react-router-dom'
const CaptainLogin = () => {
  const [captainLoginDetails, setCaptainLoginDetails] = useState({})

  return (
    <div className='p-7  h-screen flex flex-col justify-between'>
      <div>

        <img src={uberLogo} className='w-16 mb-10' />
        <h3 className='text-lg font-medium mb-2'>What's Your email</h3>
        <input type="text"
          placeholder='example@gmail.com'
          className='bg-[#eeeeee] w-full rounded px-2 py-2 text-lg placeholder:text-sm mb-7'
          onChange={(e) => {
            setCaptainLoginDetails((prev) => ({
              ...prev,
              email: e.target.value

            }))
          }}
        />
        <h3 className='text-lg font-medium mb-2'>Password</h3>
        <input type="password" className='w-full bg-[#eeeeee] rounded px-2 py-2 text-lg placeholder:text-sm mb-7' placeholder='password'
          onChange={(e) => {
            setCaptainLoginDetails((prev) => ({
              ...prev,
              password: e.target.value
            }))
          }}

        />
        <button className='w-full bg-black text-white rounded py-2 px-2 mb-7'>Login</button>
        <p className='text-center '>Want Join a fleet?  <Link className='text-blue-600' to="/captain-signup">Register As captain</Link> </p>
      </div>
      <div>
        <Link to="/user-login" className='flex justify-center items-center text-white bg-[#ff5e00] rounded px-2 py-2 w-full text-lg font-semibold'>Sign In As User</Link>
      </div>


    </div>
  )
}

export default CaptainLogin
