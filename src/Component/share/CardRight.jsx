"use client"
import React from 'react'
import {AiFillCheckCircle} from "react-icons/ai";
import { useRouter } from 'next/router'
import Image from "next/image";

export const CardRight = () => {
  const router=useRouter();
  return (
 <>
     <div className='container desktopboxdisplay'>
    <div className='row mt-5 mb-5'>
     <div className='col-md-6'>
     <div id="leftimageconor" className='mt-2 mb-2'>
     <div className='rect3'></div>
     <div className='rect4'>
     <Image src='/Homepage/earnextracash.png' alt="earn" className='vhgimage' width={500} height={400} style={{borderRadius:"15px"}}/>
     </div>
     </div>
    </div>
     <div className='col-md-6'>
        <h1 className='lefttitle mt-2'>Looking To Earn Extra Cash?</h1>
        <p className='mt-5 mx-1'>Find local jobs that fit your skills and schedule! Be
your own boss and enjoy the freedom that comes
with it! Get the support you need from Local Tasker
whenever you need it.</p>
<ul className='right-cardul mt-4'>
    <li><AiFillCheckCircle style={{marginRight:"5px"}}/>Turn your passion into profits</li>
    <li><AiFillCheckCircle style={{marginRight:"5px"}}/>Keep 100% of your earnings</li>
    <li><AiFillCheckCircle style={{marginRight:"5px"}}/>Direct client communication</li>
    <li><AiFillCheckCircle style={{marginRight:"5px"}}/>Grow your business and client base</li>
</ul>
<button className='hirebtn mx-1' onClick={()=>router.push('https://localtasker.thedatech.com/register?type=1')}>
Become a Tasker
</button>
     </div>
    </div>
    </div>
    <div className='container mobiledisplay'>
    <div className='row mt-5 mb-5'>
     <div className='col-md-6'>
        <h1 className='lefttitle text-center'>Looking To Earn Extra Cash?</h1>
        <div id="leftimageconor" className='mt-2 mb-2'>
     <div className='rect3'></div>
     <div className='rect4'>
     <Image src='/Homepage/earnextracash.png' alt="earn" className='vhgimage' width={500} height={400} style={{borderRadius:"15px",height:"auto"}}/>
     </div>
     </div>       
     </div>
     <div className='col-md-6'>
     <p className='mx-3' style={{marginTop:"17rem"}}>Find local jobs that fit your skills and schedule! Be
your own boss and enjoy the freedom that comes
with it! Get the support you need from Local Tasker
whenever you need it.</p>
<ul className='right-cardul mt-4 mx-3'>
    <li><AiFillCheckCircle style={{marginRight:"5px"}}/>Turn your passion into profits</li>
    <li><AiFillCheckCircle style={{marginRight:"5px"}}/>Keep 100% of your earnings</li>
    <li><AiFillCheckCircle style={{marginRight:"5px"}}/>Direct client communication</li>
    <li><AiFillCheckCircle style={{marginRight:"5px"}}/>Grow your business and client base</li>
</ul>
<div className='text-center'>
<button className='hirebtn' onClick={()=>router.push('https://localtasker.thedatech.com/register?type=1')}>
Become a Tasker
</button>
</div>
     </div>
    </div>
    </div>
 </>
  )
}
