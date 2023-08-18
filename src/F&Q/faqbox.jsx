"use client"
import React, { useState } from 'react'

export const Faqbox = () => {
    const [faq,setFaq]=useState(true);
    const [faq1,setFaq1]=useState(false);
    const [faq2,setFaq2]=useState(false);
    const [faq3,setFaq3]=useState(false);
    const [faq4,setFaq4]=useState(false);
    const [faq5,setFaq5]=useState(false);
    const [faq6,setFaq6]=useState(false);
    const [faq7,setFaq7]=useState(false);
    const [faq8,setFaq8]=useState(false);
    const [faq9,setFaq9]=useState(false);
    const [faq10,setFaq10]=useState(false);
    const [faq11,setFaq11]=useState(false);
    const [faq12,setFaq12]=useState(false);
  return (
    <div className='container text-center mt-5 mb-5'>
       <h1 className='lefttitle'>New User</h1>
       <h1 className='lefttitle'>Frequently Asked Questions</h1>
       <div className='text-center frequentmargin'>
       <div className={faq?'faqborderleft mx-auto mt-4 mb-4':'mx-auto mt-4 mb-4'}>
         <div className='answerbox'><h4 className='answertitle' style={{margin:"5px 10px",textAlign:"left",color:"#1171ca !important"}}>Hiring Your Local Tasker</h4>{faq===true?<button className='plus' onClick={()=>setFaq(false)}><img src='/assets/Section close icon.png'/></button>:<button className='plus' onClick={()=>setFaq(true)}><img src='/assets/Section open icon.png'/></button>}</div>
         {faq &&  <p className="mx-2 mt-2" style={{textAlign:"left"}}>Local Tasker is a platform that connects individuals
and businesses with local service providers who can
perform various tasks such as cleaning, handyman
work, gardening, and more. It allows users to quickly
and easily find reliable help for their everyday needs.</p>}
       </div>
       <div className={faq1?'faqborderleft mx-auto mt-4 mb-4':'mx-auto mt-4 mb-4'}>
         <div className='answerbox'><h4 className='answertitle' style={{margin:"5px 10px",textAlign:"left",color:"#1171ca !important"}}>Choosing the Right Tasker</h4>{faq1===true?<button className='plus' onClick={()=>setFaq1(false)}><img src='/assets/Section close icon.png'/></button>:<button className='plus' onClick={()=>setFaq1(true)}><img src='/assets/Section open icon.png'/></button>}</div>
         {faq1 &&  <p className="mx-2 mt-2" style={{textAlign:"left"}}>Local Tasker is a platform that connects individuals
and businesses with local service providers who can
perform various tasks such as cleaning, handyman
work, gardening, and more. It allows users to quickly
and easily find reliable help for their everyday needs.</p>}
       </div>
       <div className={faq2?'faqborderleft mx-auto mt-4 mb-4':'mx-auto mt-4 mb-4'}>
         <div className='answerbox'><h4 className='answertitle' style={{margin:"5px 10px",textAlign:"left",color:"#1171ca !important"}}>Hiring Your Local Tasker</h4>{faq2===true?<button className='plus' onClick={()=>setFaq2(false)}><img src='/assets/Section close icon.png'/></button>:<button className='plus' onClick={()=>setFaq2(true)}><img src='/assets/Section open icon.png'/></button>}</div>
         {faq2 &&  <p className="mx-2 mt-2" style={{textAlign:"left"}}>Local Tasker is a platform that connects individuals
and businesses with local service providers who can
perform various tasks such as cleaning, handyman
work, gardening, and more. It allows users to quickly
and easily find reliable help for their everyday needs.</p>}
       </div>
       <div className={faq3?'faqborderleft mx-auto mt-4 mb-4':'mx-auto mt-4 mb-4'}>
         <div className='answerbox'><h4 className='answertitle' style={{margin:"5px 10px",textAlign:"left",color:"#1171ca !important"}}>Addressing Concerns about Tasker's Work</h4>{faq3===true?<button className='plus' onClick={()=>setFaq3(false)}><img src='/assets/Section close icon.png'/></button>:<button className='plus' onClick={()=>setFaq3(true)}><img src='/assets/Section open icon.png'/></button>}</div>
         {faq3 &&  <p className="mx-2 mt-2" style={{textAlign:"left"}}>Local Tasker is a platform that connects individuals
and businesses with local service providers who can
perform various tasks such as cleaning, handyman
work, gardening, and more. It allows users to quickly
and easily find reliable help for their everyday needs.</p>}
       </div>
       <div className={faq5?'faqborderleft mx-auto mt-4 mb-4':'mx-auto mt-4 mb-4'}>
         <div className='answerbox'><h4 className='answertitle' style={{margin:"5px 10px",color:"#1171ca !important"}}>Handling Payments</h4>{faq5===true?<button className='plus' onClick={()=>setFaq5(false)}><img src='/assets/Section close icon.png'/></button>:<button className='plus' onClick={()=>setFaq5(true)}><img src='/assets/Section open icon.png'/></button>}</div>
         {faq5 &&  <p className="mx-2 mt-2" style={{textAlign:"left"}}>Local Tasker is a platform that connects individuals
and businesses with local service providers who can
perform various tasks such as cleaning, handyman
work, gardening, and more. It allows users to quickly
and easily find reliable help for their everyday needs.</p>}
       </div>
       <div className={faq6?'faqborderleft mx-auto mt-4 mb-4':'mx-auto mt-4 mb-4'}>
         <div className='answerbox'><h4 className='answertitle' style={{margin:"5px 10px",color:"#1171ca !important"}}>Safety and Security</h4>{faq6===true?<button className='plus' onClick={()=>setFaq6(false)}><img src='/assets/Section close icon.png'/></button>:<button className='plus' onClick={()=>setFaq6(true)}><img src='/assets/Section open icon.png'/></button>}</div>
         {faq6 &&  <p className="mx-2 mt-2" style={{textAlign:"left"}}>Local Tasker is a platform that connects individuals
and businesses with local service providers who can
perform various tasks such as cleaning, handyman
work, gardening, and more. It allows users to quickly
and easily find reliable help for their everyday needs.</p>}
       </div>
       <div className={faq7?'faqborderleft mx-auto mt-4 mb-4':'mx-auto mt-4 mb-4'}>
         <div className='answerbox'><h4 className='answertitle' style={{margin:"5px 10px",textAlign:"left",color:"#1171ca !important"}}>Hiring Your Local Tasker</h4>{faq7===true?<button className='plus' onClick={()=>setFaq7(false)}><img src='/assets/Section close icon.png'/></button>:<button className='plus' onClick={()=>setFaq7(true)}><img src='/assets/Section open icon.png'/></button>}</div>
         {faq7 &&  <p className="mx-2 mt-2" style={{textAlign:"left"}}>Local Tasker is a platform that connects individuals
and businesses with local service providers who can
perform various tasks such as cleaning, handyman
work, gardening, and more. It allows users to quickly
and easily find reliable help for their everyday needs.</p>}
       </div>
       <div className={faq8?'faqborderleft mx-auto mt-4 mb-4':'mx-auto mt-4 mb-4'}>
         <div className='answerbox'><h4 className='answertitle' style={{margin:"5px 10px",textAlign:"left",color:"#1171ca !important"}}>Joining the Local Tasker Community</h4>{faq8===true?<button className='plus' onClick={()=>setFaq8(false)}><img src='/assets/Section close icon.png'/></button>:<button className='plus' onClick={()=>setFaq8(true)}><img src='/assets/Section open icon.png'/></button>}</div>
         {faq8 &&  <p className="mx-2 mt-2" style={{textAlign:"left"}}>Local Tasker is a platform that connects individuals
and businesses with local service providers who can
perform various tasks such as cleaning, handyman
work, gardening, and more. It allows users to quickly
and easily find reliable help for their everyday needs.</p>}
       </div>
       <div className={faq9?'faqborderleft mx-auto mt-4 mb-4':'mx-auto mt-4 mb-4'}>
         <div className='answerbox'><h4 className='answertitle' style={{margin:"5px 10px",textAlign:"left",color:"#1171ca !important"}}>Exploring Task Possibilities</h4>{faq9===true?<button className='plus' onClick={()=>setFaq9(false)}><img src='/assets/Section close icon.png'/></button>:<button className='plus' onClick={()=>setFaq9(true)}><img src='/assets/Section open icon.png'/></button>}</div>
         {faq9 &&  <p className="mx-2 mt-2" style={{textAlign:"left"}}>Local Tasker is a platform that connects individuals
and businesses with local service providers who can
perform various tasks such as cleaning, handyman
work, gardening, and more. It allows users to quickly
and easily find reliable help for their everyday needs.</p>}
       </div>
       <div className={faq10?'faqborderleft mx-auto mt-4 mb-4':'mx-auto mt-4 mb-4'}>
         <div className='answerbox'><h4 className='answertitle' style={{margin:"5px 10px",textAlign:"left",color:"#1171ca !important"}}>Pre-Hiring Communication</h4>{faq10===true?<button className='plus' onClick={()=>setFaq10(false)}><img src='/assets/Section close icon.png'/></button>:<button className='plus' onClick={()=>setFaq10(true)}><img src='/assets/Section open icon.png'/></button>}</div>
         {faq10 &&  <p className="mx-2 mt-2" style={{textAlign:"left"}}>Local Tasker is a platform that connects individuals
and businesses with local service providers who can
perform various tasks such as cleaning, handyman
work, gardening, and more. It allows users to quickly
and easily find reliable help for their everyday needs.</p>}
       </div>
       <div className={faq11?'faqborderleft mx-auto mt-4 mb-4':'mx-auto mt-4 mb-4'}>
         <div className='answerbox'><h4 className='answertitle' style={{margin:"5px 10px",textAlign:"left",color:"#1171ca !important"}}>Handling Tasker Cancellations</h4>{faq11===true?<button className='plus' onClick={()=>setFaq11(false)}><img src='/assets/Section close icon.png'/></button>:<button className='plus' onClick={()=>setFaq11(true)}><img src='/assets/Section open icon.png'/></button>}</div>
         {faq11 &&  <p className="mx-2 mt-2" style={{textAlign:"left"}}>Local Tasker is a platform that connects individuals
and businesses with local service providers who can
perform various tasks such as cleaning, handyman
work, gardening, and more. It allows users to quickly
and easily find reliable help for their everyday needs.</p>}
       </div>
       <div className={faq12?'faqborderleft mx-auto mt-4 mb-4':'mx-auto mt-4 mb-4'}>
         <div className='answerbox'><h4 className='answertitle' style={{margin:"5px 10px",textAlign:"left",color:"#1171ca !important"}}>Rehiring a Tasker</h4>{faq12===true?<button className='plus' onClick={()=>setFaq12(false)}><img src='/assets/Section close icon.png'/></button>:<button className='plus' onClick={()=>setFaq12(true)}><img src='/assets/Section open icon.png'/></button>}</div>
         {faq12 &&  <p className="mx-2 mt-2" style={{textAlign:"left"}}>Local Tasker is a platform that connects individuals
and businesses with local service providers who can
perform various tasks such as cleaning, handyman
work, gardening, and more. It allows users to quickly
and easily find reliable help for their everyday needs.</p>}
       </div>
       <div className={faq4?'faqborderleft mx-auto mt-4 mb-4':'mx-auto mt-4 mb-4'}>
         <div className='answerbox'><h4 className='answertitle' style={{margin:"5px 10px",textAlign:"left",color:"#1171ca !important"}}>Providing Tools and Equipment</h4>{faq4===true?<button className='plus' onClick={()=>setFaq4(false)}><img src='/assets/Section close icon.png'/></button>:<button className='plus' onClick={()=>setFaq4(true)}><img src='/assets/Section open icon.png'/></button>}</div>
         {faq4 &&  <p className="mx-2 mt-2" style={{textAlign:"left"}}>Local Tasker is a platform that connects individuals
and businesses with local service providers who can
perform various tasks such as cleaning, handyman
work, gardening, and more. It allows users to quickly
and easily find reliable help for their everyday needs.</p>}
       </div>
       </div>
    </div>
  )
}
