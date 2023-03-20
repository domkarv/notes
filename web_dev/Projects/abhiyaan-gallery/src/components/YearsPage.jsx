import React from "react";

import Photos from "../models/Photos";

export default function YearsPage() {
  const arr = ["wide", "tall", "big"];

  function cancelButtonClickHandler() {
    document.querySelector(".image-container").style.display = "none";
    document.querySelector(".media-container").style.display = "flex";
  }

  return (
    <div
      className="image-container"
      style={{ display: "none", margin: "15px" }}
    >
      <span>
        <img
          src="/cancel.png"
          alt=""
          onClick={() => cancelButtonClickHandler()}
          className="cancel-button"
        />
      </span>
      <div className="grid-wrapper">
        {Photos.map((photo, i) => {
          return (
            <div
              key={i}
              className={`img-co ${arr[Math.floor(Math.random() * 3)]}`}
            >
              <img src={photo.src} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

{
  /* <ResponsiveGallery
  useLightBox
  customLoader={<CustomLoader />}
  images={Photos}
/>; */
}
