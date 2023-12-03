import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDACWfFIhLwr4wvvuCnu6KXcKKkTnXhtMs",
  authDomain: "ecomerce-coderhouse-1f24f.firebaseapp.com",
  projectId: "ecomerce-coderhouse-1f24f",
  storageBucket: "ecomerce-coderhouse-1f24f.appspot.com",
  messagingSenderId: "314088716417",
  appId: "1:314088716417:web:cbdcd05fd7bad91c8f3580"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
