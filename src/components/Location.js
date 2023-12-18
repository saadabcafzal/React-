import React from 'react';
import Building from './Building';

const Location = () => {
  return (
    <>
      <div className='relative'>
        <img src='https://www.appstirr.com/assets/images/tab-contact-hou-bg.jpg' alt='Background' />
        <div className='absolute -top-[200px] -right-[350px]  w-full h-full flex flex-col justify-center items-center'>
          <h1 className='text-purple text-4xl'>Location</h1>
        </div>
      </div>
      <div className='relative'> 
        <div className='flex gap-x-5 absolute -top-[300px] left-[200px]  z-20'>
            <Building text={'Houston'} image_src={'https://www.appstirr.com/assets/images/dubai1.png'} />
            <Building text={'Dubai'} image_src={'https://www.appstirr.com/assets/images/dubai1.png'} />
            <Building text={'New York'} image_src={'https://www.appstirr.com/assets/images/dubai1.png'} />        
            <Building text={'London'} image_src={'https://www.appstirr.com/assets/images/dubai1.png'} />
        </div>
      </div>
    </>
  );
};

export default Location;