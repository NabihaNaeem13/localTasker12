"use client"
import React, { useState } from 'react'

export const Etiquettebox = () => {
    const [faq,setFaq]=useState(true);
    const [faq1,setFaq1]=useState(false);
    const [faq2,setFaq2]=useState(false);
    const [faq3,setFaq3]=useState(false);
    const [faq5,setFaq5]=useState(false);
    const [faq6,setFaq6]=useState(false);
    const [faq7,setFaq7]=useState(false);
    const [faq8,setFaq8]=useState(false);
  return (
    <div className='container text-center mt-5 mb-5'>
       <h1 className='lefttitle'>Welcome to the Local Tasker</h1>
       <h1 className='lefttitle'>Etiquette Guide</h1>
       <div className='frequentmargin'>
       <div className={faq?'faqborderleft mx-auto mt-4 mb-4':'mx-auto mt-4 mb-4'}>
         <div className='answerbox'><h4 className='answertitle answertitlemargin'>Introduction</h4>{faq===true?<button className='plus' onClick={()=>setFaq(false)}><img src='/assets/Section close icon.png'/></button>:<button className='plus' onClick={()=>setFaq(true)}><img src='/assets/Section open icon.png'/></button>}</div>
         {faq &&  <p className="mx-2 mt-2" style={{textAlign:"left"}}>At Local Tasker, we believe in building strong and
enduring relationships between our taskers and
clients. This isn't achieved solely through the
completion of tasks, but also through the way we
interact, communicate, and respect each other.</p>}
       </div>
       <div className={faq1?'faqborderleft mx-auto mt-4 mb-4':'mx-auto mt-4 mb-4'}>
         <div className='answerbox'><h4 className='answertitle answertitlemargin'>Communicating with Clarity</h4>{faq1===true?<button className='plus' onClick={()=>setFaq1(false)}><img src='/assets/Section close icon.png'/></button>:<button className='plus' onClick={()=>setFaq1(true)}><img src='/assets/Section open icon.png'/></button>}</div>
         {faq1 &&  <p className="mx-2 mt-2" style={{textAlign:"left"}}>Local Tasker is a platform that connects individuals
and businesses with local service providers who can
perform various tasks such as cleaning, handyman
work, gardening, and more. It allows users to quickly
and easily find reliable help for their everyday needs.</p>}
       </div>
       <div className={faq2?'faqborderleft mx-auto mt-4 mb-4':'mx-auto mt-4 mb-4'}>
         <div className='answerbox'><h4 className='answertitle answertitlemargin'>Safeguarding & Confidentiality</h4>{faq2===true?<button className='plus' onClick={()=>setFaq2(false)}><img src='/assets/Section close icon.png'/></button>:<button className='plus' onClick={()=>setFaq2(true)}><img src='/assets/Section open icon.png'/></button>}</div>
         {faq2 &&  <p className="mx-2 mt-2" style={{textAlign:"left"}}>Local Tasker is a platform that connects individuals
and businesses with local service providers who can
perform various tasks such as cleaning, handyman
work, gardening, and more. It allows users to quickly
and easily find reliable help for their everyday needs.</p>}
       </div>
       <div className={faq3?'faqborderleft mx-auto mt-4 mb-4':'mx-auto mt-4 mb-4'}>
         <div className='answerbox'><h4 className='answertitle answertitlemargin'>Embodying Dependability</h4>{faq3===true?<button className='plus' onClick={()=>setFaq3(false)}><img src='/assets/Section close icon.png'/></button>:<button className='plus' onClick={()=>setFaq3(true)}><img src='/assets/Section open icon.png'/></button>}</div>
         {faq3 &&  <p className="mx-2 mt-2" style={{textAlign:"left"}}>Local Tasker is a platform that connects individuals
and businesses with local service providers who can
perform various tasks such as cleaning, handyman
work, gardening, and more. It allows users to quickly
and easily find reliable help for their everyday needs.</p>}
       </div>
       <div className={faq5?'faqborderleft mx-auto mt-4 mb-4':'mx-auto mt-4 mb-4'}>
         <div className='answerbox'><h4 className='answertitle answertitlemargin'>The Professional Tasker</h4>{faq5===true?<button className='plus' onClick={()=>setFaq5(false)}><img src='/assets/Section close icon.png'/></button>:<button className='plus' onClick={()=>setFaq5(true)}><img src='/assets/Section open icon.png'/></button>}</div>
         {faq5 &&  <p className="mx-2 mt-2" style={{textAlign:"left"}}>Local Tasker is a platform that connects individuals
and businesses with local service providers who can
perform various tasks such as cleaning, handyman
work, gardening, and more. It allows users to quickly
and easily find reliable help for their everyday needs.</p>}
       </div>
       <div className={faq6?'faqborderleft mx-auto mt-4 mb-4':'mx-auto mt-4 mb-4'}>
         <div className='answerbox'><h4 className='answertitle answertitlemargin'>Striving for Excellence</h4>{faq6===true?<button className='plus' onClick={()=>setFaq6(false)}><img src='/assets/Section close icon.png'/></button>:<button className='plus' onClick={()=>setFaq6(true)}><img src='/assets/Section open icon.png'/></button>}</div>
         {faq6 &&  <p className="mx-2 mt-2" style={{textAlign:"left"}}>Local Tasker is a platform that connects individuals
and businesses with local service providers who can
perform various tasks such as cleaning, handyman
work, gardening, and more. It allows users to quickly
and easily find reliable help for their everyday needs.</p>}
       </div>
       <div className={faq7?'faqborderleft mx-auto mt-4 mb-4':'mx-auto mt-4 mb-4'}>
         <div className='answerbox'><h4 className='answertitle answertitlemargin'>Upholding Integrity</h4>{faq7===true?<button className='plus' onClick={()=>setFaq7(false)}><img src='/assets/Section close icon.png'/></button>:<button className='plus' onClick={()=>setFaq7(true)}><img src='/assets/Section open icon.png'/></button>}</div>
         {faq7 &&  <p className="mx-2 mt-2" style={{textAlign:"left"}}>Local Tasker is a platform that connects individuals
and businesses with local service providers who can
perform various tasks such as cleaning, handyman
work, gardening, and more. It allows users to quickly
and easily find reliable help for their everyday needs.</p>}
       </div>
       <div className={faq8?'faqborderleft mx-auto mt-4 mb-4':'mx-auto mt-4 mb-4'}>
         <div className='answerbox'><h4 className='answertitle answertitlemargin'>Prioritising Safety</h4>{faq8===true?<button className='plus' onClick={()=>setFaq8(false)}><img src='/assets/Section close icon.png'/></button>:<button className='plus' onClick={()=>setFaq8(true)}><img src='/assets/Section open icon.png'/></button>}</div>
         {faq8 &&  <p className="mx-2 mt-2" style={{textAlign:"left"}}>Local Tasker is a platform that connects individuals
and businesses with local service providers who can
perform various tasks such as cleaning, handyman
work, gardening, and more. It allows users to quickly
and easily find reliable help for their everyday needs.</p>}
       </div>
       </div>       
    </div>
  )
}
