import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';
import Errorpage from './components/Errorpage';

import './App.css';


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route Route exact path='/' element={<Home/>}></Route>
        <Route path="/about" element= {<About />}></Route>
        <Route path="/contact" element= {<Contact />}></Route>
        <Route path="/login" element= {<Login />}></Route>
        <Route path="/register" element= {<Register />}></Route>
        <Route path="*" element={<Errorpage/>}></Route>
      </Routes>

    </div>
  )
}

export default App
