import React from 'react'
import Carousal from './Carousal';

const TopRated = ({text,paragraph}) => {
  return (
    <div className='flex ml-[70px] mt-10 w-[100%]'>
      <div className='w-[30%]'>
        <h1 className='mb-[30px]'>{text}</h1>
        <p>{paragraph}</p>
      </div>
      <div className='w-[70%]'>
       <Carousal TopRated={"TopRated"}/>
      </div>
    </div>
  );
};
export default TopRated;









