import React from "react";
import "../styles/About.css";
function About() {
  return (
    <div>
      <div className="heroIMGAbout">
        <div>
          <h1>About Us</h1>{" "}
        </div>
      </div>
      <div className="articleAboutContainer">
        <img
          className="aboutSideimg flexeditem"
          src="https://www.thextremexperience.com/wp-content/uploads/2020/04/XX-Garage-Cars-scaled.jpg"
          alt=""
        />
        <article className="flexeditem">
          <h3>About Our Company</h3>
          Cars Zarqa is a Garage that aim to provide Cars Rental Service with
          reasonable prices,Our Aim is to make cars renting Easier and
          affordable as much as we can,We Also offer Car Delivery Service
          Besides Booking Online,Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Recusandae, impedit. Ab et dolorem ducimus quis
          deserunt doloremque qui. Minima, alias autem voluptas voluptatem
          tempore excepturi dolor eius at vel a.
        </article>
      </div>
    </div>
  );
}

export default About;
