import React from 'react'
import Image from 'next/image'

export const MobileCardLeft = ({title,para1,para2,para3,img}) => {
  return (
    <div className='container mobiledisplay' style={{marginTop:"1rem"}}>
      <h1 className='lefttitle pt-1 text-center'>{title}</h1>
      <div id="leftimageconor" className='mt-2 mb-2'>
     <div className='rect3'></div>
     <div className='rect4'>
     <Image src={img} className='mobileimagewidth mt-4 mb-2' width={400} height={400} alt="left"/>
     </div>
     </div> 
      <p className='ourstorypara' style={{marginTop:"19rem"}}>{para1}</p>
      <p className='ourstorypara mt-4'>{para2}</p>
      <p className='ourstorypara mt-4'>{para3}</p>
      </div>
  )
}
