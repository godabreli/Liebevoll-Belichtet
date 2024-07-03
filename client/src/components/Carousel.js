import { useEffect, useState } from "react";
import "./Carousel.css";
import data from "./MyWeddingGaleryImages.json";

export const Carousel = ({
  setCurretImage,
  currentImage,
  carouselVisible,
  setCarouselVisible,
}) => {
  let divHeight = 0;
  let divWidth = 0;
  const [play, setPlay] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (play) right();
    }, 3000);
  });

  const right = function () {
    currentImage === data.length - 1
      ? setCurretImage(0)
      : setCurretImage(currentImage + 1);
  };

  const left = function () {
    currentImage === 0
      ? setCurretImage(data.length - 1)
      : setCurretImage(currentImage - 1);
  };

  return (
    <div className="carousel">
      <span
        className={play ? "icon-pause2 play" : "icon-play3 play"}
        onClick={() => setPlay(!play)}
      ></span>
      <span
        className="xButton"
        onClick={() => setCarouselVisible(!carouselVisible)}
      >
        &times;
      </span>
      <div className="buttonLinks button" onClick={left}>
        ❮
      </div>
      <div className="buttonRechts button" onClick={right}>
        ❯
      </div>
      {data.map((img, i) => {
        if (window.innerWidth > window.innerHeight) {
          divHeight = window.innerHeight * 0.95;
          divWidth = divHeight / (img.height / img.width);
        } else {
          divWidth = window.innerWidth * 0.97;
          divHeight = divWidth * (img.height / img.width);
        }
        return (
          <div
            className={
              i === currentImage
                ? "carouselImageWrapper carouselImageWrapper-visible"
                : "carouselImageWrapper"
            }
            key={i}
            style={{
              backgroundImage:
                "url(Pictures/WeddingGaleryImages/" + img.imageName + ")",
              backgroundSize: "cover",
              height: divHeight,
              width: divWidth,
            }}
          ></div>
        );
      })}
      {/* </div> */}
    </div>
  );
};
