import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

// 🎥 videos
import video1 from "../Videos/Ipanema-beach-brasil.mp4";
import video2 from "../Videos/Pavilin-qualalampur-Malaysia.mp4";

const videos = [video1, video2];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  //  Auto slide (10 sec)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % videos.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? videos.length - 1 : prev - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full 
    h-[50vh] sm:h-[55vh] md:h-[65vh] lg:h-[70vh] 
    overflow-hidden rounded-lg md:rounded-xl">

      {/*  Video */}
      <video
        key={currentIndex}
        src={videos[currentIndex]}
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover"
      />

      {/*  Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
      {/* change z-10 to 0 */}
      {/*  Content */}
      <div className="relative z-0 flex flex-col justify-center items-center h-full text-center text-white px-4">

        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4">
          Welcome to Project Temporary
        </h1>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-xl">
          Discover amazing features!
        </p>

      </div>
      {/* chane z-20 to 0  */}
      {/*  Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-3 md:left-4 top-1/2 -translate-y-1/2 z-0
        bg-black/40 backdrop-blur-md
        w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14
        flex items-center justify-center
        rounded-full hover:scale-110 hover:bg-black
        transition-all duration-300"
      >
        <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" strokeWidth={2.5} />
      </button>
      {/* z-20 to 0 */}
      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-3 md:right-4 top-1/2 -translate-y-1/2 z-0
        bg-black/40 backdrop-blur-md
        w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14
        flex items-center justify-center
        rounded-full hover:scale-110 hover:bg-black
        transition-all duration-300"
      >
        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" strokeWidth={2.5} />
      </button>
      {/* change z-20 to 0 */}
      {/*  Dots */}
      <div className="absolute bottom-3 sm:bottom-4 md:bottom-5 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-0">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`rounded-full transition-all
              w-2 h-2 sm:w-3 sm:h-3
              ${currentIndex === index
                ? "bg-purple-500 scale-125"
                : "bg-gray-400"
              }`}
          />
        ))}
      </div>

    </div>
  );
};

export default Banner;