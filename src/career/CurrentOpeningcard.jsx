"use client"
import React, { useState } from 'react'
import { Jobpost } from './Jobpost'

const data=[{
    id:"1",
    title:"Marketing Manager",
    value:"£50,000 £75,000 + equity",
    para:"London, UK / Hybrid",
    jobtype:"Full Time"
},{
    id:"2",
    title:"Product Manager",
    value:"£50,000 £75,000 + equity",
    para:"London, UK / Hybrid",
    jobtype:"Full Time"
},{
    id:"3",
    title:"Customer Service",
    value:"£50,000 £75,000 + equity",
    para:"London, UK / Hybrid",
    jobtype:"Full Time"
},{
    id:"4",
    title:"Marketing Manager",
    value:"£50,000 £75,000 + equity",
    para:"London, UK / Hybrid",
    jobtype:"Full Time"
},{
    id:"5",
    title:"Product Manager",
    value:"£50,000 £75,000 + equity",
    para:"London, UK / Hybrid",
    jobtype:"Full Time"
},{
    id:"6",
    title:"Customer Service",
    value:"£50,000 £75,000 + equity",
    para:"London, UK / Hybrid",
    jobtype:"Full Time"
}]
export const CurrentOpeningcard = () => {
    const [open,setOpen]=useState(false);
  return (
    <>
    <div className='container text-center mb-5' style={{marginTop:"5rem"}}>
       <h1 className='lefttitle mt-5'>Current Openings</h1>
       <p className='desktopboxdisplay' style={{color:"rgb(181, 182, 183)"}}>Joining Local Tasker means more than just a new job it s an opportunity to be part of
<br/>a dynamic, ambitious, and caring team.</p>
        
        <div className='valueContainer'>
        {data && data.map((item)=>{
            return(
                <div className='openingcard' key={item.id} onClick={()=>setOpen(true)}>
             <h2 className='mx-5'>{item.title}</h2>
             {open===true?<img src="/assets/_@2x.svg" id="cocimage"/>:<img src="/assets/_@2x-1.svg" id="cocimage"/>}
             <span>{item.jobtype}</span>
             <p>{item.para}</p>
             <p style={{color:"black"}}>{item.value}</p>
         </div>
            )
        })}
        </div>
    </div>
    {open && <Jobpost setOpen={setOpen}/>}
    </>
  )
}
