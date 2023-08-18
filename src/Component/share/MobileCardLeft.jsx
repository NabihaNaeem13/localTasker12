"use client"
import React from 'react'
import Image from "next/image";
import { useRouter } from 'next/router'

export const MobileCardLeft = ({title,para1,para2,btnvalue,img,link}) => {
  const router=useRouter();
  return (
    <div className='container mobiledisplay' style={{marginTop:"0rem"}}>
    <div className='row mt-3 mb-5'>
     <div className='col-md-6 mt-5'>
        <h1 className='lefttitle text-center'>{title}</h1>
        <div id="leftimageconor" className='mt-2 mb-2'>
     <div className='rect1'></div>
     <div className='rect2'>
     <Image src={img} alt='leftimage' className='vhgimage' width={500} height={400} style={{borderRadius:"15px",height:"auto"}}/>
     </div>
     </div>
        <p className="mx-3" style={{marginTop:"17rem"}}>{para1}</p>
<p className='mt-4 mx-3'>{para2}</p>
<div className='text-center'><button className='hirebtn' onClick={()=>router.push(`/${link}`)}>
{btnvalue}
</button></div>
     </div>
    </div>
    </div>
  )
}
