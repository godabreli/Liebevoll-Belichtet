import { useState } from "react";
import { motion } from "framer-motion";
import "./Carousel.css";

export const Carousel = ({
  data,
  setCurretImage,
  currentImage,
  carouselVisible,
  setCarouselVisible,
}) => {
  const prevImage =
    currentImage === 0 ? data[data.length - 1] : data[currentImage - 1];
  const nextImage =
    currentImage === data.length - 1 ? data[0] : data[currentImage + 1];

  const images = [prevImage, data[currentImage], nextImage];

  const [translateDiv, setTranslateDiv] = useState("0%");

  const right = function () {
    setTranslateDiv("-33.33%");
    setTimeout(() => {
      currentImage === data.length - 1
        ? setCurretImage(0)
        : setCurretImage(currentImage + 1);
      setTranslateDiv("0%");
    }, 400);
  };

  const left = function () {
    setTranslateDiv("33.33%");
    setTimeout(() => {
      currentImage === 0
        ? setCurretImage(data.length - 1)
        : setCurretImage(currentImage - 1);
      setTranslateDiv("0%");
    }, 400);
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
      <span className={"zeller"}>
        {currentImage + 1}/{data.length}
      </span>
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
          style={{
            height: window.innerHeight,
            width: window.innerWidth * 3,
            translate: "-33.33%",
          }}
        >
          <motion.div
            className="carouselWrapper"
            key={currentImage}
            style={{ height: window.innerHeight, width: window.innerWidth * 3 }}
            initial={{ x: translateDiv }}
            animate={{ x: translateDiv }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.7}
            onDragEnd={(e, info) => {
              if (info.offset.x > 150) {
                left();
              }
              if (info.offset.x < -150) {
                right();
              }
            }}
          >
            {images.map((img, i) => {
              const divHeight =
                window.innerWidth > window.innerHeight
                  ? window.innerHeight * 0.95
                  : window.innerWidth * 0.97 * (img.height / img.width);

              const divWidth =
                window.innerWidth < window.innerHeight
                  ? window.innerWidth * 0.97
                  : (window.innerHeight * 0.95) / (img.height / img.width);

              return (
                <div className="carouselItem" key={i}>
                  <div
                    className={
                      "carouselImageWrapper carouselImageWrapper-visible"
                    }
                    style={{
                      backgroundImage:
                        "url(Pictures/WeddingGaleryImages/" +
                        img.imageName +
                        ")",
                      backgroundSize: "cover",
                      height: divHeight,
                      width: divWidth,
                    }}
                  />
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
