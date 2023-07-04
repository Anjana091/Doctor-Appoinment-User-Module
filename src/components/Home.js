import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./NavBar";
import Footer from "./Footer";
import "./Home.css";
import Slider from "./Slider"; 

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <Navbar />
      <div className="background-wrapper"></div>
      <div className="home" id="home-div">
        <Slider/>
      </div>
      <Footer />
    </div>
  );
}