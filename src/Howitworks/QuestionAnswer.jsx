"use client"
import Link from 'next/link';
import React, { useState } from 'react'



const QuestionAnswer = ({btnvalue}) => {
    const [showanswer,setShowanswer]=useState(true);
    const [showanswer1,setShowanswer1]=useState(false);
    const [showanswer2,setShowanswer2]=useState(false);
    const [showanswer3,setShowanswer3]=useState(false);
  return (
 <>
     <div className='container mb-5 desktopboxdisplay'>
    <div className='row mt-5 mb-5'>
     <div className='col-md-6'>
        <h1 className='lefttitle mt-5'>Your Questions Answered</h1>
        <p className='mt-4' style={{ color:'rgb(181, 182, 183)'}}>We're an organization with a mission.Constantly striving to make the impossible possible,we bring about meaningful change in communities and empower those who need it most.</p>
<Link href={btnvalue}><button className='hirebtn'>
Read more
</button></Link>
     </div>
     <div className='col-md-6'>
     <div className='answerbox mt-5'>
        <h5 className='answertitle'>What is Local Tasker?</h5>{showanswer===true?<button className='plus' onClick={()=>setShowanswer(false)}><img src='/assets/Section close icon.png' alt="mini" style={{borderRadius:"50%"}}/></button>:<button className='plus' onClick={()=>setShowanswer(true)}><img src='/assets/Section open icon.png' alt="plus" style={{borderRadius:"50%"}}/></button>}</div>
        {showanswer && <p className='mx-3 mt-1' style={{ color:'rgb(181, 182, 183)'}}>LacalTasker is a platform that connects individuals and businesses with local service providers who can perform various tasks such as cleaning,handyman work,gardening,and more.It allows users to quickly and easily find reliable help for their everyday needs.</p>}
        <div className='answerbox'>
        <h5 className='answertitle'>What kind of taskers are on Local Tasker?</h5>{showanswer1===true?<button className='plus' onClick={()=>setShowanswer1(false)}><img src='/assets/Section close icon.png' alt="mini" style={{borderRadius:"50%"}}/></button>:<button className='plus' onClick={()=>setShowanswer1(true)}><img src='/assets/Section open icon.png' alt="plus" style={{borderRadius:"50%"}}/></button>}</div>
        {showanswer1 && <p className='mx-3 mt-1' style={{ color:'rgb(181, 182, 183)'}}>LacalTasker is a platform that connects individuals and businesses with local service providers who can perform various tasks such as cleaning,handyman work,gardening,and more.It allows users to quickly and easily find reliable help for their everyday needs.</p>}
        <div className='answerbox'>
        <h5 className='answertitle'>How much doees it cost?</h5>{showanswer2===true?<button className='plus' onClick={()=>setShowanswer2(false)}><img src='/assets/Section close icon.png' alt="mini" style={{borderRadius:"50%"}}/></button>:<button className='plus' onClick={()=>setShowanswer2(true)}><img src='/assets/Section open icon.png' alt="plus" style={{borderRadius:"50%"}}/></button>}</div>
        {showanswer2 && <p className='mx-3 mt-1' style={{ color:'rgb(181, 182, 183)'}}>LacalTasker is a platform that connects individuals and businesses with local service providers who can perform various tasks such as cleaning,handyman work,gardening,and more.It allows users to quickly and easily find reliable help for their everyday needs.</p>}
        <div className='answerbox'>
        <h5 className='answertitle'>Can i become a local Tasker?</h5>{showanswer3===true?<button className='plus' onClick={()=>setShowanswer3(false)}><img src='/assets/Section close icon.png' alt="mini" style={{borderRadius:"50%"}}/></button>:<button className='plus' onClick={()=>setShowanswer3(true)}><img src='/assets/Section open icon.png' alt="plus" style={{borderRadius:"50%"}}/></button>}</div>
        {showanswer3 && <p className='mx-3 mt-1' style={{ color:'rgb(181, 182, 183)'}}>LacalTasker is a platform that connects individuals and businesses with local service providers who can perform various tasks such as cleaning,handyman work,gardening,and more.It allows users to quickly and easily find reliable help for their everyday needs.</p>}
     </div>
    </div>
    </div>
    <div className='container mobiledisplay'>
    <h1 className='lefttitle text-center mt-2'>Your Questions Answered</h1>
    <p className='mt-4 ourstorypara'>We're an organization with a mission.Constantly striving to make the impossible possible,we bring about meaningful change in communities and empower those who need it most.</p>
    <div className='answerbox mt-2'>
        <h5 className='answertitle'>What is Local Tasker?</h5>{showanswer===true?<button className='plus' onClick={()=>setShowanswer(false)}><img src='/assets/Section close icon.png' alt="mini" style={{borderRadius:"50%"}}/></button>:<button className='plus' onClick={()=>setShowanswer(true)}><img src='/assets/Section open icon.png' alt="plus" style={{borderRadius:"50%"}}/></button>}</div>
        {showanswer && <p className='mt-2 ourstorypara'>LacalTasker is a platform that connects individuals and businesses with local service providers who can perform various tasks such as cleaning,handyman work,gardening,and more.It allows users to quickly and easily find reliable help for their everyday needs.</p>}
        <div className='answerbox'>
        <h5 className='answertitle'>What kind of taskers are on Local Tasker?</h5>{showanswer1===true?<button className='plus' onClick={()=>setShowanswer1(false)}><img src='/assets/Section close icon.png' alt="mini" style={{borderRadius:"50%"}}/></button>:<button className='plus' onClick={()=>setShowanswer1(true)}><img src='/assets/Section open icon.png' alt="plus" style={{borderRadius:"50%"}}/></button>}</div>
        {showanswer1 && <p className='mt-2 ourstorypara'>LacalTasker is a platform that connects individuals and businesses with local service providers who can perform various tasks such as cleaning,handyman work,gardening,and more.It allows users to quickly and easily find reliable help for their everyday needs.</p>}
        <div className='answerbox'>
        <h5 className='answertitle'>How much doees it cost?</h5>{showanswer2===true?<button className='plus' onClick={()=>setShowanswer2(false)}><img src='/assets/Section close icon.png' alt="mini" style={{borderRadius:"50%"}}/></button>:<button className='plus' onClick={()=>setShowanswer2(true)}><img src='/assets/Section open icon.png' alt="plus" style={{borderRadius:"50%"}}/></button>}</div>
        {showanswer2 && <p className='mt-2 ourstorypara'>LacalTasker is a platform that connects individuals and businesses with local service providers who can perform various tasks such as cleaning,handyman work,gardening,and more.It allows users to quickly and easily find reliable help for their everyday needs.</p>}
        <div className='answerbox'>
        <h5 className='answertitle'>Can i become a local Tasker?</h5>{showanswer3===true?<button className='plus' onClick={()=>setShowanswer3(false)}><img src='/assets/Section close icon.png' alt="mini" style={{borderRadius:"50%"}}/></button>:<button className='plus' onClick={()=>setShowanswer3(true)}><img src='/assets/Section open icon.png' alt="plus" style={{borderRadius:"50%"}}/></button>}</div>
        {showanswer3 && <p className='mt-2 ourstorypara'>LacalTasker is a platform that connects individuals and businesses with local service providers who can perform various tasks such as cleaning,handyman work,gardening,and more.It allows users to quickly and easily find reliable help for their everyday needs.</p>}
        <div className='pb-3 text-center'>
        <Link href={btnvalue}><button className='hirebtn'>
      Read more
     </button></Link>
        </div>
     </div>
 </>
  )
}

export default QuestionAnswer