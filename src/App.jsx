import React from 'react';
import "./styles/App.css";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import Blog from './Components/Blog';
import About from './Components/About';
import Contact from './Components/Contact';
import Header from './Components/Header';

export default function App() {
  return (
    <Router>
      <Header/>
      <Routes>
          <Route path='/' element = {<Home/>} />
          <Route path='/blog' element = {<Blog/>} />
          <Route path='/about' element = {<About/>} />
          <Route path='/contact' element = {<Contact/>} />
      </Routes>      
    </Router>
  );
}
