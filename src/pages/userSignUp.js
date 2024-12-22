import React, { useContext, useEffect, useState } from 'react'
import uberLogo from "../assets/png-transparent-uber-hd-logo-thumbnail.png"
import { data, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { apiurl } from '../constant/apiurl'
import { UserDataContext } from '../context/userContext'
import { CallApi } from '../constant/callApi'
import toast from 'react-hot-toast'
const UserSignUp = () => {
  const [userSignUpDetails, SetUserSignUpDetails] = useState({})
  const { user, setUser } = useContext(UserDataContext)
  const navigate = useNavigate()


  const validation = () => {
    if (!userSignUpDetails.fullName?.firstName) {
      toast.error("Please enter first name", { duration: 2000, })
      return false

    }
    if (!userSignUpDetails?.email) {
      toast.error("Please enter email", { duration: 2000, })
      return false
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(userSignUpDetails.email)) {
      toast.error("Please enter a valid email", { duration: 2000, })
      return false
    }
    if (!userSignUpDetails.password) {
      toast.error("Please enter password", { duration: 2000, })
      return false
    }
    console.log(!(userSignUpDetails.password.length > 6), "userSignUpDetails?.password.length")
    if (!(userSignUpDetails.password.length > 6)) {
    console.log(userSignUpDetails?.password.length, "userSignUpDetails?.password.length if block")

      toast.error("Password must be at least 6 characters", { duration: 2000, })
      return false
    }
    return true

  }

  const handelSubmit = async () => {
    try {
      const error = validation()
      if(!error)
      {
      return false
      }
      const config = {
        method: 'post',
        url: '/registerUser',
        data: userSignUpDetails,
      }


      const response = await CallApi(config)
      console.log(response, "response")
      if (response.code == 200) {
        setUser(response?.data?.user)
        localStorage.setItem('token', JSON.stringify(response.data.token))
        toast.success('Register successfully!', { duration: 2000, })
        navigate('/home')
      }
      else if(response?.code==401){
        toast.error(response?.message ,{duration: 2000,})
      }
      
      else {

        response?.errors.forEach(item => {  
          toast.error(item.msg ,{duration: 2000,})
        });
       
      }
    } catch (err) {
      console.log(err, "err")
    } finally {
      // console.log(userSignUpDetails)
      // resetFiled()
    }
  }

  const resetFiled = () => {
    SetUserSignUpDetails({})

  }

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
        <input className='px-2 py-2  bg-[#efefef] w-full  placeholder:text-sm  mb-5 ' type='password' placeholder='password'
          onChange={(e) => {
            SetUserSignUpDetails((prev) => ({
              ...prev,
              password: e.target.value

            }))
          }}
        />
        <button className='rounded w-full bg-black text-white px-2 py-2 text-lg font-semibold' onClick={() => { handelSubmit() }}>
          Create Account
        </button>
        <p className='text-center mt-3'>Already Have You Account? <Link className='text-blue-600' to="/user-login">Login Here</Link></p>
      </div>


      <div className='text-sm leading-tight'>
        <p>By registering, you agree to Uber's Terms of Service and Privacy Policy. Your personal data will be used to provide and improve our services in accordance with applicable laws.</p>
      </div>
    </div>
  )
}

export default UserSignUp
