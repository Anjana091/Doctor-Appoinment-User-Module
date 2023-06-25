import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./NavBar";
import { useParams } from "react-router-dom";
import { DatePicker, message } from "antd";
import moment from "moment";
import Footer from "./Footer"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import user from "../assests/user.png"


const DoctorCard = () => {

  const PatientNo = localStorage.getItem("PatientNo")
  const isloggedIn = localStorage.getItem("loggedIn");
  const [patient, setPatientData] = useState(null);
  const params = useParams();
  const [doctor, setDoctorData] = useState(null);
  const [date, setDate] = useState(null)
  const [isAvailable, setIsAvailable] = useState()


  const handleBooking = async (e) => {
    e.preventDefault();
    const doctorNo = params.doctorNo
    if (!date) {
      return message.error("Date is Required")
    }

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


  const handleAvailability = async (e) => {
    e.preventDefault();
    if (!date) {
      return message.error("Date is Required")
    }
    try {
      const res = await axios.post('http://localhost:3001/patient/booking-availbility',
        {
          doctorNo: params.doctorNo,
          date: date,
          tokenPerDay: doctor.tokenPerDay

        })
      if (res.data.success) {
        setIsAvailable(true)
        message.success(res.data.message)

      } else {
        setIsAvailable(false)
        message.error(res.data.message)

      }

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const doctorNo = params.doctorNo
    const fetchData = async () => {
      try {

        const response = await axios.post(
          'http://localhost:3001/doctor/getDoctorById',
          {
            doctorNo: doctorNo
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
        minHeight: "80vh"

      }}>

        <Card sx={{ maxWidth: 500, margin: '10vh auto 10vh' }}>
          <CardMedia
            sx={{ height: 180 }}
            image={user}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">

              {doctor ? (
                <div>
                  <h3>Doctor Name: {doctor.fullname}</h3>

                  {/* Display other doctor information as needed */}
                </div>
              ) : (
                <h3>Loading doctor data...</h3>
              )}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {doctor ? (
                <div>
                  <h3>Doctor No: {doctor.doctorNo}</h3>
                  <h3> Fullname: {doctor.fullname}</h3>
                  <h3>Specialty: {doctor.Specialty}</h3>
                  <h3>Qualification: {doctor.Qualification}</h3>
                  <h3>Experience: {doctor.Experience}</h3>
                  <h3>fee Per Session: {doctor.fees}₹</h3>
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
                  <CardActions>
                    <Button size="small" onClick={handleAvailability}>Check Availability</Button>
                    {isAvailable ? (
                      <Button size="small" onClick={handleBooking}>Book now</Button>
                    ) : null}
                  </CardActions>
                </div>
              ) : (
                <a className="login-a" href="/" >
                  Login to book the doctor...</a>
              )}
            </Typography>
          </CardContent>

        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default DoctorCard;

