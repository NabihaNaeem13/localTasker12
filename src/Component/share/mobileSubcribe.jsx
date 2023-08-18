"use client"
import React from 'react'
import { useRouter } from 'next/router'

export const MobileSubcribe = () => {
  const router=useRouter();
  return (
    <div className='container-fluid mobiledisplay' style={{backgroundColor:"#2c86f1"}}>
    <div className='container pt-2 pb-4'>
    <h1 className='subcribetitle'>Ready to get started</h1>
    <div className='subcribe-btn-container'>
    <button className='btn1'  onClick={()=>router.push('https://localtasker.thedatech.com/register?type=2')}>Hire a Tasker</button>
    <button className='btn2'  onClick={()=>router.push('https://localtasker.thedatech.com/register?type=1')}>Become a Tasker</button></div>
    <div className='subcribe-container-subinputbox mt-4'>
    <input placeholder='Enter your email'/>
    <button>Register Now</button>
    </div>
     <p className='subcribeinputpara'>Sign-up for the latest news and updates!</p>
    </div>
    </div>
  )
}
