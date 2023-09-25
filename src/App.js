import React from 'react';

import {Routes, Route} from 'react-router-dom'
import './App.css'
import Homepage from 'pages/Homepage';
import LoginPage from 'pages/LoginPage/LoginPage';
import {RegisterPage} from 'pages/RegisterPage/RegisterPage';

function App() {
  

  return (
    <div className="content" >
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
