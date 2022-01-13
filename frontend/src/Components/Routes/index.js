import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Routes, Switch } from 'react-router-dom';
import Home from '../../pages/Home';
import Login from "../../pages/LogIn";
import Settings from "../../pages/Settings";
import Notifications from "../../pages/Notifications";
import "../../App.css";
import Profile from "../../pages/Profile";
import SignUp from "../../pages/Signup";





const index = () => {
  return (
   <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/Login" element={<Login />} />
      <Route exact path="/Signup" element={<SignUp />} />
      <Route exact path="/Profile" element={<Profile />} />
      <Route exact path="/Settings" element={<Settings />} />
      <Route exact path="/Notifications" element={<Notifications />} />
    </Routes>
    </Router>
  
  );
};

export default index;