import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { Provider } from 'react-redux';
import { store, persister } from './redux/store';

import { PersistGate } from 'redux-persist/integration/react';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVUr8VeU9CLWNEvPaAEggP8mF--uc1v7I",
  authDomain: "reactform-f9038.firebaseapp.com",
  projectId: "reactform-f9038",
  storageBucket: "reactform-f9038.appspot.com",
  messagingSenderId: "688060008187",
  appId: "1:688060008187:web:b889ce7a4cdeae23d9525e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </PersistGate>
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
export const auth = getAuth(app);
export default app;