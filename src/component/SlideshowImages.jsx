import React, { useState } from 'react';
import '../styles/SlideshowImages.css'; // Importing the CSS file

const SlideshowImages = () => {
  const images = [
    'https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630',
    'https://plus.unsplash.com/premium_photo-1673306778968-5aab577a7365?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFja2dyb3VuZCUyMGltYWdlfGVufDB8fDB8fHww',
    // Aur images add karein
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slider">
      <button className="prev-button" onClick={prevSlide}>
        &#10094; {/* Previous arrow */}
      </button>
      <img src={images[currentIndex]} alt="slideshow" className="slide-image" />
      <button className="next-button" onClick={nextSlide}>
        &#10095; {/* Next arrow */}
      </button>
    </div>
  );
};

export default SlideshowImages;
