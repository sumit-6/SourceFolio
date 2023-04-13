import React from 'react';
// import './App.css';
import { Routes,Route } from 'react-router';
import Portfolio from './Components/Portfolio';
import Previewbutton from './Components/Previewbutton';
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

        <Route path="/" element={<Previewbutton />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="about me" element={<About/>}/>
        <Route path="education" element={<Education/>} />
        <Route path="experience" element={<Experience/>}/>
        <Route path="project" element={<Projects/>}/>
        <Route path="skills" element={<Skills/>}/>
        <Route path="achivements" element={<achivement/>}/>
        <Route path="Contact me" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;

