import React from 'react';
import './index.css';
import Header from './Components/Header';
import Intro from './Components/Intro';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Contact';

export default function App() {
  return (
    <div>
      <Header />
      <div id="intro"><Intro /></div>
      <div id="about"><About /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div>
    </div>
  );
}