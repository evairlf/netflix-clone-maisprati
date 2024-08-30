import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import { useState } from 'react'
import GlobalStyle from './components/GlobalStyle';
import Home from './pages/Home/Home';
import SearchPage from './pages/SearchPage/SearchPage';

function App() {
  return (
    <>
      <GlobalStyle />
      <Home/>
    </>
  )
}

export default App
