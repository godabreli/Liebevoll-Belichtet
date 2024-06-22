import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Galerie } from "./components/Galerie";
import { Home } from "./components/Home";
import { Kontakt } from "./components/Kontakt";
import { Uebermich01 } from "./components/Uebermich01";
import { MobileNavBar } from "./components/MobileNavBar";
import { Carousel } from "./components/Carousel";
import { Footer } from "./components/Footer";
import { Impressum } from "./components/Impressum";
import { Datenschutz } from "./components/Datenschutz";

import { useState } from "react";

import "./App.css";

function App() {
  const [mobNavBarVisible, setMobNavBarVisible] = useState(false);
  const [carouselVisible, setCarouselVisible] = useState(false);
  const [currentImage, setCurretImage] = useState(0);

  return (
    <>
      {carouselVisible ? (
        <Carousel
          setCurretImage={setCurretImage}
          currentImage={currentImage}
          carouselVisible={carouselVisible}
          setCarouselVisible={setCarouselVisible}
        />
      ) : null}
      {mobNavBarVisible ? (
        <MobileNavBar
          mobNavBarVisible={mobNavBarVisible}
          setMobNavBarVisible={setMobNavBarVisible}
        />
      ) : null}

      <Navbar
        mobNavBarVisible={mobNavBarVisible}
        setMobNavBarVisible={setMobNavBarVisible}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Galerie"
          element={
            <Galerie
              setCarouselVisible={setCarouselVisible}
              carouselVisible={carouselVisible}
              currentImage={currentImage}
              setCurretImage={setCurretImage}
            />
          }
        />
        <Route path="/Uebermich" element={<Uebermich01 />} />
        <Route path="/Kontakt" element={<Kontakt />} />
        <Route path="/Impressum" element={<Impressum />} />
        <Route path="/Dazenschutzerklaerung" element={<Datenschutz />} />
        <Route path="/*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
