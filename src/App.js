import React, { useState } from 'react'
import Navbar1 from './Component/Navbar1';
import TeskForm from './Component/TeskForm';
import About from './Component/About';
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light')

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light')
      document.body.style.backgroundColor = 'white';
    } else {
      setMode('dark')
      document.body.style.backgroundColor = '#474e51';
    }
  }

 
  return (
    <Router>  
      <Navbar1 mode={mode} toggleMode={toggleMode} /> 
        <Routes>
          <Route path="/" element={<TeskForm mode={mode} />} />
          <Route path="/about" element={<About mode={mode} />} />
        </Routes>
    </Router> 
  )
}


export default App;
