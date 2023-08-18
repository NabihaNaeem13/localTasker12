import React from 'react'
import styles from '../page.module.css'
import FirstBox from './FirstBox'
import "../style/home.css";
import { BlogBtnbox } from './blogBtnbox';
import BlogCard from './BlogCard';
import { Subcribe } from '../Component/share/Subcribe';
import { MobileSubcribe } from '../Component/share/mobileSubcribe';

export const metadata = {
  title: 'Blogs',
  description: 'Generated by create next app',
}

const page = () => {
  return (
    <main className={styles.main}>
     <FirstBox/>
     <BlogBtnbox/>
     <BlogCard/>
     <div className='desktopboxdisplay'><Subcribe/></div>
    <MobileSubcribe/>
    </main>
  )
}

export default page