import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import { useState } from 'react'
import GlobalStyle from './components/GlobalStyle';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login'

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
