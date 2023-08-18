import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Becometopbox = ({title,para,subtitle,img1,img2,img3}) => {
  return (
    <div className='container-fluid mb-4' style={{backgroundImage:`url('/assets/Popular Categories bg@2x.svg')`}}>
    <div className='container desktopboxdisplay'>
      <div className='row'>
          <div className='col mt-5 mb-5'>
           <h1 className='ourstorytitle'>{title}<span id="Journey">{subtitle}</span>easily accessible</h1>
           <p className='mt-3 ourstorypara'>{para}</p>
          </div>
          <div className='col m-5'>
             <div className='d-flex'>
             <div className='circlebecome2'>
              <Image src={img2} width={600} height={600} alt='imag1' style={{borderRadius:'50%'}}/>
              </div>
              <div className='circlebecome1'>
              <Image src={img1} width={300} height={300} alt='imag2' style={{borderRadius:'50%'}}/>
             </div>
             </div>
          </div>
      </div>
      <div className='row'>
        <div className='col-md-8 mb-2'>
          <form id="formbecome">
            <p style={{color:"#1171ca"}}>See how much you can make as a Local Tasker</p>
            <div className='row'>
             <div className='col'>
              <select className='dropdown'>
                <option value="Select Location">Select Location</option>
  <option value="Pakistan">Pakistan</option>
  <option value="UK">UK</option>
  <option value="audi">Audi</option>
              </select>
             </div>
             <div className='col'>
              <select className='dropdown'>
                <option value="Choose Category">Choose Category</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
              </select>
             </div>
             <div className='col text-center' style={{color:"#1171ca"}}><h5>£26<img src="/assets/info icon@2x.svg" id="inforicon"/></h5><p>per hour</p></div>
             <div className='col'><Link href='https://localtasker.thedatech.com/register?type=1'><button className='becomestart'>Get Started</button></Link></div>
            </div>
          </form>
        </div>
        <div className='col-md-2 offset-2'>
        <div className='circlebecome3'>
              <Image src={img3} width={300} height={300} alt='imag3'/>
              </div>
        </div>
      </div>
    </div>
    <div className='container mobiledisplay'>
    <h1 className='ourstorytitle pt-4'>{title}<span id="Journey">{subtitle}</span>easily accessible</h1>
    <p className='mt-3 ourstorypara'>{para}</p>
    <form className='mt-3' id="formbecome">
            <p style={{color:"#1171ca",fontSize:"10px"}}>See how much you can make as a Local Tasker</p>
            <div className='row'>
             <div className='col-8 mb-2'>
              <select className='dropdown mt-2'>
                <option value="Select Location">Select Location</option>
  <option value="Pakistan">Pakistan</option>
  <option value="UK">UK</option>
  <option value="audi">Audi</option>
              </select>
              <select className='dropdown mt-2'>
                <option value="Choose Category">Choose Category</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
              </select>
              <Link href='https://localtasker.thedatech.com/register?type=1'><button className='becomestart mt-2'>Get Started</button></Link>
             </div>
             <div className='col-4 text-center' style={{color:"#1171ca",border:"1px solid gold",borderRadius:"50%",width:"5rem",height:"5rem",margin:"35px auto"}}>
             <h5 className='pt-3 pb-1'>£26<img src="/assets/info icon@2x.svg" alt="image" id="inforicon"/></h5><p style={{fontSize:"7px"}}>per hour</p></div>
            </div>
          </form>
    </div>
  </div>
  )
}
