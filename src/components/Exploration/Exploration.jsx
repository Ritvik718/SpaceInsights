import React from "react";
import { FaReact } from "react-icons/fa";
import { FaShuttleSpace, FaSpaceAwesome } from "react-icons/fa6";
import wave from "../../assets/wave.gif";

export default function Services() {
  const ServiceData = [
    {
      title: "Orbiter",
      content: "2,379 kilograms",
      description:
        "Equipped with instruments like the Terrain Mapping Camera-2 (TMC-2) and Dual Frequency Synthetic Aperture Radar (DFSAR), the orbiter continues to study the Moon's surface.",
      icon: <FaReact className="text-7xl" />,
      aosDelay: "300",
    },
    {
      title: "Lander (Vikram)",
      content: "1,471 kilograms",
      description:
        "Vikram, the lander, carried instruments including the Instrument for Lunar Seismic Activity (ILSA) and Chandra's Surface Thermo-physical Experiment (ChaSTE) to study lunar seismic activity and surface thermal properties.",
      icon: <FaSpaceAwesome className="text-7xl" />,
      aosDelay: "500",
    },
    {
      title: "Rover (Pragyan)",
      content: "27 kilograms",
      description:
        "Pragyan, the rover, featured instruments like the Alpha Particle X-ray Spectrometer (APXS) and Laser-Induced Breakdown Spectroscope (LIBS) for elemental analysis and soil composition on the Moon.",
      icon: <FaShuttleSpace className="text-7xl" />,
      aosDelay: "700",
    },
  ];
  return (
    <div className="bg-black text-white relative z-50">
      <div className="container">
        <div className="min-h-[400px]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
            {ServiceData.map((data, index) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="min-h-[180px] flex flex-col gap-2 justify-center items-center bg-sky-900/60 rounded-xl backdrop-blur-sm text-center text-2xl py-8 px-3 w-full lg:w-[300px] mx-auto"
              >
                {data.icon}
                <h1>{data.title}</h1>
                <p>{data.content}</p>
                <p className="text-sm">{data.description}</p>
              </div>
            ))}
          </div>
          <img
            src={wave}
            alt=""
            className="h-[200px] w-full object-cover mix-blend-screen -translate-y-24 relative z-[0]"
          />
        </div>
      </div>
    </div>
  );
}
