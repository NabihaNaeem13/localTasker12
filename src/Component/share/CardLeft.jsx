"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

export const CardLeft = ({title,para1,para2,btnvalue,img,link}) => {
  const router=useRouter();
  return (
    <div className='container desktopboxdisplay'>
    <div className='row mt-5 mb-5'>
     <div className='col-md-6'>
        <h1 className='lefttitle'>{title}</h1>
        <p className='mt-5 mx-3' style={{color:"#000"}}>{para1}</p>
<p className='mt-4 mx-3' style={{color:"#000"}}>{para2}</p>
<button className='hirebtn mx-3' onClick={()=>router.push(link)}>
{btnvalue}
</button>
     </div>
     <div className='col-md-6'>
     <div id="leftimageconor" className='mt-2 mb-2'>
     <div className='rect1'></div>
     <div className='rect2'>
     <Image src={img} alt='leftimage' className='vhgimage' width={500} height={350} style={{borderRadius:"20px"}}/>
     </div>
     </div> 
     </div>
    </div>
    </div>
  )
}
