import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import Ourcars from "./ourcars";
import About from "./About";
import Checkout from "./Checkout";

function Pages() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/ourcars/:sucess" element={<Ourcars />} />
        <Route path="/checkout/:name" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default Pages;
