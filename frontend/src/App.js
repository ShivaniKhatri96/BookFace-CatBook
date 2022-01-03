// import './App.css';
import * as React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import {Routes, Route, Link} from 'react-router-dom';
import Navbar from "./Components/Navbar";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/Login" element={<Login />} />
      <Route exact path="/Profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
