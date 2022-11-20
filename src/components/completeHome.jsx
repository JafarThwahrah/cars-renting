import React from "react";
import "../styles/CompleteHome.css";
import { useNavigate } from "react-router-dom";

function CompleteHome() {
  const navigate = useNavigate();
  function handleClickOffer() {
    navigate("/ourcars/s");
  }

  function handleContactUsBtn() {
    navigate("/contact");
  }
  return (
    <div>
      <div className="Offercontainer">
        <h1>
          Enjoy <span className="discount">Discount 20% </span>on Newly Arrived
          Vehicles
          <div>
            <button onClick={handleClickOffer} className="btnOffer">
              Find CAR NOW!
            </button>
          </div>
        </h1>
      </div>

      <h3 style={{ marginTop: "3rem" }} className="HeaderImg">
        Faced Any Issue? Never Hesitate to contact us
      </h3>
      <div className="contactAdsHome">
        <div className="conactBg"></div>
        <button onClick={handleContactUsBtn} className="btnOffer">
          Contact us.
        </button>
      </div>
    </div>
  );
}

export default CompleteHome;
