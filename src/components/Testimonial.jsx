import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import { testimonials } from "../content/testimonial";
import { useState } from "react";
import { useEffect } from "react";

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStartPos, setTouchStartPos] = useState(0);
  const [touchEndPos, setTouchEndPos] = useState(0);
  const ignoreTouch = 30;
  const testimSpeed = 4500;

  const numSlides = testimonials.length;

  const playSlide = (slide) => {
    if (slide < 0) {
      slide = numSlides - 1;
    } else if (slide >= numSlides) {
      slide = 0;
    }
    setCurrentSlide(slide);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      playSlide(currentSlide + 1);
    }, testimSpeed);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  const handleArrowClick = (direction) => {
    if (direction === "left") {
      playSlide(currentSlide + 1);
    } else {
      playSlide(currentSlide - 1);
    }
  }

  const handleDotClick = (index) => {
    playSlide(index);
  };

  return (
    <section id="testimonial" className="mt-6">
      <div className="relative w-full max-w-[1020px] py-10 px-5 m-auto">
        <span
          id="right-arrow"
          className="block w-8 h-8 absolute top-[50%] right-4 cursor-pointer"
          onClick={() => handleArrowClick("left")}
        >
          <MdOutlineKeyboardArrowRight className="text-5xl hover:text-green-500" />
        </span>
        <span
          id="left-arrow"
          className="block w-8 h-8 absolute top-[50%] -left-2 cursor-pointer"
          onClick={() => handleArrowClick("right")}
        >
          <MdOutlineKeyboardArrowLeft className="text-5xl hover:text-green-500" />
        </span>

        <ul
          id="testim-dots"
          className="text-center absolute w-full h-3 bottom-16 left-0 block z-30"
        >
          {testimonials.map((_, index) => (
            <li
              key={index}
              className={`inline-block w-3 h-3 rounded-[50%] border border-green-400 my-0 mx-3 cursor-pointer transition-all duration-500 ease-out relative ${index === currentSlide ? 'bg-green-500' : 'bg-white'}`}
              onClick={() => handleDotClick(index)}
            ></li>
          ))}
        </ul>

        <div id="testim-content" className="relative">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`text-center absolute top-0 left-0 pb-16 ${
                index !== currentSlide
                  ? "opacity-0 inactive"
                  : "opacity-100 relative active"
              }`}
            >
              <div className="img">
                <img
                  src={testimonial.img}
                  alt=""
                  className="block w-24 h-24 m-auto rounded-[50%]"
                />
              </div>
              <h4 className="text-lg font-medium my-4 mx-0 text-green-600">
                {testimonial.name}
              </h4>
              <p className="text-xl w-4/5 m-auto">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
