import React from 'react'

const Building = ({image_src,text}) => {
  return (
    <div>
        <img className='relative' src={image_src}/>
        <p>-{text}</p>
    </div>
  )
}

export default Building