import React, { useState } from "react";
import "./loginform.css";

function LoginForm(error) {
  const [mobileNo, setMobileNo] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(mobileNo, password);
    fetch("http://localhost:3001/patient/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        mobileNo,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.message === "Admin successfully registered") {
          setLoginSuccess(true);
          window.localStorage.setItem("token", data.data.token);
          window.localStorage.setItem("loggedIn", true);
          setTimeout(() => {
            window.location.href = "./home";
          }, 150);
        }
      });
  };



  return (
    <div className="loginPage">
      <div className="loginContainer">
        <h1>"Welcome Back!"</h1>

        <form onSubmit={submitHandler}>
          <div className="input-container">
            <label>Mobile Number</label>
            <input 
            type="number" 
            name="mobileNo" 
            onChange={(e) => setMobileNo(e.target.value)}
            required />
          </div>  
            <div className="input-container">
              <label>Password</label>
              <input 
              type="password" 
              name="pass" 
              required 
              onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="signin-container">
              <button className="loginBut" type="submit">
                Login
              </button>
            </div>
            {loginSuccess && (
        <div className="success">Login successful!</div>
      )}
          <div className="forgot-password-container">
              <>
                <a className="login-a" href="#">Forgot password?</a>
                <a className="login-a" href="/signUp" >
                  Create a new account
                </a>
              </>
        
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
