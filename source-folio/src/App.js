import React from 'react';
import './App.css';
import { Routes,Route } from 'react-router';
import Portfolio from './Components/Portfolio';
import Dashboard from './Components/DashBoard';
import Login from './Components/Login';
import ErrorPage from './Components/ErrorPage';
import Form from './Components/Form-Components/Form';
import EditForm from './Components/Form-Components/EditForm';
import ProfilePictureEditForm from './Components/Form-Components/ProfilePictureEditForm';
import AboutUs from './Components/Dashboard-Components/AboutUs';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="portfolio/:id" element={<Portfolio />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="form" element={<Form />} />
        <Route path="edit/:id" element={<EditForm />} />
        <Route
          path="edit/profilePicture/:id"
          element={<ProfilePictureEditForm />}
        />
        <Route
          path="aboutus"
          element={<AboutUs/>}
        />
      </Routes>
    </div>
  );
}

export default App;

