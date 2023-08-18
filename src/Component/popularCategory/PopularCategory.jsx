import React from 'react'
import popularCategories from "../../pages/style/HomeStyle.module.css";
import Image from "next/image";
import Link from 'next/link';

const data=[{
  id:1,
  icon:"/assets/Art & Education@2x.svg",
  title:"Art and Education"
},
{
  id:2,
  icon:"/assets/Car Maintenance@2x.svg",
  title:"Car Maintenance"
},
{
  id:3,
  icon:"/assets/Business Services@2x.svg",
  title:"Business Services"
},{
  id:4,
  icon:"/assets/Handymade & Aseembly@2x.svg",
  title:"Handy & Assembly"
},
{
  id:5,
  icon:"/assets/Home Services@2x.svg",
  title:"Home Services"
},
{
  id:6,
  icon:"/assets/Pet Care@2x.svg",
  title:"Pet Care"
},{
  id:7,
  icon:"/assets/Personal Care@2x.svg",
  title:"Personal Care"
},
{
  id:8,
  icon:"/assets/Design Services@2x.svg",
  title:"Design Services"
},
{
  id:9,
  icon:"/assets/Group@1x.svg",
  title:"Home Improvement"
},{
  id:10,
  icon:"/assets/Group@1x-1.svg",
  title:"Rubbish Clearance"
},
{
  id:11,
  icon:"/assets/Group@1x-2.svg",
  title:"Special Occasions"
},
{
  id:12,
  icon:"/assets/Group@1x-3.svg",
  title:"Wellness and Fitness"
}]

export const PopularCategory = () => {
  const popularData=[...data]
  return (
   <div className="container-fluid desktopboxdisplay" style={{backgroundImage:`url('/assets/Popular Categories bg@2x.svg')`}}>
     <div className="container mt-2 mb-2">
     <h1 className='howTitle pt-5'>Popular Category</h1>  
 <div className={popularCategories.popularCategoriesItems}>
          {popularData && popularData.map((item)=>{
            return(
              <Link href="https://localtasker.thedatech.com/login" key={item.id}>
              <div className={popularCategories.popularCategoriesCard}>
        <div className={popularCategories.bluebgcircle}>
        <Image src={item.icon} alt={item.title} width={35} height={35}/>
        </div>
        <p>{item.title}</p>
      </div></Link>
            )
          })}
          </div>
    </div>
   </div>
  )
}
