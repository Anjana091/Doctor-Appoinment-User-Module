import "./loginform.css";

function loginform() {
  return (
    <div className="App">
      <div className="loginContainer">
        <h1>Welcome Back!</h1>

        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {/* {renderErrorMessage("uname")} */}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {/* {renderErrorMessage("pass")} */}
        </div>

        <a href="#">Forgot password?</a>
        <a href="#">Create a new account</a>

        <button className="loginBut">
          <p>Login</p>
        </button>
      </div>
    </div>
  );
}

export default loginform;