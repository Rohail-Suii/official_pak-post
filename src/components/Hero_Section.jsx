import React, { useState, useEffect } from 'react';
import { Hero_Section_Pics } from '../pak_post_data/data'

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % Hero_Section_Pics.length);
    }, 3000); // Change image every 3 seconds

    return () => {
      clearInterval(interval);
    };
  }, [Hero_Section_Pics.length]);

  return (
    <div className="">
      <div>
        <img src={Hero_Section_Pics[currentImage].image} alt="hero section" className={`h-[300px] w-full  transition-opacity duration-500 `} />
      </div>
    </div>
  );
};

export default HeroSection;


// {Hero_Section_Pics.map((image, index) => (
//   <img
//     key={index}
//     src={image.image}
//     alt={`Image ${index}`}
//     className={`h-[300px] w-full  transition-opacity duration-500 ${
//       index === currentImage ? 'opacity-100' : 'opacity-0'
//     }`}
//   />
// ))}