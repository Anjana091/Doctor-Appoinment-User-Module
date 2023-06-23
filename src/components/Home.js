import React from "react";
import { useNavigate } from "react-router-dom";
import  { useEffect } from "react";
import Navbar from "./NavBar";
import Footer from "./Footer";
import "./Home.css"

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);


  return (
    <div className="container"> 
      <Navbar />
      <div className="background-wrapper"></div>
      <div className="home" id="home-div">
      <h1>Home page</h1>
      <button
          onClick={ ()=>{
            localStorage.clear();
           navigate('/')
          }} >Log Out</button>
     </div>
     <Footer />
    </div>
  );
}