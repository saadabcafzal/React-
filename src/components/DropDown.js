import React from 'react'

const SingleItemDropDown = ({image_src,heading,description}) => {
  return (
    <div className='flex gap-x-5 mt-5 ml-5  '>
        <img src={image_src}/>
        <div className='flex flex-col w-[400px] '>
            <h1>{heading}</h1>
            <p>{description}</p>
        </div> 
    </div>
  )
}






export default SingleItemDropDown;