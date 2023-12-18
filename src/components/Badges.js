import React from 'react'
const images=[{src:'https://www.appstirr.com/assets/images/services/logo-one.png'},
        {src:'https://www.appstirr.com/assets/images/services/logo-two.png'},
        {src:'https://www.appstirr.com/assets/images/services/logo-three.png'},
        {src:'https://www.appstirr.com/assets/images/services/logo-four.png'}]

const Badges = () => {
  return (
    <div className='flex justify-center mt-14'>
        {          
            images.map((image)=>(               
                <img src={image.src}   />              
          ))
           
        }
        </div>
  )

}

export default Badges;