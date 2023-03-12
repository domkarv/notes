import React, { useEffect } from "react";
import ResponsiveGallery from "react-responsive-gallery";

import Photos from "../models/Photos";
import Animation from "./Animations";
import CustomLoader from "./GalleryLoader/CustomeLoader";

export default function YearsPage() {
  useEffect(() => {
    const img = document.querySelectorAll(".sc-fsYeqs");
    for (let i = 0; i < img.length; i++) {
      img[i].classList.add(Animation[i].name);
    }
  }, []);

  function cancelButtonClickHandler() {
    document.querySelector(".image-container").style.display = "none";
    document.querySelector(".swiper").style.display = "block";
  }

  return (
    <div className="image-container" style={{ display: "none" }}>
      <span>
        <img
          src="/cancel.png"
          alt=""
          onClick={() => cancelButtonClickHandler()}
          style={{
            position: "fixed",
            top: "10px",
            right: "10px",
            height: "50px",
            width: "50px",
            zIndex: "100",
            cursor: "pointer",
          }}
        />
      </span>
      <ResponsiveGallery
        useLightBox
        customLoader={<CustomLoader />}
        images={Photos}
      />
    </div>
  );
}
