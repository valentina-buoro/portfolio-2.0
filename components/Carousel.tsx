import React, { useState, useEffect } from "react";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically advance to the next slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000); // Change interval time as needed
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="carousel-container">
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div className="carousel-item" key={index}>
            {/* Render carousel items */}
            <h2 className="text-3xl mb-4">{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <style jsx>{`
        .carousel-container {
          overflow: hidden;
        }

        .carousel-track {
          display: flex;
          transition: transform 0.5s ease-in-out;
        }

        .carousel-item {
          width: 100%;
          flex-shrink: 0;
        }
      `}</style>
    </div>
  );
};

export default Carousel;
