import React from 'react';
// import './App.css';
import { Routes,Route } from 'react-router';
import Portfolio from './Components/Portfolio';
import Dashboard from './Components/DashBoard';
import About from './Components/Aboutme';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
// import ReactForm from './Components/ReactForm';

function App() {

  return (
    <div>
      <Routes>

        <Route path="/" element={<Dashboard />} />
        <Route path="portfolio/:id" element={<Portfolio />} />
        <Route path="about me" element={<About/>}/>
        
      </Routes>
    </div>
  );
}

export default App;

