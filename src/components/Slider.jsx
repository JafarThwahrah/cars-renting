import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

function Slider() {
  return (
    <div>
      <Splide
        style={{ height: "100vh" }}
        options={{
          type: "loop",
          autoplay: "playing",
        }}>
        <SplideSlide className="slider">
          <img
            style={{ height: "100vh", width: "100%" }}
            className="sliderImg"
            src="https://wallpapersmug.com/download/2560x1440/aad070/porsche-911-turbo-sports-car.jpg"
            alt=""
          />
        </SplideSlide>
        <SplideSlide>
          <img
            style={{ height: "100vh", width: "100%" }}
            className="sliderImg"
            src="https://th.bing.com/th/id/R.c58bc642812e4c362688e5d95ffc9bbe?rik=I5l5aTH0SRTxBA&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f0%2fe%2f3%2f359809.jpg&ehk=2czX2qHaJ04feRzzM8MDzYmCPZUjKLgo3dk4%2f9XKW6E%3d&risl=&pid=ImgRaw&r=0"
            alt=""
          />
        </SplideSlide>
        <SplideSlide>
          <img
            style={{ height: "100vh", width: "100%" }}
            className="sliderImg"
            src="https://www.hdnicewallpapers.com/Walls/Big/BMW/New_BMW_M3_White_Car_Free_Wallpapers_Download.jpg"
            alt=""
          />
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default Slider;
