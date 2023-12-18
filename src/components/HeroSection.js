import React from 'react'

const HeroSection = ({image_src,description,button_text,para1,para2,className}) => {
  return (
    <>
    <div className=' ml-14 flex justify-center  flex-col w-[90%]'>
    <img   src={image_src} className={className}/>
    <p className='text-center'>{description}</p>
    <button>{button_text}</button>
    <p className='mt-8'>{para1}</p>
    <p className='mt-12'>{para2}</p>
    </div>
    </>
  )
}

export default HeroSection

