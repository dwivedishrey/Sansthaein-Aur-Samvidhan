import {React,useState} from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from './Main/Main.js';



function App() {
 
  

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App;
