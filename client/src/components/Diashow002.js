import { useEffect, useState } from "react";
import "./Diashow002.css";

export const Diashow002 = () => {
  const diashow01Src = [
    "./pictures/diashow02-01.jpg",
    "./pictures/diashow02-02.jpg",
    "./pictures/diashow02-03.jpg",
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
    <div className="diashow02">
      <div className="diashow-wrapper02">
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
