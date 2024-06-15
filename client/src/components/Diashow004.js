import { useEffect, useState } from "react";
import "./Diashow004.css";

export const Diashow004 = () => {
  const diashow01Src = [
    "Pictures/diashow04-01.jpg",
    "Pictures/diashow04-02.jpg",
    "Pictures/diashow04-03.jpg",
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
    <div className="diashow04">
      <div className="diashow-wrapper04">
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
