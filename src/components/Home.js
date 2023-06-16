import React from "react";
import { useNavigate } from "react-router-dom";
import  { useEffect } from "react";



export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);


  return (
    <div className="container">
      <div className="background-wrapper"></div>
      <div className="home">
      <h1>Home page</h1>
      <button
          onClick={ ()=>{
            localStorage.clear();
           navigate('/')
          }} >Log Out</button>
     </div>
    </div>
  );
}