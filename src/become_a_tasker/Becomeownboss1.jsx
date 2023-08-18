import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

export const Becomeownboss1 = () => {
  return (
    <div className="container text-center mt-5 mb-5">
    <h1 className='lefttitle text-center'>Getting Started</h1> 
    <p className='text-center mt-2 mb-2 valuesourparaafter'>From the small stuff to big projects, Local Tasker makes work easy so teams know
what to do, why it matters, and how to get it done, join our community today.</p> 
     <div className='ownbossgrid'>
     <div className='ownbossCard'>
     <div className='yellowbgcircle yellowbgcirclemobile'>
     <img src="/assets/Sign up icon@2x.svg" alt="1" className="becomeyellowcirclemargin"/>
     </div>
               <p>Sign up</p>
               <span style={{color:"#a7a5a5"}}>Begin by joining Local Tasker and
downloading the Tasker app to
finalise your registration</span>
              </div>
     <div className='ownbossCard'>
     <div className='yellowbgcircle yellowbgcirclemobile'>
     <img src="/assets/Set up your profile icon@2x.svg" alt="2" className="becomeyellowcirclemargin"/>
     </div>
               <p>Set up your profile</p>
               <span style={{color:"#a7a5a5"}}>Select the services
you're offering and
define your work area</span>
              </div>
     <div className='ownbossCard'>
     <div className='yellowbgcircle yellowbgcirclemobile'>
     <img src="/assets/Verify eligibility icon@2x.svg" alt="3" className="becomeyellowcirclemargin"/>
     </div>
               <p>Verify eligibility</p>
               <span style={{color:"#a7a5a5"}}>By carefully reviewing your
information, we give future
clients the confidence to
choose you for their tasks</span>
              </div>
     <div className='ownbossCard'>
     <div className='yellowbgcircle yellowbgcirclemobile'>
     <img src="/assets/Start tasking icon@2x.svg" alt="4" className="becomeyellowcirclemargin"/>
     </div>
               <p>Start tasking</p>
               <span style={{color:"#a7a5a5"}}>Amplify your reach by selecting
your work schedule and skills.
Become the sought after local
Tasker everyone is looking for!</span>
              </div>
              </div>
              <Link href="https://localtasker.thedatech.com/register?type=1"><button className='hirebtn'>Join Local Tasker</button></Link>
    </div>
  )
}
