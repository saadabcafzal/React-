import React from 'react'
import HeroSection from './HeroSection'

const Categories = () => {
  return (
    <div>
        <h1 className='text-center'>Mobile App for Every Screen</h1>
        <div className='flex'>
        <div className='w-[300px] ml-[20px]'>
        <HeroSection image_src={'https://www.appstirr.com/assets/images/mobile-icon.png'} para1={'Mobile Phone'} para2={'We develop seamless mobile applications for iOS & Android platforms in USA.'} className='w-[50px]'/>
        </div>
        <div className='w-[300px]'>
        <HeroSection image_src={'https://www.appstirr.com/assets/images/mobile-icon.png'} para1={'Mobile Phone'} para2={'We develop seamless mobile applications for iOS & Android platforms in USA.'} className='w-[50px]'/>
        </div>
        <div className='w-[300px]'>
        <HeroSection image_src={'https://www.appstirr.com/assets/images/mobile-icon.png'} para1={'Mobile Phone'} para2={'We develop seamless mobile applications for iOS & Android platforms in USA.'} className='w-[50px]'/>
        </div>
        <div className='w-[300px]'>
        <HeroSection image_src={'https://www.appstirr.com/assets/images/mobile-icon.png'} para1={'Mobile Phone'} para2={'We develop seamless mobile applications for iOS & Android platforms in USA.'} className='w-[50px]'/>
        </div>
        <div className='w-[300px]'>
        <HeroSection image_src={'https://www.appstirr.com/assets/images/mobile-icon.png'} para1={'Mobile Phone'} para2={'We develop seamless mobile applications for iOS & Android platforms in USA.'} className='w-[50px]'/>
        </div>
        </div>
    </div>
  )
}

export default Categories