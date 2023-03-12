import React, { useEffect, useRef } from "react";
import { gsap } from "gsap/all";
import $ from "jquery";

import "./Gallery.css";

export default function Gallery() {
  const ring = useRef(null);
  const img = useRef(null);

  const gallery = document.querySelector(".gallery");
  const images = document.querySelectorAll(".image-container");

  let scrollPosition = 0;

  window.addEventListener("wheel", () => {
    // Get the current scroll position
    const currentPosition = window.scrollY;

    // Calculate the scroll distance since last update
    const scrollDistance = currentPosition - scrollPosition;

    // Update the scroll position
    scrollPosition = currentPosition;

    // Calculate the rotation angle based on the scroll distance
    const rotationAngle = scrollDistance;

    // Loop through the image containers and update the active class
    images.forEach((image, index) => {
      const angle = (index * 72 + rotationAngle) % 360;
      image.style.transform = `rotateY(${angle}deg) translateZ(200px)`;
      image.classList.remove("active");
      if (angle >= -36 && angle < 36) {
        image.classList.add("active");
      }
    });
  });

  return (
    <>
      <div class="gallery">
        <div class="image-container">
          <img src="https://picsum.photos/id/1000/400/400" alt="Image" />
        </div>
        <div class="image-container">
          <img src="https://picsum.photos/id/1002/400/400" alt="Image" />
        </div>
        <div class="image-container">
          <img src="https://picsum.photos/id/1003/400/400" alt="Image" />
        </div>
        <div class="image-container">
          <img src="https://picsum.photos/id/1004/400/400" alt="Image" />
        </div>
        <div class="image-container">
          <img src="https://picsum.photos/id/1005/400/400" alt="Image" />
        </div>
      </div>
    </>
  );
}
