import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

const PrivatePage = ({children}) => {

  //  const token = useSelector((store) => store.authReducer.token)
  const token  = localStorage.getItem("token")
   const isAuth = useSelector((store) => store.authReducer.isAuth)
   const location  =useLocation()
  //  console.log("Token in private page =>",token,isAuth);
    if(!token){
      return <Navigate to={"/login"} replace state={{data:location.pathname}}/>
    }

  return children
}

export default PrivatePage