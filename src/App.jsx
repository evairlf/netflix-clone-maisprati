import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import "./global.css"; 
import Home from './pages/Home/Home';
import Login from './pages/Login/Login'

function App() {
  return (
    <>
      
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
