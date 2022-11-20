import React from "react";
import "../styles/contact.css";
import { useState } from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { GOOGLE_API_KEY } from "../config";

function Contact() {
  const [latituede, setLatituede] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [userAddress, setUserAddress] = useState(null);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        getCoordinates,
        handleLocationError
      );
    } else {
      alert(" geolocation is not available");
    }
  };

  function getCoordinates(position) {
    setLatituede(position.coords.latitude);
    setLongitude(position.coords.longitude);
  }
  getLocation();
  console.log(GOOGLE_API_KEY);
  console.log(longitude);
  console.log(latituede);

  function handleLocationError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
    }
  }

  return (
    <>
      <div className="heroIMGContact">
        <div>
          <h1>Contact Us</h1>
        </div>
      </div>
      <h1 style={{ color: "#1976d2" }} className="heading">
        Get in Touch
      </h1>
      <Box className="container">
        <div className="contactItem">
          <LocationOnIcon className="icon" />

          <h4>Address</h4>
          <p>Amman, Jordan, Almadina circle</p>
        </div>

        <div className="contactItem">
          <LocalPhoneIcon className="icon" />
          <h4>Contact Number</h4>
          <p>0785351933</p>
        </div>

        <div className="contactItem">
          <EmailIcon className="icon" />
          <h4>Email Address</h4>
          <p>jaffardawahreh2@gmail.com</p>
        </div>

        <div className="contactItem">
          <FacebookIcon className="icon" />
          <h4>Facebook</h4>
          <p>Facebook</p>
        </div>
      </Box>
      <Box className="container-contactus-form">
        <Paper elevation={3}>
          <h2 className="heading">contact us form</h2>

          <Box
            className="form-container"
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "50ch" },
            }}
            noValidate
            autoComplete="off">
            <TextField
              className="formInput"
              id="Name"
              label="Name"
              variant="outlined"
            />
            <TextField
              className="formInput"
              id="Title"
              label="Title"
              variant="outlined"
            />
            <TextField
              className="formInput"
              id="Email"
              label="Email"
              variant="outlined"
            />
            <TextField
              id="outlined-multiline-static"
              className="formInput"
              label="Message"
              multiline
              rows={4}
            />
            <Button className="button" variant="contained">
              Send
            </Button>
          </Box>
        </Paper>

        {/* <img
          src={`https://maps.googleapis.com/maps/api/staticmap?center=${latituede},${longitude}&zoom=12&size=400x400&key=${GOOGLE_API_KEY}`}
          alt=""
        /> */}
      </Box>
      <h3 className="ContactHeading">Find Our Location</h3>
      <div className="mapContainer">
        <iframe
          className="map"
          src={`https://www.google.com/maps/embed/v1/view
          ?key=${GOOGLE_API_KEY}
          &center=${latituede},${longitude}
          &zoom=18`}
          // src={`https://www.google.com/maps/search/?api=${GOOGLE_API_KEY}&query=${latituede},${longitude}`}
          width="640"
          height="480"></iframe>
      </div>
    </>
  );
}

export default Contact;
