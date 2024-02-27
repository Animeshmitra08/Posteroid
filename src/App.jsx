import { useState } from 'react'
import './App.css'
import Landing from './Pages/Landing'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Details from './Pages/Details'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='details_id' element={<Details/>}/>
      </Routes>
    </>
  )
}

export default App
