// import './App.css';
import * as React from "react";
import Home from "./pages/Home";
import Login from "./pages/LogIn";
import Settings from "./pages/Settings";
import Notifications from "./pages/Notifications";
import "./App.css";
import Profile from "./pages/Profile";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import UserPostsProvider from "./Providers/UserPosts/UserPosts.provider";
import SignUp from "./pages/Signup";

function App() {
  return (
    <div className="page-container">
      <UserPostsProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Signup" element={<SignUp />} />
          <Route exact path="/Profile" element={<Profile />} />
          <Route exact path="/Settings" element={<Settings />} />
          <Route exact path="/Notifications" element={<Notifications />} />
        </Routes>
      </UserPostsProvider>
    </div>
  );
}
export default App;
