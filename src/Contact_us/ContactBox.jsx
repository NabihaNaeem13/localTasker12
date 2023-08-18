import React from 'react'

export const ContactBox = () => {
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col text-center' style={{backgroundImage:`url('/assets/ContactUsbg@2x.svg')`}}>
                <h1 className='mt-5 mx-5 mb-3' style={{color:"#1171ca"}}>Contact Us</h1>
                <p className='mx-md-5' style={{color:"#aba9a9"}}>Please provide detailed information
below and our agents will reply via
email as soon as possible.</p>
              <form className='mx-auto mb-5'>
                <select className='contactforminput'>
                    <option>I am trying to become a tasker</option>
                    <option>I am trying to become a tasker</option>
                    <option>I am trying to become a tasker</option>
                    <option>I am trying to become a tasker</option>
                </select>
                <div>
                <input className='contactforminput' name="name" placeholder='full name*'/>
                </div>
                <div>
                <input type='email' className='contactforminput' name="email" placeholder='Albertjay@gmal.com*'/>
                </div>
                <div>
                <input className='contactforminput' name="subject" placeholder='subject*'/>
                </div>
                <textarea className='textarea'></textarea>
                <div className='row mx-md-5 mx-sx-4'>
                    <div className='col'><button id="uploadbtn">Upload files (optional)</button></div>
                    <div className='col'><button className='hirebtn' style={{marginTop:"1rem"}}>Submit</button></div>
                </div>
              </form>
            </div>
            <div className='col text-center' style={{backgroundImage:`url('/assets/Immediatehelpbg@2x.svg')`}}>
            <h1 className='mt-5 mx-5 mb-3' style={{color:"#fff"}}>Immediate help?</h1>
            <p className='mx-md-5' style={{color:"#d3b308"}}>Our team is always there to help
you. Let’s start chat with us...</p>
             <div className='chatusCard'>
               <img src="/assets/chatus.JPG"/>
               <h5 className='m-3'>Chat with us</h5>
               <p>Our team is always there to help you.</p>
               <button className='hirebtn' style={{marginTop:"1rem"}}>Start Chat</button>
             </div>
            </div>
        </div>
    </div>
  )
}
