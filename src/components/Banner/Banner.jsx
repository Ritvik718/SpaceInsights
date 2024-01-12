import React from "react";
import satelliteImg from "../../assets/satellite.webp";

export default function Banner() {
  return (
    <div className="bg-black text-white pb-12 reletive z-50">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          <div>
            <img
              data-aos="zoom-in"
              src={satelliteImg}
              alt=""
              className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"
            />
          </div>
          <div className="space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800">
            <p data-aos="fade-up" className="text-sky-800 uppercase">
              Lunar exploration mission
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="300"
              className="uppercase text-5xl"
            >
              Chandrayaan 2
            </h1>
            <p data-aos="fade-up" data-aos-delay="300">
              Launched in July 2019, Chandrayaan-2 represented India's second
              lunar exploration mission. Developed by ISRO, it included an
              orbiter, lander (Vikram), and rover (Pragyan). While the lander
              encountered communication issues during the descent, the orbiter
              continues to provide valuable data about the Moon.
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="700"
              className="primary-button"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
