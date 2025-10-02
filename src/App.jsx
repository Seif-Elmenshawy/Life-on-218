import React from 'react'
import Home from './Pages/Home/Home'
import Articles from './Pages/articles/Articles'
import About from './Pages/About/About'
import { Router, Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path="/articles" element={<Articles/>}/>
      <Route path="/about" element={<About/>} />
    </Routes>
    </>
  )
}

export default App