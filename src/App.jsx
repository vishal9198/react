import { useState } from "react";
import Home from "./pages/Home";
import "./index.css";

import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "home-active" : "home")}
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "about-active" : "about")}
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "contact-active" : "contact"
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? "login-class" : "login")}
        >
          Login
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/*
No, stopping a page reload is just the mechanism. The overarching goal is to turn your app into a Single Page Application (SPA), which unlocks several crucial capabilities:Purpose / FeatureWhat It SolvesState 

State Preservation    

A full page refresh completely wipes out your application's memory (React state, temporary form data, user selections). Client-side routing allows you to change pages while keeping your app's global state perfectly intact.intact.


Data Fetching & Route Protection

Modern routers let you run authentication checks (e.g., checking if a user is logged in before letting them see /dashboard) and pre-load API data before the page even finishes transitioning.
*/
