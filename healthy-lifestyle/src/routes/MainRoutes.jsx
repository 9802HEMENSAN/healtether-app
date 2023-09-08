import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'
import Home from '../Pages/Home'
import AdminPanel from '../Pages/AdminPanel'
 

const MainRoutes = () => {

  return (
    <div> 
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/signup" element={<SignUp/>}></Route>
            <Route path="/admin" element={<AdminPanel/>}></Route>
        </Routes>
    </div>
  )
}

export default MainRoutes