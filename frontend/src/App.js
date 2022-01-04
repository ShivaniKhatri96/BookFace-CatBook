// import './App.css';
import * as React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Settings from "./pages/Settings";
import Notifications from "./pages/Notifications";
import  './App.css'
import Profile from "./pages/Profile";
import {Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/Login" element={<Login />} />
      <Route exact path="/Profile" element={<Profile />} />
      <Route exact path="/Settings" element={<Settings />} />
      <Route exact path="/Notifications" element={<Notifications />} />
      </Routes>
    </div>
  );
}

export default App;
