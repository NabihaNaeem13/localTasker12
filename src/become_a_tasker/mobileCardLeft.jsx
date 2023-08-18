import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

export const MobileCardLeft = () => {
  return (
    <div className='container mobiledisplay text-center' style={{marginTop:"1rem"}}>
    <h1 className='lefttitle pt-1'>Make Money Your Way</h1>
    <div id="leftimageconor" className='mt-2 mb-2'>
     <div className='rect1'></div>
     <div className='rect2'>
     <Image src="/makemoneyyourway.png" alt='leftimage' className='mobileimagewidth' width={500} height={400} style={{borderRadius:"15px",height:"auto"}}/>
     </div>
     </div>
    <p className='ourstorypara mx-3' style={{marginTop:"16rem"}}>For just £19.99 a month, you can become a Local Tasker
and start growing your business. And for a limited time,
we re offering a special promotion: sign up now and get
your first month for free! We believe in providing
affordable and accessible opportunities for people to
start their own businesses.</p>
    <Link href="https://localtasker.thedatech.com/register?type=1"><button className='hirebtn'>Get Started</button></Link>
    </div>
  )
}
