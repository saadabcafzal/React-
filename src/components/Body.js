import React from 'react'
import HeroSection from './HeroSection'
import TopRated from './TopRated'
import Badges from './Badges'
import Categories from './Categories'
import IndustriesWeServe from './IndustriesWeServe'
import Video from './Video'
import Location from './Location'
import ContactUsForm from './ContactUsForm'
import Reviews from './Reviews'
import StepperSection from './StepperSection'
// import Video from './Video'
const Body = () => {
  return (
    <>
    <HeroSection image_src={'https://www.appstirr.com/assets/images/banner-image.png'} description={`Have a software development project in the queue? APPSTIRR creates solutions that work smoothly across all platforms and operating systems.`} button_text={'Get Started'}/>
    <HeroSection description={'Leading Software Development Company In USA'} para1={'If you are planning to outsource reliable software and mobile application development company in USA, or if you want to hire an offshore software development team, then you are at the right place. APPSTIRR is a prestigious software company that provides full-stack development services.'} para2={'APPSTIRR has years of experience as a software and mobile application development company. Our portfolio is extensive with multiple clients across the globe, lauding our custom software development team. APPSTIRR’s software product development services have automated business processes for our clients. We use cutting-edge technology for your product idea and create a scalable software-as-a-service solution that best suits your business requirements.'}/>
    <TopRated text={"Top-rated Software Development Services"} paragraph={"No matter what kind of software you are looking for, we always make sure to harness the power of advanced technologies to build phenomenal software solutions that help your business to grow"}/>
    <Badges/>
    <Categories/>
    <StepperSection/>
    <Video/>
    <IndustriesWeServe/>
    <Location/>
    <ContactUsForm/>
    <Reviews text={"Our Client"} paragraph={"Clients That Trust Our Services"} />
    </>
  )
}

export default Body