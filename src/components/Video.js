import React from 'react'
import HeroSection from './HeroSection'

const Video = () => {
  return (
    <div className='flex w-[100%]'>
        <div className='w-[50%]'>
        <img className='relative ml-5 mt-8 -z-10' src='https://www.appstirr.com/assets/video/icon-blue.png'/>
        {/* <img src='https://www.appstirr.com/assets/video/video-thumb.jpg' className='absolute z-20 left-5 '/> */}
        </div>
        <div className='w-[50%]'>
            <HeroSection description={'Time to Go Mobile!'} para1={'Say Hello to the Future'} para2={'APPSTIRR tailors the best applications for its clients across the world. Our work and dedication has been lauded by entrepreneurs, mid-sized businesses and enterprises. Our quality driven strategies have established us as the leading software development company in USA, UAE AND UK.'}/>
        </div>
    </div>
  )
}

export default Video