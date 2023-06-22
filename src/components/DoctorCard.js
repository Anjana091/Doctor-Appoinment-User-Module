import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  Box,
} from "@mui/material";
import axios from "axios";
import Navbar from "./NavBar";
import { useNavigate } from "react-router-dom";


const DoctorCard = () => {
  const navigate = useNavigate();
  const [doctorData, setDoctorData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/doctor/all");
        setDoctorData(response.data.data.doctors);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {doctorData.map((doctor) => (
          <Card
            key={doctor.doctorNo}
            sx={{
              width: "300px",
              height: "100%",
              margin: "1rem",
              backgroundImage:
                "linear-gradient(135deg, #6a1b9a 0%, #4a148c 100%)",
              color: "white",
              transition: "transform 0.2s",
              "&:hover": {
                transform: "scale(1.05)",
              },
              "@media (max-width: 600px)": {
                width: "100%",
              },
            }}
          >
            <CardContent>
              <Typography variant="h6">{doctor.fullname}</Typography>
              <Typography variant="body2" color="inherit">
                {doctor.Specialty}
              </Typography>
            </CardContent>
            <CardActions>
              <Box sx={{ flexGrow: 1 }} />
              <Button variant="contained" color="secondary"
                onClick={() => 
                  navigate(`/doctors/book-appoinment/${doctor.doctorNo}`)
}
              >
                Details
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DoctorCard;
