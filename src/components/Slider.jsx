import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

function Slider() {
  return (
    <div>
      <Splide
        options={{
          perPage: 1,
          drag: "free",
        }}>
        <SplideSlide className="slider">
          <img
            className="sliderImg"
            src="https://wallpapersmug.com/download/2560x1440/aad070/porsche-911-turbo-sports-car.jpg"
            alt=""
          />
        </SplideSlide>
        <SplideSlide>
          <img
            className="sliderImg"
            src="https://wallpapersmug.com/download/2560x1440/aad070/porsche-911-turbo-sports-car.jpg"
            alt=""
          />
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default Slider;
