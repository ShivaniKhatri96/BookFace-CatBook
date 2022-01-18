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
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { useState, useEffect } from "react";
import { Navigate } from "react-router";

function App() {
  document.title = "The Catbook";
  const [coolDan, setCoolDan] = useState("");
  const [auth, setAuth] = useState("Login needed");
  const [user, setUser] = useState({
    login: "",
    password: ""
  });

  useEffect(() => {
    (async () => {
      const response = await fetch("/authentication").then((res) => res.text());
      setAuth(response);
    })();
  }, [auth]);
  // useEffect(() => {
  //   let isCancelled = false;
  //   const userAuth = async () => {
  //     const response = await fetch('/authentication').then((res) => res.text());
  //     setAuth(response);

  //     if (!isCancelled) {
  //       console.log(user._id);
  //     }
  //     setAuth(response);
  //   };

  //   userAuth();
  //   return () => {
  //     isCancelled = true;
  //   };
  // });
  console.log(coolDan)
  if (auth === "Authenticated") {
    return (
      <div className="page-container">
        <Navbar auths={setAuth} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/Login" element={<LogIn />} /> */}
          {/* <Route exact path="/Signup" element={<SignUp />} /> */}
          <Route exact path="/Profile" element={<Profile coolDan={coolDan} />} />
          <Route exact path="/Settings" element={<Settings />} />
          <Route exact path="/Notifications" element={<Notifications />} />
          {/* this is a  way to redirect to home page when people try to access unathorized links */}
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
        <Footer />
      </div>
    );
  } else {
    return (
      <div className="page-container">
        <Routes>
          {/* <Route
            exact
            path="/"
            element={<LogIn auth={auth} setAuth={setAuth} />}
          /> */}
          <Route
            exact
            path="/Login"
            element={
              <LogIn
                auth={auth}
                setAuth={setAuth}
                user={user}
                setUser={setUser}
                coolDan={coolDan}
                setCoolDan={setCoolDan}
              />
            }
          />
          <Route exact path="/Signup" element={<SignUp />} />
          {/* this is a better way to redirect when people try to access unathorized links */}
          <Route path="*" element={<Navigate replace to="/Login" />} />
        </Routes>
      </div>
    );
  }
}
export default App;
