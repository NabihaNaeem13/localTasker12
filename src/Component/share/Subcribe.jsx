"use client"
import React from 'react'
import { useRouter } from 'next/router'

export const Subcribe = () => {
  const router=useRouter();
  return (
    <div className='container-fluid' style={{backgroundColor:"#2c86f1"}}>
        <div className='container'>
            <div className='row'>
                <div className='col-md-5'><h1 className='subcribetitle'>Join us today, together, we
can overcome any task</h1>
<p className='subcribepara'>Embrace the efficiency of tailored task services,
finely attuned to your diverse needs and preferences.</p></div>
<div className='col-md-2'>
    <img src='/assets/sprint1.png' className="sprintimagemargin"/>
</div>
                <div className='col-md-5 mb-5'>
                 <div className='subcribe-btn-container'><button className='btn1'  onClick={()=>router.push('https://localtasker.thedatech.com/register?type=2')}>Hire a Tasker</button><button className='btn2' onClick={()=>router.push('https://localtasker.thedatech.com/register?type=1')}>Become a Tasker</button></div>
                <div className='subcribe-container-subinputbox mt-4'>
                <input placeholder='Enter your email'/>
                <button>Register Now</button>
                </div>
                <p className='subcribeinputpara'>Sign-up for the latest news and updates!</p>
                </div>
            </div>
        </div>
    </div>
  )
}
