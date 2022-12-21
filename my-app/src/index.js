import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA437zpccp9XVdXgtQzG7oBDDfXkCf2RV0",
  authDomain: "my-app-react-30c60.firebaseapp.com",
  projectId: "my-app-react-30c60",
  storageBucket: "my-app-react-30c60.appspot.com",
  messagingSenderId: "892638465878",
  appId: "1:892638465878:web:a31a03ddd0821d5d5010f7"
};

// Initialize Firebase
// eslint-disable-next-line
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
