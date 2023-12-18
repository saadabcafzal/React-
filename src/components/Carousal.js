import React from 'react'
import HeroSlider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const images=[{src:'https://www.appstirr.com/assets/images/android-application.png',heading:'Game App Development',description:'Get ahead of the competition with our game app development.Our team of game app developers push their limits to spark creativity.'},
          {src:'https://www.appstirr.com/assets/images/wearable-device.png',heading:'Game App Development',description:'Get ahead of the competition with our game app development.Our team of game app developers push their limits to spark creativity.'},
          {src:'https://www.appstirr.com/assets/images/mobile-app-and-device.png',heading:'Game App Development',description:'Get ahead of the competition with our game app development.Our team of game app developers push their limits to spark creativity.'},
          {src:'https://www.appstirr.com/assets/images/ios-application.png',heading:'Game App Development',description:'Get ahead of the competition with our game app development.Our team of game app developers push their limits to spark creativity.'},
          {src:'https://www.appstirr.com/assets/images/flutter-banners.png',heading:'Game App Development',description:'Get ahead of the competition with our game app development.Our team of game app developers push their limits to spark creativity.'},
          {src:'https://www.appstirr.com/assets/images/aso-page.png',heading:'Game App Development',description:'Get ahead of the competition with our game app development.Our team of game app developers push their limits to spark creativity.'},
          {src:'https://www.appstirr.com/assets/images/game-page-development.jpg',heading:'Game App Development',description:'Get ahead of the competition with our game app development.Our team of game app developers push their limits to spark creativity.'},
]

const images1=[{src:'https://www.appstirr.com/assets/images/testimonails-ico.png',heading:'There was one person who was the contact the whole project that made communication easy. APPSTIRR designed and developed an application that helps organize pick-up hockey game.',description:'Dr. Thomas Miskavige'},
          {src:'https://www.appstirr.com/assets/images/testimonails-ico.png',heading:'Frank was fantastic to work with. He was on point with everything and helpful throughout the entire process. He worked with me going back and forth with his team fixing every little detail.',description:' Daniel Weiner'},
          {src:'https://www.appstirr.com/assets/images/testimonails-ico.png',heading:'Frank was fantastic to work with. He was on point with everything and helpful throughout the entire process. He worked with me going back and forth with his team fixing every little detail.',description:' Daniel Weiner'},
          {src:'https://www.appstirr.com/assets/images/testimonails-ico.png',heading:'Frank was fantastic to work with. He was on point with everything and helpful throughout the entire process. He worked with me going back and forth with his team fixing every little detail.',description:' Daniel Weiner'},
          {src:'https://www.appstirr.com/assets/images/testimonails-ico.png',heading:'Frank was fantastic to work with. He was on point with everything and helpful throughout the entire process. He worked with me going back and forth with his team fixing every little detail.',description:' Daniel Weiner'},
          {src:'https://www.appstirr.com/assets/images/testimonails-ico.png',heading:'Frank was fantastic to work with. He was on point with everything and helpful throughout the entire process. He worked with me going back and forth with his team fixing every little detail.',description:' Daniel Weiner'},
          {src:'https://www.appstirr.com/assets/images/testimonails-ico.png',heading:'Frank was fantastic to work with. He was on point with everything and helpful throughout the entire process. He worked with me going back and forth with his team fixing every little detail.',description:' Daniel Weiner'},
]


var settings = {
    dots: true,
    autoplay:true,
    infinite: true,
    loop:true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
const Carousal = ({Reviews,TopRated}) => {
  return (

   
    <HeroSlider {...settings} >

    

    {TopRated && images.map((image) => (
      <div className="w-full h-64 md:h-80 py-3">
        <img className="w-[280px] h-[100px]   rounded-md"src={image.src} alt="testing"  />
        <h1>{image.heading}</h1>
        <p>{image.description}</p>
        <button >Learn more</button>
      </div>
    ))}

      
    {Reviews && images1.map((image) => (
      <div className="w-full h-64 md:h-80 py-3">
        <img className="w-[80px] h-[100px]   rounded-md"src={image.src} alt="testing"  />
        <h1>{image.heading}</h1>
        <p>{image.description}</p>
        <button >Learn more</button>
      </div>
    ))}
  </HeroSlider>
  )
}

export default Carousal