import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

export const OurStory = ({title,subtitle,para,img1,img2,btnvalue,link}) => {
  return (
    <div className='container-fluid' style={{backgroundImage:`url('/assets/Popular Categories bg@2x.svg')`}}>
      <div className='container'>
        <div className='row'>
            <div className='col mt-5 mb-5'>
             <h1 className='ourstorytitle'>{title}<span id="Journey">{subtitle}</span></h1>
             <p className='mt-4 ourstorypara'>{para}</p>
<Link href={link}><button className='hirebtn'>
{btnvalue}
</button></Link>
            </div>
            <div className='col m-5'>
               <div className='d-flex'> <div className='circle1'>
               <Image src={img1} alt='' width={200} height={200} style={{borderRadius:'50%'}}/>
               </div>
                <div className='circle2'>
                <Image src={img2} alt='' width={300} height={300} style={{borderRadius:'50%'}}/>
                </div></div>
            </div>
        </div>
      </div>
    </div>
  )
}
