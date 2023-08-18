import React from 'react'
import Image from "next/image";
import popularCategories from "../../pages/style/HomeStyle.module.css";
import Link from 'next/link';

const data=[{
  id:1,
  icon:"/assets/m1.JPG",
  title:"Art and Education"
},
{
  id:2,
  icon:"/assets/m2.JPG",
  title:"Car Maintenance"
},
{
  id:3,
  icon:"/assets/m3.JPG",
  title:"Business Services"
},{
  id:4,
  icon:"/assets/m4.JPG",
  title:"Handy & Assembly"
},
{
  id:5,
  icon:"/assets/m5.JPG",
  title:"Home Services"
},
{
  id:6,
  icon:"/assets/m6.JPG",
  title:"Pet Care"
},{
  id:7,
  icon:"/assets/m7.JPG",
  title:"Personal Care"
},
{
  id:8,
  icon:"/assets/m8.JPG",
  title:"Design Services"
},
{
  id:9,
  icon:"/assets/m9.JPG",
  title:"Home Improvement"
},{
  id:10,
  icon:"/assets/m10.JPG",
  title:"Rubbish Clearance"
},
{
  id:11,
  icon:"/assets/m11.JPG",
  title:"Special Occasions"
},
{
  id:12,
  icon:"/assets/m12.JPG",
  title:"Wellness and Fitness"
}]

export const MobilePopularCategory = () => {
    const popularData=[...data]
  return (
    <div className="container-fluid mobiledisplay" style={{backgroundImage:`url('/assets/Popular Categories bg@2x.svg')`,marginTop:"0rem"}}>
    <div className="container mt-2 mb-2">
    <h1 className='howTitle pt-5 text-center'>Popular Category</h1>  
<div className={popularCategories.popularCategoriesItems}>
         {popularData && popularData.map((item)=>{
           return(
             <Link href="https://localtasker.thedatech.com/login">
             <div className={popularCategories.popularCategoriesCard} key={item.id}>
             <Image src={item.icon} alt="" width={40} height={40}/>
              <p>{item.title}</p>
             </div>
             </Link>
           )
         })}
         </div>
   </div>
  </div>
  )
}
