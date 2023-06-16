import React, { useState, useEffect } from 'react';
import "./loginform.css";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';




function SignUpForm({ onClose }) {
    const [patient, setPatient] = useState({
        PatientNo: "",
        mobileNo: "",
        fullname: "",
        age: "",
        gender: "",
        password: ""
    });


    const navigate = useNavigate();

    const handleChangeHandler = (e) => {
        setPatient({
            ...patient,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const res = await axios.post("http://localhost:3001/patient/register", patient);
            console.log(res);
            alert(res.data.message);
            // onClose(); // Close the modal
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        console.log(patient);
    }, [patient]);
    return (
        <div className="loginPage">
            <div className="loginContainer">
                <h1>Create an Account</h1>

                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <label>PatientNo</label>
                        <input
                            type="number"
                            name="PatientNo"
                            value={patient.PatientNo}
                            onChange={handleChangeHandler}
                            required />
                    </div>
                    <div className="input-container">
                        <label>Mobile Number</label>
                        <input
                            type="number"
                            name="mobileNo"
                            value={patient.mobileNo}
                            onChange={handleChangeHandler}
                            required />
                    </div>
                    <div className="input-container">
                        <label>Full Name</label>
                        <input
                            type="text"
                            name="fullname"
                            value={patient.fullname}
                            onChange={handleChangeHandler}
                            required />
                    </div>

                    <div className="input-container">
                        <label>Age</label>
                        <input
                            type="number"
                            name="age"
                            value={patient.age}
                            onChange={handleChangeHandler}
                            required />
                    </div>

                    <div className="input-container">
                        <FormControl component="fieldset">
                            <FormLabel>Gender</FormLabel>
                            <RadioGroup
                                row
                                aria-label="gender"
                                name="gender"
                                value={patient.gender}
                                onChange={handleChangeHandler}
                            >
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <div className="input-container">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={patient.password}
                            onChange={handleChangeHandler}
                            required
                        />
                    </div>
                    <div className="signin-container">
                        <button className="signupBut" type="submit">
                            <p>Sign Up</p>
                        </button>

                    </div>
                    <div className="forgot-password-container">
                        <a className="login-a" href="/" >
                            Already have an account? Sign in
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUpForm;


// import React, { useState } from "react";
// import "./loginform.css";

// function LoginForm() {
//   const [isSignUp, setIsSignUp] = useState(false);
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const handleSignUpClick = () => {
//     setIsSignUp(true);
//   };

//   const handleSignInClick = () => {
//     setIsSignUp(false);
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic
//     if (isSignUp) {
//       // Additional validation for signup form
//       if (password !== confirmPassword) {
//         alert("Password and confirm password do not match");
//         return;
//       }
//       // Continue with signup logic
//     } else {
//       // Continue with login logic
//     }
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleConfirmPasswordChange = (e) => {
//     setConfirmPassword(e.target.value);
//   };

//   return (
//     <div className="loginPage">
//       <div className="loginContainer">
//         <h1>{isSignUp ? "Create an Account" : "Welcome Back!"}</h1>

//         <form onSubmit={handleFormSubmit}>
//           <div className="input-container">
//             <label>Username</label>
//             <input type="text" name="uname" required />
//           </div>

//           {isSignUp && (
//             <>
//               <div className="input-container">
//                 <label>Full Name</label>
//                 <input type="text" name="fullName" required />
//               </div>

//               <div className="input-container">
//                 <label>Phone Number</label>
//                 <input type="tel" name="phoneNumber" required />
//               </div>

//               <div className="input-container">
//                 <label>Password</label>
//                 <input
//                   type="password"
//                   name="password"
//                   value={password}
//                   onChange={handlePasswordChange}
//                   required
//                 />
//               </div>

//               <div className="input-container">
//                 <label>Confirm Password</label>
//                 <input
//                   type="password"
//                   name="confirmPassword"
//                   value={confirmPassword}
//                   onChange={handleConfirmPasswordChange}
//                   required
//                 />
//               </div>
//             </>
//           )}

//           {!isSignUp && (
//             <div className="input-container">
//               <label>Password</label>
//               <input type="password" name="pass" required />
//             </div>
//           )}

//           {isSignUp ? (
//             <div className="signup-container">
//               <button className="signupBut" type="submit">
//                 <p>Sign Up</p>
//               </button>
//             </div>
//           ) : (
//             <div className="signin-container">
//               <button className="loginBut" type="submit">
//                 <p>Login</p>
//               </button>
//             </div>
//           )}

//           <div className="forgot-password-container">
//             {isSignUp ? (
//               <>
//                 <a className="login-a" href="#" onClick={handleSignInClick}>
//                   Already have an account? Sign in
//                 </a>
//               </>
//             ) : (
//               <>
//                 <a className="login-a" href="#">Forgot password?</a>
//                 <a className="login-a" href="#" onClick={handleSignUpClick}>
//                   Create a new account
//                 </a>
//               </>
//             )}
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default LoginForm;
