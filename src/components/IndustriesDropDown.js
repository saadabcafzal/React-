import React from 'react'
import SingleItemDropDown from './DropDown'

const IndustriesDropDown = () => {
  return (
    <>
    <div className='flex w-[700px] h-[400px]'>
    <div className='flex flex-col w-[50%]'>
        <SingleItemDropDown image_src={'https://www.appstirr.com/assets/images/menu/android-icon.png'} heading={'Andriod App Development'} description={'Appstir develop user friendly andriod applications for client in USA'} />
        <SingleItemDropDown image_src={'https://www.appstirr.com/assets/images/menu/android-icon.png'} heading={'Andriod App Development'} description={'Appstir develop user friendly andriod applications for client in USA'}/>
        <SingleItemDropDown image_src={'https://www.appstirr.com/assets/images/menu/android-icon.png'} heading={'Andriod App Development'} description={'Appstir develop user friendly andriod applications for client in USA'}/>
        <SingleItemDropDown image_src={'https://www.appstirr.com/assets/images/menu/android-icon.png'} heading={'Andriod App Development'} description={'Appstir develop user friendly andriod applications for client in USA'}/>
       
    </div>
    <div className='flex flex-col w-[50%] '>
        
        <SingleItemDropDown image_src={'https://www.appstirr.com/assets/images/menu/android-icon.png'} heading={'Andriod App Development'} description={'Appstir develop user friendly andriod applications for client in USA'}/>
        <SingleItemDropDown image_src={'https://www.appstirr.com/assets/images/menu/android-icon.png'} heading={'Andriod App Development'} description={'Appstir develop user friendly andriod applications for client in USA'}/>
        <SingleItemDropDown image_src={'https://www.appstirr.com/assets/images/menu/android-icon.png'} heading={'Andriod App Development'} description={'Appstir develop user friendly andriod applications for client in USA'}/>
        <SingleItemDropDown image_src={'https://www.appstirr.com/assets/images/menu/android-icon.png'} heading={'Andriod App Development'} description={'Appstir develop user friendly andriod applications for client in USA'}/>
        </div>
    </div>
    </>
  )
}

export default IndustriesDropDown