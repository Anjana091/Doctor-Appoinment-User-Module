import React, { useEffect, useState } from "react";
import med1 from '../assests/med1.jpg';
import med2 from '../assests/med2.jpg';
import med3 from '../assests/med3.jpg';
import "./Slider.css";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideData = [
    {
      src: med1,
      title: "Slide 1",
      copy: "Add Contents Here"
    },
    {
      src: med2,
      title: "Slide 2",
      copy: "Add Contents Here"
    },
    {
      src: med3,
      title: "Slide 3",
      copy: "Add Contents Here"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slideData.length);
  };

  const previousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slideData.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    const autoplay = setInterval(nextSlide, 3500);
    return () => clearInterval(autoplay);
  }, []);

  return (
    <div className="slider">
      {slideData.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? "current" : ""}`}
          style={{ backgroundImage: `url(${slide.src})` }}
        >
          <div className="caption">
            <h1>{slide.title}</h1>
            <div className="caption-copy">{slide.copy}</div>
          </div>
        </div>
      ))}
      <button className="arrow previous" onClick={previousSlide}>
        &lt;
      </button>
      <button className="arrow next" onClick={nextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default Slider;