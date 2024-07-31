import React, { useEffect, useState } from "react";
import "./galerie.css";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const fetchURL =
  process.env.NODE_ENV === "production"
    ? "/api/getGaleryData"
    : " http://localhost:5000/api/getGaleryData";

export const Galerie = ({
  data,
  setData,
  currentImage,
  setCurretImage,
  carouselVisible,
  setCarouselVisible,
}) => {
  const [galeryWrapperWidth, setGaleryWrapperWidth] = useState(
    window.innerWidth > 700 ? window.innerWidth * 0.78 : window.innerWidth * 0.9
  );

  useEffect(() => {
    async function setGaleryData() {
      try {
        const imageDate = await fetch(fetchURL);
        const imageDataObject = await imageDate.json();
        setData(imageDataObject);
      } catch (err) {
        console.log(err);
      }
    }
    setGaleryData();
  });

  useEffect(() => {
    const handleResize = function () {
      setGaleryWrapperWidth(() => {
        if (window.innerWidth > 700) return window.innerWidth * 0.78;
        if (window.innerWidth < 700) return window.innerWidth * 0.9;
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
    <>
      <Helmet>
        <title>Hochzeitsfotos für Inspiration</title>
        <meta
          name="description"
          content="Eine Galerie von unvergeslichen Momenten. Hochzeitsfotos die begeistern.  "
        />
        <link rel="canonical" href="https://liebevollbelichtet.de/Galerie" />
      </Helmet>
      <div
        className="galerieWrapper"
        style={{
          width: galeryWrapperWidth + "px",
          height: galeryWrapperHeight + "px",
        }}
      >
        {data.map((img, ind) => (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.2,
              type: "spring",
              damping: 8,
              stiffness: 80,
              delay: ind * 0.1,
            }}
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
              onClick={startCarousel}
              data-id={ind}
              className="galeryImage"
              src={"Pictures/WeddingGaleryImages/" + img.imageName}
              alt="Hochzeitsfoto"
            />
          </motion.div>
        ))}
      </div>
    </>
  );
};
