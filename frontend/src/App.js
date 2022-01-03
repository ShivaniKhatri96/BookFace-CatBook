// import './App.css';
import * as React from "react";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Profile from "./pages/Profile";
import {Routes, Route, Link} from 'react-router-dom';
function App() {
  return (
    <div>
      <h1>Hey there</h1>
      <Routes>
      <Route  path="/" element={<Home />} />
      <Route exact path="/Login" element={<LogIn />} />
      <Route exact path="/Profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
