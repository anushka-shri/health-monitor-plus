import React from 'react';
import './App.css';
import LoginRouter from './authPages/authRouter'
import axios from "axios";

axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="App">
     <LoginRouter />
    </div>
  );
}

export default App;
