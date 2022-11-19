import React from "react";
import Slider from "../components/Slider";
import "../styles/Home.css";
import ImageList from "../components/ImageList";
function Home() {
  return (
    <div>
      <Slider />
      <ImageList />
    </div>
  );
}

export default Home;
