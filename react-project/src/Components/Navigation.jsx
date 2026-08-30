
import React, { useState, useEffect } from "react";
import defaultSliderImg from "../assets/image/slider.png";
import "./Navigation.css"


export const Navigation = ({
  slides = [],
  autoPlay = true,
  interval = 5000
}) => {
  const [current, setCurrent] = useState(0);

  const length = slides.length;

  // Auto Play
  useEffect(() => {
    if (!autoPlay || length <= 1) return;

    const slideInterval = setInterval(() => {
      setCurrent((prev) => {
        return prev === length - 1 ? 0 : prev + 1;
      });
    }, interval);

    return () => clearInterval(slideInterval);
  }, [autoPlay, interval, length]);

  // Previous Slide
  const prevSlide = () => {
    setCurrent((prev) => {
      return prev === 0 ? length - 1 : prev - 1;
    });
  };

  // Next Slide
  const nextSlide = () => {
    setCurrent((prev) => {
      return prev === length - 1 ? 0 : prev + 1;
    });
  };

  // No slides
  if (length === 0) {
    return <p>No slides available</p>;
  }

  return (
    <section className="slider">

      <div className="slide active">
        <img
          src={slides[current].image || defaultSliderImg}
          alt={slides[current].alt || `Slide ${current + 1}`}
          className="image"
        />
      </div>

      
      <div className="indicators">
        {slides.map((_, index) => (
          <span
            key={index}
            className={
              index === current
                ? "dot active-dot"
                : "dot"
            }
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>

      
      <button
        className="arrow left-arrow"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        Previous
      </button>

      
      <button
        className="arrow right-arrow"
        onClick={nextSlide}
        aria-label="Next slide"

      >
        Next
      </button>

    </section>
  );
};