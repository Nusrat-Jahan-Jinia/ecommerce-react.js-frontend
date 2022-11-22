import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Default from "./components/Default";
import "./App.css";
import About from "./components/About";
import Users from "./components/Users";
import Home from "./components/Home";
import Cart from "./components/Cart";

export default function App() {
  return (
    <div className="App">
    <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />}/>
          <Route path="/users" element={<Users />} />
          <Route path="/carts" element={<Cart />} />
        </Routes>
    </Router>
  </div>
  );
}
