import React from 'react'
import Image from "next/image";
import Link from 'next/link';

export const MobileOurstory = ({title,subtitle,para,btnvalue,img,link}) => {
  return (
    <div className='container-fluid mt-5' style={{backgroundImage:`url('/assets/Popular Categories bg@2x.svg')`}}>
      <div className='container'>
      <h1 className='ourstorytitle pt-4'>{title}<span id="Journey">{subtitle}</span></h1>
      <Image src={img} alt="imagestory" className='mobileimagewidth mt-4 mb-2' width={500} height={500}/>
      <p className='ourstorypara mt-4'>{para}</p>
      <div className='pb-4'><Link href={link}>
      <button className='hirebtn'>{btnvalue}</button>
      </Link></div>
      </div>
    </div>
  )
}
