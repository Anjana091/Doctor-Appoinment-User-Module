import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./NavBar";
import { useParams } from "react-router-dom";

const DoctorCard = () => {
  const params = useParams();
  const [doctor, setDoctorData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await axios.post(
          'http://localhost:3001/doctor/getDoctorById',
          {
            doctorNo :params.doctorNo
          }
        );

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
      <div>
        <h3>hi</h3>
        {doctor ? (
          <div>
            <h3>Doctor Name: {doctor.fullname}</h3>
            {/* Display other doctor information as needed */}
          </div>
        ) : (
          <h3>Loading doctor data...</h3>
        )}
      </div>
    </div>
  );
};

export default DoctorCard;
