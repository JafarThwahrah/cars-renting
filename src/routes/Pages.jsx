import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";

function Pages() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </div>
  );
}

export default Pages;
