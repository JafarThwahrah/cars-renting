import React from "react";
import Slider from "../components/Slider";
import "../styles/Home.css";
import ImageList from "../components/ImageList";
import CompleteHome from "../components/completeHome";

function Home() {
  return (
    <div>
      <Slider />
      <ImageList />
      <CompleteHome />
    </div>
  );
}

export default Home;
