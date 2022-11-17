import React from "react";
import "../styles/contact.css";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

function Contact() {
  return (
    <>
      <h1 className="heading">Contact us</h1>
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
      </Box>
    </>
  );
}

export default Contact;
