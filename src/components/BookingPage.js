import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./NavBar";
import { useParams } from "react-router-dom";
import { DatePicker } from "antd";
import moment from "moment";
import Footer from "./Footer"

const DoctorCard = () => {
  const params = useParams();
  const [doctor, setDoctorData] = useState(null);
  const [date,setDate] = useState()
  const [isAvailable,setIsAvailable]=useState()

  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await axios.post(
          'http://localhost:3001/doctor/getDoctorById',
          {
            doctorNo :params.doctorNo
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

  console.log("Rendered component:", doctor);

  return (
    <div>
      <Navbar />
      <div  style={{
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
        <DatePicker format="DD-MM-YYYY" onChange={(value) => moment(value).format('DD-MM-YYYY')}/>
        <button className="btn btn-primary">Check Availability</button>
        <button className="btn btn-primary">Book now</button>
      </div>
      <Footer />
    </div>
  );
};

export default DoctorCard;

