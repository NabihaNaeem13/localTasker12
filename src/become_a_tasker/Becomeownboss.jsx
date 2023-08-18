import React from 'react'
import Image from 'next/image';

export const Becomeownboss = () => {
  return (
    <div className="container mt-5 mb-5">
    <h1 className='lefttitle text-center'>Be your own boss</h1> 
    <p className='text-center mt-2 mb-2 valuesourparaafter'>Take charge of your future and be your own boss. Together, we can explore
opportunities and empower you to achieve your entrepreneurial dreams</p> 
     <div className='ownbossgrid'>
     <div className='ownbossCard'>
     <div className='yellowbgcircle yellowbgcirclemobile'>
     <img src="/assets/Communicate directly with clients icon@2x.svg" alt="1" className="becomeyellowcirclemargin"/>
     </div>
               <p>Communicate directly with clients</p>
              </div>
     <div className='ownbossCard'>
     <div className='yellowbgcircle yellowbgcirclemobile'>
     <img src="/assets/Agree your own rates bg@2x.svg" alt="2" className="becomeyellowcirclemargin"/>
     </div>
               <p>Agree your own rates</p>
              </div>
     <div className='ownbossCard'>
     <div className='yellowbgcircle yellowbgcirclemobile'>
       <img src="/assets/Grow your business icon@2x.svg" alt="3" className="becomeyellowcirclemargin"/>
     </div>
               <p>Grow your business</p>
              </div>
     <div className='ownbossCard'>
     <div className='yellowbgcircle yellowbgcirclemobile'>
     <img src="/assets/Get reviewed and rated icon@2x.svg" alt="4" className="becomeyellowcirclemargin"/>
     </div>
               <p>Get reviewed or rated</p>
              </div>
              </div>
    </div>
  )
}
