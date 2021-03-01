import React from 'react';
import './App.css';
import Router from './authPages/authRouter'
import axios from "axios";

axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="App">
     <Router />
    </div>
  );
}

export default App;
