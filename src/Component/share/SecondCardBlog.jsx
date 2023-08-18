import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data=[{
    id:1,
    icon:"/Homepage/LTBLOGslider(1388 P 787 px).png",
    title:"How to declutter and organise your home",
    name:'Ralph Edwards',
    date:'April 23, 2023'
},
{
    id:2,
    icon:"/Homepage/LTBLOGslider(1388 P 787 px).png",
    title:"Revving up your vehicle's performance",
    name:'Mike Edwards',
    date:'April 23, 2023'
},
{
    id:3,
    icon:"/Homepage/LTBLOGslider(1388 P 787 px).png",
    title:" Comprehensive pet care and wellness tips",
    name:'Mathew. karen',
    date:'April 23, 2023'
},{
  id:4,
  icon:"/Homepage/LTBLOGslider(1388 P 787 px).png",
  title:" Comprehensive pet care and wellness tips",
  name:'Mathew. karen',
  date:'April 23, 2023'
}]

export const SecondCardBlog = () => {
  const router=useRouter();
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
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
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
    <div className="container mt-2 mb-5">
    <h1 className='howTitle desktopboxdisplay'>Get Inspired</h1>
    <h1 className='howTitle text-center mobiledisplay' style={{marginTop:"2rem"}}>Get Inspired</h1>
    <p className='desktopboxdisplay mx-3'>Experience the magic of home improvement with Local Tasker's helpful hints, home tours, and tasker tales.</p>
    <p className='text-center mobiledisplay' style={{color:"#1171ca",marginTop:"1rem",fontSize: "10px",fontWeight: "700"}}>Experience the magic of home improvement with Local Tasker's helpful hints, home tours, and tasker tales.</p>
    <div className='row'>
    <Slider {...settings}>
    {data && data.map(({ id, icon, title, name, date })=>{
       return(
        <div className='col-md-4 mt-2' key={id}>
        <div className='card p-3'>
          <div className='img1'><Image
      src={icon}
      alt={name}
      width={400} 
      height={200}
      blurDataURL={icon}
      placeholder="blur" // Optional blur-up while loading
    /></div>
          <div className='row mt-3 mx-1' style={{borderBottom:"1px solid rgb(217 217 217)"}}>
            <div className='col d-flex mb-2'>
            <Image
      src='/assets/Blogpostedbyimage.jpg'
      alt='profile'
      className='profileimage'
      width={40} 
      height={40}
      blurDataURL="/assets/Blogpostedbyimage.jpg"
      placeholder="blur" // Optional blur-up while loading
    />
            <h5 className='name'>{name}<p style={{color:'rgb(120, 120, 120)'}}>{date}</p></h5> 
            </div>
            <div className='col d-flex'><Image src="/assets/Home Inspiration icon@2x.svg" alt="inspiration" width={12} height={10} className='mb-1'/> <p className='homeInspiration'>Home Inspiration</p></div>
          </div>
           <h1 className='profilecardtitle'>{title}</h1>
           <button className='profilereadmore' onClick={()=>router.push('/Blog')}>Read more <Image src="/assets/Read More icon@2x.svg" alt="readmore" width={20} height={20} className='mt-1' /></button>
          </div>
          </div>
       )
      })}
    </Slider>
    </div>

  </div>
    
  )
}
