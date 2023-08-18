import React from 'react'
import Image from 'next/image'

const Valuesour = ({title,para,data}) => {
  return (
    <div className='container mt-5 mb-5'>
       <h1 className='lefttitle text-center'>{title}</h1>
        <p className='mt-2 valuesourparaafter'>{para}</p>
        <div className='valueContainer'>
        {data && data.map((item)=>{
          return(
            <div className='valueCard' key={item.id}>
            <div className='yellowbgcircle'>
            <Image src={item.icon} alt={item.para} className='valueiconimage' width={60} height={60}/>
        </div>
            
             <h5 className='px-3'>{item.title}</h5>
             <p style={{ color:'rgb(181, 182, 183)'}}>{item.para}</p>
           </div>
          )
        })}
        </div>
    </div>
  )
}

export default Valuesour