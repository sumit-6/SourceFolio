import React from 'react';
// import './App.css';
import { Routes,Route } from 'react-router';
import Portfolio from './Components/Portfolio';
import Previewbutton from './Components/Previewbutton';
import Login from './Components/Login';
import ErrorPage from './Components/ErrorPage';
function App() {

  return (
    <div>
      <Routes>

        <Route path="/" element={<Previewbutton />} />
        <Route path="portfolio/:id" element={<Portfolio />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;

