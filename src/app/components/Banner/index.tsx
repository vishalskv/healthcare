"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const slides = [
  {
    heading: "Smart Sale",
    sub: "UP to ",
    highlight: "40% off",
    cta: "Shop Now",
    image: "/assets/slide1.jpg",
    note: "Shop Now!",
  },
  {
    heading: "Stay Healthy",
    sub: "UP to ",
    highlight: "50% off",
    cta: "Explore Deals",
    image: "/assets/slide2.jpg",
    note: "Don’t Miss Out!",
  },
];

export default function Banner() {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    duration: 1000,
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
  });

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      instanceRef.current?.next();
    }, 5000);
    return () => clearInterval(timer);
  }, [instanceRef]);

  return (
    <section className="relative overflow-hidden">
      <div ref={sliderRef} className="keen-slider">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className="keen-slider__slide bg-cover bg-center bg-no-repeat min-h-[80vh] flex items-center px-12 md:px-36 py-48"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            {/* Animate only active slide's text */}
            {currentSlide === idx && (
              <motion.div
                key={currentSlide} // force re-animation
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-left"
              >
                <p className="text-sm text-gray-700">{slide.note}</p>
                <h1 className="text-4xl md:text-7xl font-bold text-gray-900">
                  {slide.heading}
                </h1>
                <p className="text-2xl text-gray-700 mt-2">
                  {slide.sub}
                  <span className="text-cyan-500 font-bold">
                    {slide.highlight}
                  </span>
                </p>
                <button className="mt-6 px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition">
                  {slide.cta}
                </button>
              </motion.div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
        <button
          onClick={() => instanceRef.current?.prev()}
          className="bg-white/70 hover:bg-white text-gray-800 p-2 rounded-full shadow"
        >
          ◀
        </button>
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
        <button
          onClick={() => instanceRef.current?.next()}
          className="bg-white/70 hover:bg-white text-gray-800 p-2 rounded-full shadow"
        >
          ▶
        </button>
      </div>
    </section>
  );
}
