import React, { useEffect, useState } from 'react'
import "./index.css"
import Cookies from "js-cookie"
import { Navigate, useNavigate } from 'react-router-dom'

const Login = () => {
  const [username,setUsername] = useState("")


  const checkTheUserData = async (e) => {
    e.preventDefault();
    const fetchData = await fetch(`https://banking-backend-application.onrender.com/userdata/${username}`)
    const responseData = await fetchData.json()
    Cookies.set("jwtToken", responseData.jwtToken, {expires:30} )
  }
 


  return (
    <form className='log-in-container' onSubmit={checkTheUserData}>
      <input type="text" className="name-input-box" onChange={(event) => setUsername(event.target.value)} value = {username}/>
      <button className="submit-button" type = "submit">Submit</button>
    </form>
  )
}

export default Login