import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Carousel.css";

export const Carousel = ({
  data,
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
    <motion.div
      className="carousel"
      initial={{ y: 100 + "%" }}
      animate={{ y: 0 }}
      exit={{ y: 100 + "%" }}
      transition={{
        // type: "tween",
        duration: 1,
        ease: "anticipate",
      }}
    >
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
      <div className="carouselDisplay">
        <div
          className="carouselWrapper"
          style={{ translate: `${-100 * currentImage}%` }}
        >
          {data.map((img, i) => {
            if (window.innerWidth > window.innerHeight) {
              divHeight = window.innerHeight * 0.95;
              divWidth = divHeight / (img.height / img.width);
            } else {
              divWidth = window.innerWidth * 0.97;
              divHeight = divWidth * (img.height / img.width);
            }
            return (
              <div className="carouselItem" key={i}>
                <div
                  className={
                    "carouselImageWrapper carouselImageWrapper-visible"
                  }
                  style={{
                    backgroundImage:
                      "url(Pictures/WeddingGaleryImages/" + img.imageName + ")",
                    backgroundSize: "cover",
                    height: divHeight,
                    width: divWidth,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};
