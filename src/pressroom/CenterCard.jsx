import React from 'react';
import Link from 'next/link';

const CenterCard = () => {
  return (
    <div className='container text-center mb-5'>
        <h1 className='lefttitle'>Local Tasker Media Kit</h1>
        <p className='mt-4 desktopboxdisplay'>Our media kit includes high-resolution images, company logos, executive 
           <br/>bios, and fact sheets that can be used for media purposes. 
           <br/>Please feel free to use these resources in your coverage of Local Tasker.</p>
           <p className='mobiledisplay' style={{marginTop:"1rem",textAlign:"left"}}>Our media kit includes high-resolution images,
company logos, executive bios, and fact sheets that can
be used for media purposes. Please feel free to use
these resources in your coverage of Local Tasker.</p>
<Link href='/Contact_us'><button className='hirebtn'>Browse Press Kit</button></Link>
    </div>
  )
}

export default CenterCard