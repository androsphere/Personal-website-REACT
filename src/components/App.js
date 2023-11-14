import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Pieces from "./Pieces";
import Navbar from "./Navbar";

function App() {
  

  return (
    <div>
      <Navbar  />
      <Routes>
        <Route path='/about' element={<About/>} />
        <Route path='/pieces' element={<Pieces/>} />
        <Route path='/' element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;

