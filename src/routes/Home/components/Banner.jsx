import React from "react";
import { Link } from "react-router-dom";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import imageHome from "../../../assets/images/home/home12.PNG"

function Banner() {
  let options = {
    autoplay: true,
    rewind: true,
  };
  return (
    <div className="relative h-[90vh]">
      <Splide hasTrack={false} aria-label="Interior Images" options={options}>
        <div className="custom-wrapper"/>
        <SplideTrack>
          <SplideSlide>
            <div>
              <div className='absolute w-full h-full bg-black opacity-50'></div>
              <img
                src={imageHome}
                alt="interior image"
                className="h-full w-full object-cover"
              />
              <h1 className="font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl" style={{ fontSize: "160%", textAlign: "center", transform: "translate(-50%, -50%)" }}>
                CONNECTEZ-VOUS A L'AVENIR : l'INFORMATION, EDUCATION, SENSIBILISATION !!
              </h1>
              <button className="absolute top-[65%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer border-2 border-proj-white p-2 text-proj-white">
                <Link to="/apropos">
                  <h1 className="text-white">En savoir plus</h1>
                </Link>
              </button>
            </div>
          </SplideSlide>
        </SplideTrack>
      </Splide>
    </div>
  );
}

export default Banner;
