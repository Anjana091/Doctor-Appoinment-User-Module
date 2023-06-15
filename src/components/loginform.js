import React, { useState } from "react";
import "./loginform.css";

function LoginForm() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUpClick = () => {
    setIsSignUp(true);
  };

  const handleSignInClick = () => {
    setIsSignUp(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    if (isSignUp) {
      // Additional validation for signup form
      if (password !== confirmPassword) {
        alert("Password and confirm password do not match");
        return;
      }
      // Continue with signup logic
    } else {
      // Continue with login logic
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <div className="App">
      <div className="loginContainer">
        <h1>{isSignUp ? "Create an Account" : "Welcome Back!"}</h1>

        <form onSubmit={handleFormSubmit}>
          <div className="input-container">
            <label>Username</label>
            <input type="text" name="uname" required />
          </div>

          {isSignUp && (
            <>
              <div className="input-container">
                <label>Full Name</label>
                <input type="text" name="fullName" required />
              </div>

              <div className="input-container">
                <label>Phone Number</label>
                <input type="tel" name="phoneNumber" required />
              </div>

              <div className="input-container">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
              </div>

              <div className="input-container">
                <label>Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  required
                />
              </div>
            </>
          )}

          {!isSignUp && (
            <div className="input-container">
              <label>Password</label>
              <input type="password" name="pass" required />
            </div>
          )}

          {isSignUp ? (
            <div className="signup-container">
              <button className="signupBut" type="submit">
                <p>Sign Up</p>
              </button>
            </div>
          ) : (
            <div className="signin-container">
              <button className="loginBut" type="submit">
                <p>Login</p>
              </button>
            </div>
          )}

          <div className="forgot-password-container">
            {isSignUp ? (
              <>
                <a href="#" onClick={handleSignInClick}>
                  Already have an account? Sign in
                </a>
              </>
            ) : (
              <>
                <a href="#">Forgot password?</a>
                <a href="#" onClick={handleSignUpClick}>
                  Create a new account
                </a>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
