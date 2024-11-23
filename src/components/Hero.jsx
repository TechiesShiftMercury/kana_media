import { useState } from "react";

import hero_img from "../assets/kana_media_hero.png";
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { PiYoutubeLogoBold } from "react-icons/pi";

const Hero = () => {
  const [hoveredIcon, setHoveredIcon] = useState("");

  const handleMouseEnter = (name) => {
    setHoveredIcon(name);
  };

  const handleMouseLeave = () => {
    setHoveredIcon("");
  };

  return (
    <section className="relative">
      <div className="h-dvh w-full sticky top-0 left-0 z-30 grid place-items-center">
        <img src={hero_img} alt="" className="w-[555px]" />
      </div>
      {/* <div className="h-dvh w-full absolute top-0 bg-black opacity-70 md:opacity-60"></div> */}
      <div className="h-dvh w-full absolute top-0 z-40">
        <div className="my-44 md:mt-40 md:mb-20 mx-10 md:ml-28 md:mr-12 flex justify-center md:justify-between items-center text-center md:text-start">
          <div>
            <p className="text-xs font-medium md:text-base tracking-wide uppercase text-gray-500 mt-4 md:my-0">
              Welcome to Kana Media
            </p>
            <h1 className="text-5xl md:text-8xl leading-snug md:leading-tight mt-4 md:mt-1 mb-8 md:mb-8">
              <span className="text-4xl md:text-7xl">Capturing Moments</span>, <br /> Crafting Memories
            </h1>
            <p className="hidden md:block max-w-[35ch] md:max-w-[75ch] text-justify mx-auto md:mx-0">
              At Kana Media Food, we specialize in delivering high-quality
              photography and videography services for every occasion. Let us
              transform your special events into lasting memories with our
              professional touch and creative vision.
            </p>
            <div className="flex flex-col items-center md:flex-row gap-3 mt-6 md:mt-12">
              <button className="hover:bg-white hover:text-gray-900 border-2 text-gray-100 w-3/4 md:w-1/4 p-2 text-base font-medium tracking-wide transition duration-300 ease-in-out">
                some
              </button>
              <button className="hover:bg-white hover:text-gray-900 border-2 text-gray-100 w-3/4 md:w-1/4 p-2 text-base font-medium tracking-wide transition duration-300 ease-in-out">
                some
              </button>
            </div>
          </div>
          <div className="hidden h-40 md:flex flex-col items-center justify-around">
            <div
              className="relative flex justify-between items-center gap-2 group"
              onMouseEnter={() => handleMouseEnter("instagram")}
              onMouseLeave={handleMouseLeave}
            >
              <BiLogoInstagram className="text-2xl" />
              <span
                className={`absolute right-6 text-base text-green-600 px-2 py-1 capitalize transition-all duration-300 ease-in-out ${
                  hoveredIcon === "instagram"
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-4"
                }`}
              >
                Instagram
              </span>
            </div>
            <div
              className="relative flex justify-between items-center gap-2 group"
              onMouseEnter={() => handleMouseEnter("facebook")}
              onMouseLeave={handleMouseLeave}
            >
              <BiLogoFacebookSquare className="text-2xl" />
              <span
                className={`absolute right-6 text-base text-green-600 px-2 py-1 capitalize transition-all duration-300 ease-in-out ${
                  hoveredIcon === "facebook"
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-4"
                }`}
              >
                Facebook
              </span>
            </div>
            <div
              className="relative flex justify-between items-center gap-2 group"
              onMouseEnter={() => handleMouseEnter("youtube")}
              onMouseLeave={handleMouseLeave}
            >
              <PiYoutubeLogoBold className="text-2xl" />
              <span
                className={`absolute right-6 text-base text-green-600 px-2 py-1 capitalize transition-all duration-300 ease-in-out ${
                  hoveredIcon === "youtube"
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-4"
                }`}
              >
                YouTube
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
