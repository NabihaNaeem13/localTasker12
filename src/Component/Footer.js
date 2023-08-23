import React from 'react';
import Link from 'next/link';
import { AiOutlineRight } from 'react-icons/ai';

export const Footer = () => {
  
  return (
   <>
      <footer className='footer-mainbox desktopboxdisplay'>
     <div className='footer-container'>
        <div>
            <img src='/assets/FooterLogo.svg' alt='logo.svg'/>
            <h5 className='download-title'>Download our app</h5>
            <div className='apple-container'><img src='assets/App store icon.svg'/><img  src='assets/Google play icon.svg'/></div>
             <ul className='social-media-container mb-3'><li><img src='assets/Youtube.svg'/></li><li><img src='assets/tiktok.svg'/></li><li><img src='assets/Instagram.svg'/></li><li><img src='assets/Twitter.svg'/></li><li><img src='assets/Facebook.svg'/></li></ul>
        </div>
        <div className='footer-subpart'>
        <div><h4>EXPLORE</h4>
             <ul className='footer-subpart-ul'>
                <li><Link href="/Howitwork" style={{color:"white",textDecoration:"none"}}><a>How It Works</a></Link></li>
                <li>Earn Money</li>
                <li>Search Jobs</li>
                <li><Link href="/FAQ" style={{color:"white",textDecoration:"none"}}><a>New Users F&Q</a></Link></li>
             </ul>
        </div>
        <div><h4>Our story</h4>
        <ul className='footer-subpart-ul'>
                <li><Link href="/Whoweare" style={{color:"white",textDecoration:"none"}}>Who We Are</Link></li>
                <li><Link href="/career" style={{color:"white",textDecoration:"none"}}>Careers</Link></li>
                <li><Link href="/pressroom" style={{color:"white",textDecoration:"none"}}>Press Room</Link></li>
                <li><Link href="/CommunityGuidlines" style={{color:"white",textDecoration:"none"}}>Community Guidlines</Link></li>
                <li><Link href="/EtiquetteGuide" style={{color:"white",textDecoration:"none"}}>Tasker etiquette</Link></li>
                <li>Get Inspired</li>
                <li><Link href="/Contact_us" style={{color:"white",textDecoration:"none"}}>Reach Out</Link></li>
                <li>Privacy Policy</li>
                <li><Link href='/terms&condition' style={{color:"white",textDecoration:"none"}}>Terms & Conditions</Link></li>
             </ul>
             </div>
        <div><h4>Popular services</h4>
        <ul className='footer-subpart-ul'>
            <li><Link href="https://localtasker.thedatech.com/login" style={{color:"white",textDecoration:"none"}}>Business Services</Link></li>
                <li><Link href="https://localtasker.thedatech.com/login" style={{color:"white",textDecoration:"none"}}>Car Maintenance & Repair</Link></li>
                <li><Link href="https://localtasker.thedatech.com/login" style={{color:"white",textDecoration:"none"}}>Handyman & Assembly</Link></li>
                <li><Link href="https://localtasker.thedatech.com/login" style={{color:"white",textDecoration:"none"}}>Home Improvement</Link></li>
                <li><Link href="https://localtasker.thedatech.com/login" style={{color:"white",textDecoration:"none"}}>Home Services</Link></li>
                <li><Link href="https://localtasker.thedatech.com/login" style={{color:"white",textDecoration:"none"}}>Pet Care</Link></li>
                <li><Link href="https://localtasker.thedatech.com/login" style={{color:"white",textDecoration:"none"}}>Personal Care</Link></li>
                <li><Link href="https://localtasker.thedatech.com/login" style={{color:"white",textDecoration:"none"}}>Removals & Clearance</Link></li>
                <li><Link href="https://localtasker.thedatech.com/login" style={{color:"white",textDecoration:"none"}}>Wellness & Fitness</Link></li>
             </ul></div>
        </div>
    </div>
      <p className='copyrightpara'>&copy; Copyright 2023 Local Tasker. All rights reserved.</p>
    </footer>
    <footer className='mobiledisplay footer-mainbox' style={{marginTop:"0rem"}}>
      <div className='container'>
           <div className='row'>
            <div className='col-12'>
            <div className='row footerdropdownmenu'>
            <div className='row'><div className='col-10'><h1 className="footermobiletitleh1">Explore</h1></div>
              <div className='col-2'><AiOutlineRight className='footermobileicon'/></div>
             </div>
              <ul className='footer-subpart-ul'>
                <li><Link href="/Howitworks" style={{color:"white",textDecoration:"none"}}>How It Works</Link></li>
                <li>Earn Money</li>
                <li>Search Jobs</li>
                <li><Link href="/F&Q" style={{color:"white",textDecoration:"none"}}>New Users F&Q</Link></li>
             </ul>
          </div>
            </div>
            <div className='col-12'>
            <div className='footerdropdownmenu'>
            <div className='row'><div className='col-10'><h1 className="footermobiletitleh1">Our story</h1></div>
              <div className='col-2'><AiOutlineRight className='footermobileicon'/></div>
            </div>
              <ul className='footer-subpart-ul'>
                <li><Link href="/Whoweare" style={{color:"white",textDecoration:"none"}}><a>Who We Are</a></Link></li>
                <li><Link href="/career" style={{color:"white",textDecoration:"none"}}><a>Careers</a></Link></li>
                <li><Link href="/pressroom" style={{color:"white",textDecoration:"none"}}><a>Press Room</a></Link></li>
                <li><Link href="/CommunityGuidlines" style={{color:"white",textDecoration:"none"}}><a>Community Guidlines</a></Link></li>
                <li><Link href="/EtiquetteGuide" style={{color:"white",textDecoration:"none"}}><a>Tasker etiquette</a></Link></li>
                <li>Get Inspired</li>
                <li><Link href="/Contact_us" style={{color:"white",textDecoration:"none"}}><a>Reach Out</a></Link></li>
                <li>Privacy Policy</li>
                <li><Link href='/terms&condition' style={{color:"white",textDecoration:"none"}}><a>Terms & Conditions</a></Link></li>
             </ul>
          </div>
            </div>
            <div className='col-12'>
            <div className='footerdropdownmenu'>
              <div className='row'><div className='col-10'><h1 className="footermobiletitleh1">Popular services</h1></div>
          <div className='col-2'><AiOutlineRight className='footermobileicon'/></div></div>
              <ul className='footer-subpart-ul'>
            <li><Link href='https://localtasker.thedatech.com/login'>Business Services</Link></li>
                <li><Link href='https://localtasker.thedatech.com/login'>Car Maintenance & Repair</Link></li>
                <li><Link href='https://localtasker.thedatech.com/login'>Handyman & Assembly</Link></li>
                <li><Link href='https://localtasker.thedatech.com/login'>Home Improvement</Link></li>
                <li><Link href='https://localtasker.thedatech.com/login'>Home Services</Link></li>
                <li><Link href='https://localtasker.thedatech.com/login'>Pet Care</Link></li>
                <li><Link href='https://localtasker.thedatech.com/login'>Personal Care</Link></li>
                <li><Link href='https://localtasker.thedatech.com/login'>Removals & Clearance</Link></li>
                <li><Link href='https://localtasker.thedatech.com/login'>Wellness & Fitness</Link></li>
             </ul>
          </div>
            </div>
           </div>
          <ul className='social-media-container mb-3'><li><img src='/assets/Youtube.svg'/></li><li><img src='/assets/tiktok.svg'/></li><li><img src='/assets/Instagram.svg'/></li><li><img src='/assets/Twitter.svg'/></li><li><img src='/assets/Facebook.svg'/></li></ul>
          <h5 className='download-title'>Download our app</h5>
            <div className='apple-container'><img src='/assets/App store icon.svg'/><img  src='/assets/Google play icon.svg'/></div>
            <img src='/assets/FooterLogo.svg' alt='logo.svg' className='mt-5'/>
            <p className='copyrightpara'>&copy; Copyright 2023 Local Tasker. All rights reserved.</p>
      </div>
    </footer>
   </>
 
  
  )
}
