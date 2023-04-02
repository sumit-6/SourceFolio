import React from 'react';
// import './App.css';
import { Routes,Route } from 'react-router';
import Portfolio from './Components/Portfolio';
import Previewbutton from './Components/Previewbutton';

import InsertDataInFormButton from './Components/InsertDataInFormButton';
import HomeRoute from './Components/HomeRoutee';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<HomeRoute/>}/>
        
      </Routes>
    </div>
  );
}

export default App;

