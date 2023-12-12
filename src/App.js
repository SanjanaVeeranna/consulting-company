import React from 'react';
import './style.css';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import  Project  from "../src/components/Project";
import  Services  from "../src/components/Services";
import { About } from "./components/About";
import  Client  from "./components/Client"
import ContactForm from '../src/components/ContactForm';
import Login from './components/Login';
import Footer from './components/Footer';


const App = () => {
  return (
  <>
  <BrowserRouter>
  <Navbar />
  <Routes>
   
    <Route path="/" element={<Home />} />
    <Route path="/project" element={<Project />} />
    <Route path="/services" element={<Services />} />
    <Route path="/about" element={<About />} />
    <Route path="/client" element={ <Client />} />
    <Route path="/contact" element={<ContactForm />} />
    <Route path="/login" element={<Login/>} />
    <Route path="/footer" element={<Footer/>} />
    
    </Routes>
    </BrowserRouter>
    </>
  

);
};

export default App;