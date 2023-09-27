import React,{ useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
export default function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element ={<Home/>}/>
      </Routes>
    </div>
  )
}