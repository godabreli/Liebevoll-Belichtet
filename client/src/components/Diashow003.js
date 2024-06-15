import { useEffect, useState } from "react";
import "./Diashow003.css";

export const Diashow003 = () => {
  const diashow01Src = [
    "Pictures/diashow03-01.jpg",
    "Pictures/diashow03-02.jpg",
    "Pictures/diashow03-03.jpg",
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
    <div className="diashow03">
      <div className="diashow-wrapper03">
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
