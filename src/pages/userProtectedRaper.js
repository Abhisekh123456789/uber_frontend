import { use, useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { UserDataContext } from "../context/userContext"

const UserProtectedRaper = ({ children }) => {
  const token=localStorage.getItem('token')

    const navigate = useNavigate()
    useEffect(() => {
        if (!token) {
            navigate('/login')
        }
    }, [token])
   
    return (
        <>
            {children}
        </>
    )
}

export default UserProtectedRaper
