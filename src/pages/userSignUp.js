import React, { useEffect, useState } from 'react'
import uberLogo from "../assets/png-transparent-uber-hd-logo-thumbnail.png"
import { Link } from 'react-router-dom'

const UserSignUp = () => {
  const [userSignUpDetails, SetUserSignUpDetails] = useState({})

  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
      <div>
        <img src={uberLogo} className='w-16 mb-10' />
        <div className='flex gap-2 mb-4'>
          <input className='w-1/2 px-2 py-2 rounded bg-[#efefef] text-base placeholder:text-sm' placeholder='First Name'
            onChange={(e) => {
              SetUserSignUpDetails((prev) => ({
                ...prev,
                fullName: {
                  ...prev.fullName,
                  firstName: e.target.value,
                },
              }));
            }}

          />
          <input className="w-1/2  px-2 py-2 rounded  bg-[#efefef]  placeholder:text-sm " placeholder='Last Name'
            onChange={(e) => {
              SetUserSignUpDetails((prev) => ({
                ...prev,
                fullName: {
                  ...prev.fullName,
                  lastName: e.target.value
                }

              }))
            }}
          />

        </div>
        <h3 className='font-medium text-lg'>What's Your Email</h3>
        <input className='px-2 py-2 bg-[#efefef] w-full  placeholder:text-sm  mb-5 ' placeholder='example@gmail.com'
          onChange={(e) => {
            SetUserSignUpDetails((prev) => ({
              ...prev,
              email: e.target.value
            }))
          }}
        />
        <h3 className='font-medium text-lg'>Enter Password</h3>
        <input className='px-2 py-2  bg-[#efefef] w-full  placeholder:text-sm  mb-5 ' placeholder='password'
          onChange={(e) => {
            SetUserSignUpDetails((prev) => ({
              ...prev,
              password: e.target.value

            }))
          }}
        />
        <button className='rounded w-full bg-black text-white px-2 py-2 text-lg font-semibold'>Register</button>
        <p className='text-center mt-3'>Already Have You Account? <Link className='text-blue-600' to="/user-login">Login Here</Link></p>
      </div>


      <div className='text-sm leading-tight'>
        <p>By registering, you agree to Uber's Terms of Service and Privacy Policy. Your personal data will be used to provide and improve our services in accordance with applicable laws.</p>
      </div>
    </div>
  )
}

export default UserSignUp
