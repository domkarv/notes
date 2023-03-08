import React from "react";

import Images from "../assets/images";
import "./Gallery.css";

export default function Gallery() {
  window.onscroll = function () {
    imageScrollEffect();
  };
  const imageScrollEffect = () => {
    if (document.documentElement.scrollTop) {
      document.getElementById("image").classList.remove("y-axis");
    } else {
      document.getElementById("image").classList.add("y-axis");
    }
  };

  return (
    <React.Fragment>
      <div className="flex flex-row justify-center items-center min-h-screen">
        <div className="scene">
          <img src={Images[1]} alt="" id="image" className="square y-axis" />
        </div>
        <div className="scene flex items-center">
          <img src={Images[2]} alt="" />
        </div>
        <div className="scene">
          <img src={Images[3]} alt="" className="square -y-axis" />{" "}
        </div>
      </div>
    </React.Fragment>
  );
}
