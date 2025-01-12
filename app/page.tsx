"use client";
import Footer from "@/components/Footer";
import Home from "@/components/Home";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import Product from "@/components/Product";

import React from "react";

function App() {
  return (
    <div className="">
      <Navbar isWhite />
      <Home />
      <Intro />
      <Product />
      <Footer />
    </div>
  );
}

export default App;
