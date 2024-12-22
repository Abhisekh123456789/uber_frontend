import React from 'react'
import  UberLogo from "../assets/png-transparent-uber-hd-logo-thumbnail.png"
import { Link } from 'react-router-dom'

const CaptainSignUp = () => {
  return (
    <div className='p-8 flex flex-col justify-between h-screen'>
      <div>

      <img src={UberLogo} className='w-16 mb-10'/>
      <div className='flex gap-2 mb-5'>
        <input type="text" className='w-1/2 rounded px-2 py-2 bg-[#efefef] placeholder:text-sm' placeholder='First Name'  />
        <input type="text" className='w-1/2 rounded px-2 py-2 bg-[#efefef] placeholder:text-sm' placeholder='Last Name' />
      </div>
      <h3 className='text-lg font-semibold'>Enter Email</h3>
        <input type="text"  className='w-full rounded px-2 py-2 bg-[#efefef] placeholder:text-sm mb-5' placeholder='Email'  />
        <h3 className='text-lg font-semibold'>Password</h3>
       <input type="text" className='w-full rounded px-2 py-2 bg-[#efefef] placeholder:text-sm mb-5'  placeholder='Password'/>
       <button className='rounded bg-black text-white px-2 py-2 text-center w-full text-lg '>Register</button>
       <p className='text-center mt-2'>
       Already Have You Account? <Link className='text-blue-800' to="/captain-login">Login Here</Link>
        </p>
      </div>
      <div className='text-sm leading-tight'>
        <p>By registering, you agree to Uber's Terms of Service and Privacy Policy. Your personal data will be used to provide and improve our services in accordance with applicable laws.</p>
      </div>
    </div>
    
  )
}

export default CaptainSignUp
