import React from 'react'
import Image from "next/image";
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';

export const HowWork = () => {
  var settings = {
    dots:false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
          }
        }
      ]
  };
  return (
    <div className="container mt-2 mb-2">
    <h1 className='howTitle desktopboxdisplay'>How it Works</h1>
    <h1 className='howTitle text-center mobiledisplay' style={{marginTop:"2rem"}}>How it Works</h1>
    <div className='row mt-4'>
       <Slider {...settings}>
       <div className='col-md-3'>
        <div className='card p-3'>
          <div className='img1'><Image src='/Homepage/Getstarted.png' width={500} height={300} alt="getstarted" style={{width:"100%",height:"auto"}}/></div>
          <div className='img2'><Image src='/assets/GetStartedicon.png' width={50} height={50} alt="getstartedicon" style={{width:"auto",height:"auto"}}/></div>
          <div className='main-text'>
            <h2>Get Started</h2>
            <p>Sign up and start your journey to finding the perfect tasker 
            </p>
          </div>
        </div>
      </div>
      <div className='col-md-3'>
        <div className='card p-3'>
          <div className='img1'><Image src='/Homepage/Findthefit.png' width={500} height={300} alt="findthefit"/></div>
          <div className='img2'><Image src='/assets/FindtheFiticon@2x.svg' width={50} height={50} alt="findthefiticon"/></div>
          <div className='main-text'>
            <h2>Find the Fit</h2>
            <p>Browse our extensive database of 
verified local taskers filter by skill,
location, and availability
            </p>
          </div>
        </div>
      </div>
      <div className='col-md-3'>
        <div className='card p-3'>
          <div className='img1'><Image src="/Homepage/Connect.png" width={500} height={300} alt='connect'/></div>
          <div className='img2'><Image src="/assets/Connecticon@2x.svg" alt='connecticon' width={50} height={50}/></div>
          <div className='main-text'>
            <h2>Connect</h2>
            <p>Connect directly, request a quote,
or schedule an in-person meeting
rely on a professional tasker to
<br/>
complete your job
            </p>
          </div>
        </div>
      </div>
       </Slider>
       <div className='text-center mobiledisplay'>
         <Link href="/Howitworks"><button className='hirebtn'>Learn More</button></Link>
       </div>
    </div>
    </div>
  )
}
