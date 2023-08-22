import React from 'react'
import FirstBox from './FirstBox'
import { BlogBtnbox } from './blogBtnbox';
import BlogCard from './BlogCard';
import { Subcribe } from '../Component/share/Subcribe';
import { MobileSubcribe } from '../Component/share/mobileSubcribe';


const Page = () => {
  return (
    <>
     <FirstBox/>
     <BlogBtnbox/>
     <BlogCard/>
     <div className='desktopboxdisplay'><Subcribe/></div>
    <MobileSubcribe/>
    </>
  )
}

export default Page