import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./NavBar";
import { useParams } from "react-router-dom";
import { DatePicker } from "antd";
import moment from "moment";
import Footer from "./Footer"


const DoctorCard = () => {

  const PatientNo = localStorage.getItem("PatientNo")
  const isloggedIn = localStorage.getItem("loggedIn");
  const [patient, setPatientData] = useState(null);
  const params = useParams();
  const [doctor, setDoctorData] = useState(null);
  const [date, setDate] = useState(new Date())
  const [isAvailable, setIsAvailable] = useState()


  const handleBooking = async (e) => {
    e.preventDefault();
    try {

      const res = axios.post('http://localhost:3001/patient/book-appointment',
        {
          PatientNo: patient.PatientNo,
          doctorNo: params.doctorNo,
          doctorInfo: doctor.fullname,
          PatientInfo: patient.fullname,
          date: date
        })
      alert("successfully booked")
      window.location.reload(); // Refresh the page
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await axios.post(
          'http://localhost:3001/doctor/getDoctorById',
          {
            doctorNo: params.doctorNo
          }
        );

        console.log("API response:", response.data);
        setDoctorData(response.data.data.doctor);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchData();
  }, [params.doctorNo]);

  useEffect(() => {
    const PatientNo = localStorage.getItem("PatientNo")
    const fetchData = async () => {
      try {
        const response = await axios.post(
          'http://localhost:3001/patient/getPatientById',
          {
            PatientNo: PatientNo
          }
        );
        console.log("API response:", response.data);
        setPatientData(response.data.data.patient);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchData();
  }, [PatientNo]);

  return (
    <div>
      <Navbar />
      <div style={{
        minHeight: "100vh"

      }}>
        <h3>hi</h3>
        {doctor ? (
          <div>
            <h3>Doctor Name: {doctor.fullname}</h3>

            {/* Display other doctor information as needed */}
          </div>
        ) : (
          <h3>Loading doctor data...</h3>
        )}
        <h1>book now</h1>
        {isloggedIn ? (
          <div>
            <DatePicker aria-required={"true"}
              className="m-2"
              format="DD-MM-YYYY"
              onChange={(date) => {
                console.log(date)
                const formattedDate = moment(date.$d).format("DD-MM-YYYY");
                console.log(formattedDate)
                setDate(formattedDate);
              }} />
            <button className="btn btn-primary">Check Availability</button>
            <button className="btn btn-primary" onClick={handleBooking}>Book now</button>
          </div>
        ) : (
          <h3>Login to book the doctor...</h3>
        )}

      </div>
      <Footer />
    </div>
  );
};

export default DoctorCard;

