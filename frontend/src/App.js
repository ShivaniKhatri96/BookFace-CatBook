// import './App.css';
import * as React from "react";
import Home from "./Components/pages/Home";
import LogIn from "./Components/pages/LogIn";
import Profile from "./Components/pages/Profile";
import SignUp from "./Components/pages/Signup";
import Settings from "./Components/pages/Settings";
import Notifications from "./Components/pages/Notifications";
import "./App.css";
import { Routes, Route } from "react-router-dom";
// import Navbar from "./Components/Navbar";
// import Footer from "./Components/Footer";
import { useState, useEffect } from "react";

function App() {
  const [auth, setAuth] = useState("");

  useEffect(async () => {
    const response = await fetch("http://localhost:5000/authentication").then(
      (res) => res.text()
    );
    setAuth(response);
    console.log(response);
  }, []);

  if (auth === "Authenticated") {
    return (
      <div className="page-container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Login" element={<LogIn />} />
          <Route exact path="/Signup" element={<SignUp />} />
          <Route exact path="/Profile" element={<Profile />} />
          <Route exact path="/Settings" element={<Settings />} />
          <Route exact path="/Notifications" element={<Notifications />} />
        </Routes>
      </div>
    );
  } else {
    return (
      <div className="page-container">
        <LogIn auth={auth} setAuth={setAuth} />
      </div>
    );
  }
}
export default App;
