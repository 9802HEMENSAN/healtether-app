import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'
import Home from '../Pages/Home'

const MainRoutes = () => {

  return (
    <div> 
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/signup" element={<SignUp/>}></Route>
        </Routes>
    </div>
  )
}

export default MainRoutes