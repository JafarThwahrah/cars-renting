import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "../styles/Slider.css";
import { useNavigate } from "react-router-dom";

function Slider() {
  const navigate = useNavigate();
  function handleClickOffer() {
    navigate("/ourcars/s");
  }

  function handleContactUsBtn() {
    navigate("/contact");
  }

  return (
    <div>
      <Splide
        style={{ height: "100vh" }}
        options={{
          type: "loop",
          autoplay: "playing",
        }}>
        <SplideSlide className="slider1">
          <div className="welcomeTextContainer">
            <h1 className="textmain">
              WELCOME TO OUR WEBSITE{" "}
              <span className="websiteName">ZarqaCars.Jo</span>
            </h1>
            <h3 className="textmain">
              Enjoy Best Cars Renting Service on our website, <br /> You can
              Rent the car Online and let us send the <br /> car to your
              location.
            </h3>
            <button onClick={handleClickOffer} className="btnOffer">
              Find CAR NOW!
            </button>
          </div>
        </SplideSlide>
        <SplideSlide className="slider2">
          <div className="welcomeTextContainer">
            <h1 className="textmain">
              SPECIAL OFFERS REACHED TO
              <span className="websiteName"> 30% DISCOUNT</span>
            </h1>
            <h3 className="textmain">
              Find Newly arrived Cars to our Garage and Enjoy <br /> Discount
              for the first ride.
            </h3>
          </div>
        </SplideSlide>
        <SplideSlide className="slider3">
          <div className="welcomeTextContainer">
            <h1 className="textmain">
              CUSTOMER SERVICE AVAILABLE
              <span className="websiteName"> 7 DAYS A WEEK</span>
            </h1>
            <h3 className="textmain">
              Never hesitate to contact us in case you faced any issue,
              <br /> and we will ensure to provide you with the best Service.
            </h3>
            <button onClick={handleContactUsBtn} className="btnOffer">
              Contact us.
            </button>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default Slider;
