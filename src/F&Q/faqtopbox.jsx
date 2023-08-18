import React from 'react'
import Image from "next/image";

export const Faqtopbox = ({title,img1,img2,subtitle,para,img}) => {
  return (
    <>
    <div className='container-fluid desktopboxdisplay' style={{backgroundImage:`url('/assets/Popular Categories bg@2x.svg')`}}>
    <div className='container'>
      <div className='row'>
          <div className='col mt-5 mb-5 mx-3'>
           <h1 className='ourstorytitle'>{title}<br/><span id="Journey">{subtitle}</span></h1>
           <p className='mt-3 ourstorypara'>{para}</p>
          </div>
          <div className='col m-5'>
             <div className='d-flex'> <div className='circle1'>
              <Image src={img1} alt="rightbox" width={200} height={200}/>
             </div>
              <div className='circle2'>
              <Image src={img2} alt="rightbox" width={400} height={400} style={{borderRadius:'50%'}}/>
              </div></div>
          </div>
      </div>
    </div>
  </div>
  <div className='container-fluid mobiledisplay' style={{backgroundImage:`url('/assets/Popular Categories bg@2x.svg')`}}>
    <div className='container'>
      <div className='row'>
         
          <div className='col mt-5 mb-5'>
          <h1 className='ourstorytitle text-center'>{title}<br/><span id="Journey">{subtitle}</span></h1>
           <div className='mobileimagewidth' style={{borderRadius:"15px"}}>
           <Image src={img} alt="faq" className='mt-4 mb-2' width={500} height={400}/>
           </div>
           <p className='mt-3 ourstorypara'>{para}</p>
           <button className='hirebtn'>Read More</button>
          </div>
          </div>
      </div>
    </div>
</>
  )
}
