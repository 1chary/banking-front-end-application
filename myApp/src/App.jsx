import React from 'react'
import "./App.css"
import {Route,Routes} from "react-router-dom"
import Login from './components/LogIn'
import Home from './components/Home'

const App = () => {
  return (
    <Routes>
      <Route exact path = "/login" element = {<Login/>}/>
      <Route path = "/" element = {<Home/>} />
    </Routes>
  )
}

export default App