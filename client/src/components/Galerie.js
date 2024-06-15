import React, { useEffect, useState } from "react";
import "./galerie.css";
import data from "./MyWeddingGaleryImages.json";

export const Galerie = ({
  currentImage,
  setCurretImage,
  carouselVisible,
  setCarouselVisible,
}) => {
  const [galeryWrapperWidth, setGaleryWrapperWidth] = useState(
    window.innerWidth * 0.75
  );

  useEffect(() => {
    const handleResize = function () {
      setGaleryWrapperWidth(() => {
        if (window.innerWidth > 700) return window.innerWidth * 0.75;
        if (window.innerWidth < 700 && window.innerWidth > 500)
          return window.innerWidth * 0.83;
        if (window.innerWidth < 550) return window.innerWidth * 0.9;

        // : window.innerWidth * 0.92;
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const startCarousel = function (e) {
    setCurretImage(Number(e.target.dataset.id));
    setCarouselVisible(!carouselVisible);
  };

  let columns = 3;
  let gap = 8;
  // let galeryWrapperWidth = window.innerWidth * 0.75;
  if (window.innerWidth <= 600) columns = 2;
  if (window.innerWidth <= 700) gap = 5;

  const imageDivWidth = (galeryWrapperWidth - (columns - 1) * gap) / columns;
  const imageDivheights = [];
  const calcTops = new Array(columns).fill(0);
  let column = 0;

  const topsLefts = data.map((img) => {
    const top = calcTops[column];
    const left = column * imageDivWidth + column * gap;
    const imageDivheight = imageDivWidth * (img.height / img.width);
    imageDivheights.push(imageDivheight);

    calcTops[column] += imageDivheight + gap;

    column === columns - 1 ? (column = 0) : column++;
    return { top, left };
  });

  const galeryWrapperHeight = Math.max(...calcTops);

  return (
    <div
      className="galerieWrapper"
      style={{
        width: galeryWrapperWidth + "px",
        height: galeryWrapperHeight + "px",
      }}
    >
      {data.map((img, ind) => (
        <div
          onClick={startCarousel}
          className="galeryImageWrapper"
          key={ind}
          style={{
            top: topsLefts[ind].top + "px",
            left: topsLefts[ind].left + "px",
            width: imageDivWidth + "px",
            height: imageDivheights[ind] + "px",
          }}
        >
          <img
            data-id={ind}
            className="galeryImage"
            src={"Pictures/WeddingGaleryImages/" + img.imageName}
            alt="Hochzeitsfoto"
          />
        </div>
      ))}
    </div>
  );
};
