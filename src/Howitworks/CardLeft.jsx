import React from 'react'
import Image from "next/image";
import Link from 'next/link';
export const CardLeft = () => {
  return (
    <>
      <div className='container desktopboxdisplay'>
    <div className='row mt-5 mb-5'>
     <div className='col-md-6'>
        <h1 className='lefttitle mt-5'>Why Local Tasker?</h1>
        <p className='mt-5 mx-1' style={{ color:'rgb(181, 182, 183)'}}>We re not just a platform, but a thriving community. We re
all about making life easier across the UK, one task at a
time. But it s not just about ticking off chores from your to
do list it s about creating opportunities, empowering
diverse individuals, and nurturing talent.</p>
<Link href="/Whoweare"><button className='hirebtn'>
Read more
</button></Link>
     </div>
     <div className='col-md-6'><Image src="/assets/Group494.jpg" alt='mobilepic' className='vhgimage1' width={400} height={400}/></div>
    </div>
    </div>
      <div className='container mobiledisplay text-center' style={{marginTop:"1rem"}}>
      <h1 className='lefttitle pt-1'>Why Local Tasker?</h1>
        <Image src="/assets/Group494.jpg" alt='mobilepic' className='mobileimagewidth mt-4 mb-2' width={400} height={400}/>
      <p className='ourstorypara mt-4'>We're not just a platform, but a thriving community.
We're all about making life easier across the UK, one
task at a time. But it's not just about ticking off chores
from your to do list it's about creating opportunities,
empowering diverse individuals, and nurturing talent.</p>
      <Link href='https://localtasker.thedatech.com/register?type=1'><button className='hirebtn'>Get Started</button></Link>
      </div>
    </>
  
  )
}
