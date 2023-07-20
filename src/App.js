import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import About from './Components/About';
import Courses from './Components/Courses';
import { useState } from 'react';











function App() {

  





  return (

    <>

    <Router>
        
        <Navbar />
          <Routes>
            <Route exact path ="/" element={<Home/>}/>
            <Route exact path ="/Courses" element={<Courses/>}/>
            <Route exact path ="/about" element={<About/>}/>
          </Routes>
          <Footer/>
          
    </Router>
    </>
  );
}

export default App;
