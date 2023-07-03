import React, { useState, useEffect } from 'react';
import "./loginform.css";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import Navbar from './NavBar';
import Footer from './Footer';


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
            onClose();
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        console.log(patient);
    }, [patient]);
    return (
        <div>
        <Navbar />
        <div className="loginPage">
            <div className="loginContainer">
                <h1>Create an Account</h1>

                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <label>PatientNo</label>
                        <input
                            type="number"
                            name="PatientNo"
                            min="0"
                            value={patient.PatientNo}
                            onChange={handleChangeHandler}
                            required />
                    </div>
                    <div className="input-container">
                        <label>Mobile Number</label>
                        <input
                            type="number"
                            name="mobileNo"
                            min="0"
                            pattern="[0-9]{10,}"
                            title="Please enter a valid mobile number (minimum 10 digits)"
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
                            min="0"
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
        <Footer />
        </div>
    );
}

export default SignUpForm;


