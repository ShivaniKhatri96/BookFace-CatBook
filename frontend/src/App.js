// import './App.css';
import * as React from "react";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Profile from "./pages/Profile";
import SignUp from "./pages/Signup";
import {Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
      <Route  path="/Home" element={<Home />} />
      <Route exact path="/" element={<LogIn />} />
      <Route exact path="/Profile" element={<Profile />} />
      <Route exact path="/Signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
