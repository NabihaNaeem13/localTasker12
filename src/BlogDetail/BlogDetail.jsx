import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'
import Link from 'next/link';

const data=[{
    id:1,
    icon:"/Homepage/LTBLOGslider.png",
    title:"How to declutter and organise your home",
    name:'Ralph Edwards',
    date:'April 23, 2023'
},
{
    id:2,
    icon:"/Homepage/LTBLOGslider.png",
    title:"Revving up your vehicle's performance",
    name:'Mike Edwards',
    date:'April 23, 2023'
},
{
    id:3,
    icon:"/Homepage/LTBLOGslider.png",
    title:" Comprehensive pet care and wellness tips",
    name:'Mathew. karen',
    date:'April 23, 2023'
},{
  id:4,
  icon:"/Homepage/LTBLOGslider.png",
  title:" Comprehensive pet care and wellness tips",
  name:'Mathew. karen',
  date:'April 23, 2023'
}]


export const BlogDetail = () => {
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
         <div className='container-fluid text-center'>
            <h6 className='mt-5 mb-3' style={{color:"#FDB633"}}>Home Inspiration</h6>
            <h2 className='m-3' style={{color:"#1171ca",fontWeight:"800"}}>How to declutter and organise your home</h2>
            <p className='mb-3' style={{color:"#aba9a9"}}>By Mike Edwards &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;<time dateTime='27/4/2023'>April 27, 2023</time></p>
            <div className='container'>
               <img src="/Photo.jpg" alt="blogdetail" style={{width:"100%"}}/>
               <h4 className='mt-4' style={{color:"#1171ca !important",fontWeight:"700",textAlign:"left"}}>1. You ll Receive Professional Quality Photos</h4>
               <p className="mt-4 mb-4" style={{color:"#aba9a9",textAlign:"left"}}>The number one reason to hire a professional photographer is the quality of their work. With a camera built right
into your smartphone, you may be tempted to handle the event photos yourself but this is a mistake. No
matter how much effort you put in, the end result will almost always be disappointing.</p>
<p className="mt-4 mb-4" style={{color:"#aba9a9",textAlign:"left"}}>A professional has the right equipment and knows all about lighting, composition, and angles. After the event,
they also spend a good deal of time reviewing and editing your photos, ensuring each one is as beautiful as
possible.</p>
<img src="/image2.jpg" alt="blogdetail" style={{width:"100%"}}/>
               <h4 className='mt-4' style={{color:"#1171ca !important",fontWeight:"700",textAlign:"left"}}>2. You ll Receive Professional Quality Photos</h4>
               <p className="mt-4 mb-4" style={{color:"#aba9a9",textAlign:"left"}}>The number one reason to hire a professional photographer is the quality of their work. With a camera built right
into your smartphone, you may be tempted to handle the event photos yourself but this is a mistake. No
matter how much effort you put in, the end result will almost always be disappointing.</p>
<p className="mt-4 mb-5" style={{color:"#aba9a9",textAlign:"left"}}>A professional has the right equipment and knows all about lighting, composition, and angles. After the event,
they also spend a good deal of time reviewing and editing your photos, ensuring each one is as beautiful as
possible.</p>
<div className='row' style={{borderBottom:"2px solid #aba9a9",borderTop:"2px solid #aba9a9"}}>
    <div className='col-md-3'>
    <img src="/LocalTaskerTeam@2x.svg" alt="blogdetail" className='p-3' style={{width:"100%",height:"auto",borderRadius:"50%"}}/>
    </div>
    <div className='col-md-9'>
        <h5 className='mt-5' style={{color:"#1171ca",fontWeight:"700",textAlign:"left"}}>Local Tasker Team</h5>
        <p className="mt-4 mb-4" style={{color:"#aba9a9",textAlign:"left"}}>Local Tasker is the the UK's most dynamic platform where task solving meets
opportunity creation. We dont just help you check off to dos; we amplify
productivity and boost talent. Our blog is your guide in this adventure, stocked
with useful insights to keep you ahead of the curve. We re here to help you grow,
learn, and turn everyday tasks into an enriching experience.</p>
    </div>
</div>
            </div>
            <h4 className='m-5' style={{color:"#1171ca !important",fontWeight:"800"}}>You might also be interested in:</h4>
            <div className='container'>
            <div className='row mb-5'>
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
            <div className='col d-flex'><Image src="/assets/HomeInspirationicon@2x.svg" alt="inspiration" width={12} height={10} className='mb-1'/> <p className='homeInspiration'>Home Inspiration</p></div>
          </div>
           <h1 className='profilecardtitle'>{title}</h1>
           <Link href={`/blogs/${id}`}><a className='profilereadmore'>Read more <Image src="/assets/ReadMoreicon@2x.svg" alt="readmore" width={20} height={20} className='mt-1' /></a></Link>
          </div>
          </div>
       )
      })}
    </Slider>
    </div>
            </div>
         </div>
    )}