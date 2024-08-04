import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import tempimg1 from "./assets/converter-img.png";
import AppLinks from "./components/applink";
function App() {
  const [count, setCount] = useState(0);

  const [opacity, setOpacity] = useState(1);

  const [bgColor, setBgColor] = useState({ r: 233, g: 33, b: 34 });

  useEffect(() => {
    const handleScroll = () => {
      const fadeElement = document.querySelector(".main-heading");
      const rect = fadeElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const distanceFromBottom = windowHeight - rect.bottom;
      const startFade = windowHeight * 0.4;
      const endFade = windowHeight * 0.6;

      const secondPage = document.querySelector(".second-page");

      const rect2 = secondPage.getBoundingClientRect();
      const secondPageHeight = secondPage.scrollHeight / 8;
      const appLinks = document.querySelector("app-links");
      const wave = document.querySelector("Wave");
      if (rect2.top <= 0) {
        const percentage = 1 - (-1 * rect2.top) / secondPageHeight;
        const color1 = `rgb(${percentage * 233},${percentage * 33},${
          percentage * 34
        })`;
        const color2 = `rgb(${percentage * 255},${percentage * 255},${
          percentage * 255
        })`;
        secondPage.style.backgroundColor = color1;
        appLinks.style.backgroundColor = color1;
        secondPage.style.color = color2;
        console.log(secondPage.style.color);
      } else {
        secondPage.style.backgroundColor = `rgb(${233},${33},${34})`;
      }
      // const secondRect = secondPage.getBoundingClientRect();
      // const sDistanceFromtop = rect.top;
      // if(sDistanceFromtop<0){
      //   console.log(sDistanceFromtop);
      //   const newDistance = -1* sDistanceFromtop/windowHeight;
      //   setBgColor({r: newDistance*233, g:33*newDistance, b : 34*newDistance });
      // }

      if (distanceFromBottom >= startFade && distanceFromBottom <= endFade) {
        const newOpacity =
          1 - (distanceFromBottom - startFade) / (endFade - startFade);
        setOpacity(newOpacity);
      } else if (distanceFromBottom > endFade) {
        setOpacity(0);
      } else {
        setOpacity(1);
      }
    };
    // const element = document.querySelector('.my-element');
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="body bg-[rgb(0,0,0)] w-screen ">
        {<Header />}

        <div className="intro w-full pt-10 text-white text-5xl font-semibold  h-screen transition-all duration-300ms">
          <h1
            style={{ opacity }}
            className="text-center w-full pt-10 font-bold text-6xl z-0 main-heading"
          >
            {" "}
            <span className="text-6xl text-[rgb(233,33,34)]"> SQUISH</span> is
            
            <br /> conversation <br /> at the speed of culture
          </h1>
        </div>
        <div className="second-page h-screen w-full relative">
          <div className="Ocean w-full overflow-hidden absolute">
            <svg className="Wave" viewBox="0 0 12960 1120">
              <path d="M9720,320C8100,320,8100,0,6480,0S4860,320,3240,320,1620,0,0,0V1120H12960V0C11340,0,11340,320,9720,320Z">
                <animate
                  dur="3s"
                  repeatCount="indefinite"
                  attributeName="d"
                  values="
            M9720,320C8100,320,8100,0,6480,0S4860,320,3240,320,1620,0,0,0V1120H12960V0C11340,0,11340,320,9720,320Z;
            M9720,0C8100,0,8100,319,6480,319S4860,0,3240,0,1620,320,0,320v800H12960V320C11340,320,11340,0,9720,0Z;
            M9720,320C8100,320,8100,0,6480,0S4860,320,3240,320,1620,0,0,0V1120H12960V0C11340,0,11340,320,9720,320Z
          "
                />
              </path>
            </svg>
          </div>
          <div className="flex h-screen w-full items-center justify-center">
            <div className="flex gap-8 font-bold items-center flex-wrap items-center justify-center">
              <img src={tempimg1} className="h-96" />
              <div className="text-3xl ">
                Experience the author in front of <div>YOU!</div>
              </div>
            </div>
          </div>
        </div>

        <AppLinks />
        <Footer />
      </div>
    </>
  );
}

export default App;
