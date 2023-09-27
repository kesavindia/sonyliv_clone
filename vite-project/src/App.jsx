import React,{ useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { AuthContextProvider } from './context/AuthContext'
export default function App() {
  return (
    <div>
      <AuthContextProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element ={<Home/>}/>
      </Routes>
      </AuthContextProvider>
    </div>
  )
}