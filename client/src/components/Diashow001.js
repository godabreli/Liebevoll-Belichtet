import { useEffect, useState } from "react";
import "./diashow001.css";

export const Diashow001 = () => {
  const diashow01Src = [
    "./pictures/diashow01-01.jpg",
    "./pictures/diashow01-02.jpg",
    "./pictures/diashow01-03.jpg",
    "./pictures/diashow01-04.jpg",
    "./pictures/diashow01-05.jpg",
  ];

  const [currentImage, setCurretImage] = useState(0);

  useEffect(() => {
    setTimeout(slide, 5000);
  });

  const slide = () => {
    currentImage === diashow01Src.length - 1
      ? setCurretImage(0)
      : setCurretImage(currentImage + 1);
  };

  return (
    <div className="diashow">
      <div className="diashow-wrapper">
        {diashow01Src.map((image, index) => {
          return (
            <div
              className={
                index === currentImage
                  ? "imageWrapper imageWrapper-active"
                  : "imageWrapper"
              }
              key={index}
            >
              <img
                src={image}
                alt="Hochzeits Fotografie"
                className="diashow-image"
              ></img>
            </div>
          );
        })}
      </div>
    </div>
  );
};
