import React from 'react'
import Carousal from './Carousal'
import ReviewsComponent from './ReviewsComponent'

const Reviews = ({text,paragraph}) => {
  return (
    <>
    <div className='flex ml-[70px] mt-10 mb-10 w-[100%]'>
    <div className='w-[30%]'>
      <h1 className='mb-[30px]'>{text}</h1>
      <p>{paragraph}</p>
    </div>
    <div className='w-[70%]'>
     <Carousal Reviews={"Reviews"}/>
    </div>
  </div>
  <div className='flex'>
  <ReviewsComponent/>
  <ReviewsComponent/>
  <ReviewsComponent/>
  </div>
  </>
  )
}

export default Reviews