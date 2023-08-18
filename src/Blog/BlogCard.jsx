"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const data=[{
    id:1,
    icon:"/assets/21.JPG",
    title:"How to declutter and organise your home",
    name:'Ralph Edwards',
    date:'April 23, 2023'
},
{
    id:2,
    icon:"/assets/22.JPG",
    title:"Revving up your vehicle's performance",
    name:'Mike Edwards',
    date:'April 23, 2023'
},
{
    id:3,
    icon:"/assets/23.JPG",
    title:" Comprehensive pet care and wellness tips",
    name:'Mathew. karen',
    date:'April 23, 2023'
},
{
    id:4,
    icon:"/assets/21.JPG",
    title:"How to declutter and organise your home",
    name:'Ralph Edwards',
    date:'April 23, 2023'
},
{
    id:5,
    icon:"/assets/22.JPG",
    title:"Revving up your vehicle's performance",
    name:'Mike Edwards',
    date:'April 23, 2023'
},
{
    id:6,
    icon:"/assets/23.JPG",
    title:" Comprehensive pet care and wellness tips",
    name:'Mathew. karen',
    date:'April 23, 2023'
},
{
  id:7,
  icon:"/assets/21.JPG",
  title:"How to declutter and organise your home",
  name:'Ralph Edwards',
  date:'April 23, 2023'
},
{
  id:8,
  icon:"/assets/22.JPG",
  title:"Revving up your vehicle's performance",
  name:'Mike Edwards',
  date:'April 23, 2023'
},
{
  id:9,
  icon:"/assets/23.JPG",
  title:" Comprehensive pet care and wellness tips",
  name:'Mathew. karen',
  date:'April 23, 2023'
}]

const BlogCard = () => {
     const [showload,setShowload]=useState(false);
    const router=useRouter();
  return (
    <div className="container mt-2 mb-5">

    <div className='desktopboxdisplay' style={{borderLeft:"3px solid #1171ca"}}>
    <h1 className='howTitle p-2'>All Topics</h1>
    <p className='px-2 pb-2' style={{color:"#c1bdbd"}}>Exploring Local Tasker and discover how we make an impact</p>
    </div>
    <div className='mobiledisplay' style={{borderLeft:"3px solid #1171ca"}}>
    <h1 className='howTitle p-2'>All Topics</h1>
    <p className='px-2 pb-2' style={{color:"#c1bdbd"}}>Local Tasker is a platform that connects
individuals and businesses with local service
providers who can perform various tasks such
as cleaning, handyman work, gardening, and
more. It allows users to quickly and easily find
reliable help for their everyday needs.</p>
    </div>
    <div className='row'>
      {data && data.slice(0,6).map((item)=>{
       return(
        <div className='col-md-4 mt-5' key={item.id}>
        <div className='card'>
          <div className='img1'><img src={item.icon} alt='profile'/></div>
          <div className='row mt-3' style={{borderBottom:"1px solid rgb(217 217 217)"}}>
            <div className='col d-flex'>
            <img src='/assets/Blog posted by image.jpg' alt='profile' className='profileimage'/>
            <h5 className='name'>{item.name}<p style={{color:'rgb(120, 120, 120)'}}>{item.date}</p></h5> 
            </div>
            <div className='col homeInspiration'><img src="/assets/Home Inspiration icon@2x.svg"/> Home Inspiration</div>
          </div>
           <h1 className='profilecardtitle'>{item.title}</h1>
           <button className='profilereadmore' onClick={()=>router.push('/Blog')}>Read more <img src="/assets/Read More icon@2x.svg"/></button>
          </div>
          </div>
       )
      })}
      {showload && <> {data && data.slice(6,9).map((item)=>{
        console.log("id",item.id);
       return(
        <div className='col-md-4 mt-5' key={item.id}>
        <div className='card'>
          <div className='img1'><img src={item.icon} alt='profile'/></div>
          <div className='row mt-3' style={{borderBottom:"1px solid rgb(217 217 217)"}}>
            <div className='col d-flex'>
            <img src='/assets/Blogpostedbyimage.jpg' alt='profile' className='profileimage'/>
            <h5 className='name'>{item.name}<p style={{color:'rgb(120, 120, 120)'}}>{item.date}</p></h5> 
            </div>
            <div className='col homeInspiration'><img src="/assets/Home Inspiration icon@2x.svg"/> Home Inspiration</div>
          </div>
          <Link href={`/Blog/${item.id}`}><h1 className='profilecardtitle'>{item.title}</h1></Link>
           <button className='profilereadmore' onClick={()=>router.push(`/Blog/${item.id}`)}>Read more <img src="/assets/Read More icon@2x.svg"/></button>
          </div>
          </div>
       )
      })}</>}
       <div className='text-center'>
       <button className='hirebtn' onClick={()=>setShowload(true)}>Load More</button>
       </div>
      </div>
      </div>
  )
}

export default BlogCard