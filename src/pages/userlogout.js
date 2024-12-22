import React, { useEffect } from 'react'
import { CallApi } from '../constant/callApi'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';

const UserLogout = () => {

const  navigate=useNavigate()
    const handelUserLogOut = async () => {
        try {
            const config = {
                method:'post',
                url: "/logoutUser"
            }
            const response = await CallApi(config)
            if (response?.code == 200) {
                localStorage.removeItem('token')
                navigate('/user-login')
                toast.success('Logout success fully!',{duration: 2000,})
            }
            else{
                toast.error("something went To wrong!" ,{duration: 2000,})
            }



        } catch (error) {
            console.log(error, "error")
        }


    }

    useEffect(() => {
        handelUserLogOut()

    }, [])
    return (
        <>
            UserLogout
        </>
    )
}

export default UserLogout
