"use client"
import React, { useState } from 'react'
import { AiOutlineDown } from 'react-icons/ai'
export const BlogBtnbox = () => {
  const [showbtn,setShowbtn]=useState(false);
   const troggle=()=>{
     if(showbtn===true){
      setShowbtn(false)
     }
     else{
      setShowbtn(true)
     }
   }
  return (
    <>
         <div className='container desktopboxdisplay'> 
        <h1 className='howTitle text-center'>Popular Topics</h1>
        <div className='row'>
           <div className='col-md-3'><button className='active'>All Topics</button></div>
           <div className='col-md-5'><button className='categoerytbn'>Local Tasker News</button></div>
           <div className='col-md-3'><button className='categoerytbn'>Learn & How-Tos</button></div>
        </div>
        <div className='row'>
           <div className='col-md-3'><button className='categoerytbn'>Home Inspiration</button></div>
           <div className='col-md-5'><button className='categoerytbn'>All About Tasking</button></div>
           <div className='col-md-3'><button className='categoerytbn'>Tips</button></div>
        </div>
    </div>
    <div className='container mobiledisplay'> 
        <h1 className='howTitle text-center'>Popular Topics</h1>
        <button className='active' onClick={troggle}>All Topics <AiOutlineDown className='mx-2' style={{color:"#ffa700"}}/></button>
        {showbtn && <><button className='categoerytbn'>Local Tasker News</button>
        <button className='categoerytbn'>Learn & How-Tos</button>
        <button className='categoerytbn'>Home Inspiration</button>
        <button className='categoerytbn'>All About Tasking</button>
        <button className='categoerytbn'>Tips</button></>}
    </div>
    </>
 
  )
}
