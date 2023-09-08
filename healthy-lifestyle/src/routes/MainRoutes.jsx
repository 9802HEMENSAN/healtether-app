import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainBody from '../components/MainBody'

const MainRoutes = () => {
    
  return (
    <div> 
        <Routes>
            <Route path="/" element={<MainBody/>}></Route>
        </Routes>
    </div>
  )
}

export default MainRoutes