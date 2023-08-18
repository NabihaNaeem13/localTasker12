import React from 'react'
import Image from "next/image";
import Link from 'next/link';

export const MobileOurstory = ({title,subtitle,para,btnvalue,img,link}) => {
  return (
    <div className='container-fluid mt-5' style={{backgroundImage:`url('/assets/Popular Categories bg@2x.svg')`}}>
      <div className='row'>
       <div className='col-md-6'>
       <h1 className='ourstorytitle pt-4 mb-3'>{title}<span id="Journey">{subtitle}</span></h1>
      <Image src={img} alt="imagestory" className='mobileimagewidth' width={400} height={250} style={{borderRadius:"25px"}}/>
       </div>
       <div className='col-md-6'>
       <p className='ourstorypara mt-4'>{para}</p>
      <div className='pb-4 text-center'><Link href={link}>
      <button className='hirebtn'>{btnvalue}</button>
      </Link>
       </div>
    </div>
      </div>
    </div>
  )
}
