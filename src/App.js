import React from 'react';
import './index.css';
import Header from './Components/Header';
import Intro from './Components/Intro';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Contact';
import { Route, Routes, BrowserRouter } from 'react-router-dom';


export default function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Header />} />
            <Route path='/intro' element={<Intro />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}


