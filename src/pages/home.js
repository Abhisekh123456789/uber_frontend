import React from 'react'

import uberLogo  from "../assets/png-transparent-uber-hd-logo-thumbnail.png"
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
       <div
      className="bg-cover bg-center bg-[url('https://images.pexels.com/photos/14436899/pexels-photo-14436899.jpeg')] h-screen w-full pt-5 flex flex-col justify-between"
    >
      <img alt="Uber Logo" className="w-16 ml-8" src={uberLogo} />

      <div className="bg-white py-4 pb-7 px-4">
        <h2 className="text-3xl font-bold">Get Started With Uber</h2>
        <Link className="w-full flex items-center justify-center bg-black text-white py-3 rounded mt-4" to="/user-login">
          Continue
        </Link>
      </div>
    </div>
    </div>
  )
}

export default Home
