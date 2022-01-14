// import './App.css';
import * as React from "react";
import Home from "./Components/pages/Home";
import LogIn from "./Components/pages/LogIn";
import Profile from "./Components/pages/Profile";
import SignUp from "./Components/pages/Signup";
import {Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
      <Route  path="/" element={<Home />} />
      <Route exact path="/Login" element={<LogIn />} />
      <Route exact path="/Profile" element={<Profile />} />
      <Route exact path="/Signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}
export default App;
