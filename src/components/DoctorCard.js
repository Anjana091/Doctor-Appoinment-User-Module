import React, { useEffect, useState } from "react";
import { List, ListItem, ListItemText, Button, Box, Avatar } from "@mui/material";
import axios from "axios";
import Navbar from "./NavBar";
import { useNavigate } from "react-router-dom";
import maleAvatar from '../assests/male-avatar.jpg';
import femaleAvatar from '../assests/female-avatar.jpg';
import Footer from "./Footer";


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

  const getAvatarSrc = (gender) => {
    if (gender === "male") {
      return maleAvatar;
    } else {
      return femaleAvatar;
    }
  };

  return (
    <div>
     <Navbar />
      <List sx={{ minHeight: "100vh" }}>
        {doctorData.map((doctor) => (
          <ListItem
            key={doctor.doctorNo}
            sx={{
      
              height :"130px",
              margin:"10px 0px",
              backgroundColor: "#04619f",
              backgroundImage: "linear-gradient(147deg, #04619f 0%, #002D62 74%)",
              color: "white",
              transition: "transform 0.2s",
              "&:hover": {
                transform: "scale(1.05)",
              },
              borderTop: "1px solid white",
              alignItems: "center",
            }}
          >
            <Avatar src={getAvatarSrc(doctor.Gender)} alt="Doctor Avatar" sx={{ marginRight: "1rem" }} />
            <ListItemText primary={doctor.fullname} secondary={doctor.Specialty} />
            <Box sx={{ flexGrow: 1 }} />
            <Button
              variant="contained"
              color="secondary"
              sx={{
                backgroundColor: "#005A9C",
                "&:hover": {
                  backgroundColor: "#1F305E",
                },
              }}
              onClick={() => navigate(`/doctors/book-appoinment/${doctor.doctorNo}`)}
            >
              Details
            </Button>
          </ListItem>
        ))}
      </List>
      <Footer />
    </div>
  );
};

export default DoctorCard;
