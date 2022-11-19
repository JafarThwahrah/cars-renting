import React from "react";
import "../styles/Footer.css";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
function Footer() {
  return (
    <div className="footer">
      <footer>
        <div>
          <h5>About us</h5>
          <p>
            Carrjo is a platform where you can rent <br /> a car with reasonble
            price
          </p>
        </div>

        <div>
          <h5>Pages</h5>
          <ul>
            <li>Our Cars</li>
            <li>About us</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div>
          <h5>Keep in touch</h5>
          <ul>
            <li>
              <EmailIcon className="icons" /> jaffardawahreh2@gmail.com
            </li>
            <li>
              <LocalPhoneIcon className="icons" />
              0785351933
            </li>
            <li></li>
          </ul>
        </div>
      </footer>
      <p className="copywrite">&copy; 2022 CarsJo.team</p>
    </div>
  );
}

export default Footer;
