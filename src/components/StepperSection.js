import React, { useState } from 'react';
import HeroSlider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { PrevArrow, NextArrow } from './arrowcomponent';

const images = [
  {
    src: 'https://appstirr.com/assets/images/alhersh-icon.png',
    ImagesShow: 'https://www.appstirr.com/assets/images/portfolio1.webp',
    heading: 'SongMatch',
    text:
      'Songmatch is a dating application for people of all ages. It is different from other dating apps because it uses your interest in music to connect you with a partner. It registers users’ preferences in music and matches it with the interests of other people to find someone with common music interests.',
  },
  {
    src: 'https://www.appstirr.com/assets/images/switch-poker-icon.png',
    ImagesShow: 'https://www.appstirr.com/assets/images/portfolio2.webp',
    heading: 'Al-Hersh',
    text:
      'Al-Hersh allows users to purchase grocery items from the e-commerce mobile application and have them delivered at their doorstep. It offers one of a kind online farmers market for fresh fruits and vegetables. The app also has an online payment feature for the convenience of the users.',
  },
  {
    src: 'https://www.appstirr.com/assets/images/odonta.png',
    ImagesShow: 'https://www.appstirr.com/assets/images/portfolio3.webp',
    heading: 'Communitter',
    text:
      'Communitter is an app that brings service providers and consumers together on a single platform. Consumers looking for service providers such as carpenter, electrician, cleaning and maid service, plumber, painter, architect, an engineer, tile and stone, fences, etc. Service providers can register their services and offer them to the consumers.',
  },
  {
    src: 'https://www.appstirr.com/assets/images/songmatch-icon.png',
    ImagesShow: 'https://www.appstirr.com/assets/images/portfolio4.webp',
    heading: 'Odonta',
    text:
      'Odonta is an app for dental practitioners. They can communicate with each other and buy or sell dental equipment. The buyers and sellers both would be related to the field of dentistry, so they can trust the quality of the equipment.',
  },
  {
    src: 'https://www.appstirr.com/assets/images/hokey-now-icon.png',
    ImagesShow: 'https://www.appstirr.com/assets/images/portfolio5.webp',
    heading: 'Hockey Now',
    text:
      'Hockey Now is a mobile application that provides a platform to schedule matches beforehand at a venue. The application allows users to view their opponents’ team as well. It also has an added feature of purchasing coins and using them to pay for the game itself.',
  },
  {
    src: 'https://www.appstirr.com/assets/images/communitter-icon.png',
    ImagesShow: 'https://www.appstirr.com/assets/images/portfolio6.webp',
    heading: 'Switch Poker',
    text:
      'Switch Poker is a mobile game app that allows users to play poker with each other and compete in different rounds until a winner has been decided. The players can compete with their friends and play with anyone across the world. The gameplay is challenging and exciting to keep the players hooked.',
  },
];

const Slider = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  const handleImageClick = (index) => {
    setSliderIndex(index);
  };

  const settings = {
    arrows: true,
    autoplay: true,
    infinite: true,
    loop: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => {
      setSliderIndex(next);
    },
  };

  return (
    <div className="w-full mt-16">
      <div className="flex">
        <div className="w-1/2 flex flex-col items-center justify-center">
          <h1>Case Study</h1>
          <h1>{images[sliderIndex].heading}</h1>
          <p>{images[sliderIndex].text}</p>
          <p className="mt-12">Let's start your project ----</p>
          <div className="flex gap-x-5 mt-12">
            <img src="https://www.appstirr.com/assets/images/googleplay.png" alt="Google Play" />
            <img src="https://www.appstirr.com/assets/images/app-store.png" alt="App Store" />
          </div>
       </div>
        <div className="w-1/2">
          <img src={images[sliderIndex].ImagesShow} alt={images[sliderIndex].heading} />

          <HeroSlider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="">
                <a href={`#image-${index}`} onClick={() => handleImageClick(index)}>
                  <img
                    className="w-[80px] h-[100px] rounded-md"
                    src={image.src}
                    alt={`Slide ${index + 1}`}
                  />
                </a>
              </div>
            ))}
          </HeroSlider>
        </div>
      </div>
    </div>
  );
};

export default Slider;