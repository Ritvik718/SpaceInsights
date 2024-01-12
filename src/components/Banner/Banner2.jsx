import React from "react";
import sateliteImg from "../../assets/satellite1.webp";

export default function Banner2() {
  return (
    <div className="bg-black text-white pb-12 reletive z-50">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          <div className="space-y-3 xl:pr-36 p-4 border-l-2 border-b-2 border-l-sky-800 border-b-sky-800">
            <p data-aos="fade-up" className="text-sky-800 uppercase">
              Mars Orbiter Mission
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="300"
              className="uppercase text-5xl"
            >
              Mangalyaan
            </h1>
            <p data-aos="fade-up" data-aos-delay="500">
              Launched in November 2013, Mangalyaan was India's first venture
              into interplanetary space. Developed on a limited budget by ISRO,
              it successfully entered Mars' orbit in its first attempt, making
              India the first Asian country to do so. This mission showcased
              India's technological prowess and cost-effective approach in the
              field of space exploration.
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="700"
              className="primary-button"
            >
              Learn More
            </button>
          </div>
          <div data-aos="zoom-in">
            <img src={sateliteImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
