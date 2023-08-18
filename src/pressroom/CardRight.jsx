import React from 'react'
import Image from "next/image";
import Link from 'next/link';

const CardRight = () => {
  return (
 <>
     <div className='container desktopboxdisplay'>
    <div className='row mt-5 mb-5'>
    <div className='col-md-6'>
    <div id="leftimageconor" className='mt-2 mb-2'>
     <div className='rect3'></div>
     <div className='rect4'>
     <Image src='/collabration.png' className='vhgimage' width={500} height={400} alt="desktoppressroomright"/>
     </div>
     </div>
   </div>
     <div className='col-md-6'>
        <h1 className='lefttitle mt-5'>Local Tasker Collaboration</h1>
        <div id="parentrect" className='mt-2 mb-2'>
            <div className='rect11'></div>
            <div className='rect21'>
                <p className='mt-4 mx-3'>At Local Tasker, we're more than just a platform,
we're a community, and we understand the
power of collaboration. We're eager to partner
with local taskers who bring innovation and
unique services to the table. Also, we're thrilled
to join forces with influencers who resonate
with their audience and align with our values.
Whether you're bursting with fresh ideas or
looking to amplify your reach in meaningful
ways, we invite you to join us in shaping the
future of local tasking.</p>
<p className='mt-4 mx-3 mb-4'>Let's explore the possibilities and make a lasting
impact together.</p>
            </div>
        </div>
        <Link href='/Contact_us'><button className='hirebtn' style={{marginTop:"21rem"}}>Contact Us</button></Link>
     </div>
        </div>
    </div>
    <div className='container mobiledisplay' style={{marginTop:"0rem"}}>
    <div className='row mt-5 mb-5'>
     <div className='col-md-6'>
        <h1 className='lefttitle mt-1 text-center'>Local Tasker Collaboration</h1>
        <div id="leftimageconor" className='mt-2 mb-2'>
     <div className='rect3'></div>
     <div className='rect4' style={{top: '20px'}}>
     <Image src='/collabration.png' className='vhgimage' width={400} height={370} alt="desktoppressroomright"/>
     </div>
     </div>
     </div>
     <div className='col-md-6'>
     <div style={{backgroundColor:"#f5f5f5",borderRadius:"25px"}}>
     <p className='mx-3 p-2' style={{marginTop:"18rem"}}>At Local Tasker, we're more than just a platform,
we're a community, and we understand the
power of collaboration. We're eager to partner
with local taskers who bring innovation and
unique services to the table. Also, we're thrilled
to join forces with influencers who resonate
with their audience and align with our values.
Whether you're bursting with fresh ideas or
looking to amplify your reach in meaningful
ways, we invite you to join us in shaping the
future of local tasking.</p>
<p className='mt-4 mx-3 mb-4 p-2'>Let's explore the possibilities and make a lasting
impact together.</p>
     </div>
        <div className='text-center'>
        <Link href="/Contact_us"><button className='hirebtn'>Contact Us</button></Link>
        </div>
        </div>
        </div>
    </div>
 </>
  )
}

export default CardRight