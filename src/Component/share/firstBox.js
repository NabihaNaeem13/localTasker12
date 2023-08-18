import React from 'react'
import Link from 'next/link';
export const FirstBox = () => {
  return (
    <div className='firstbox-container'>
       <div className='firstbox-container-sub'>
        <h1 className='firstbox-container-subtitle'>Get the help you need but
closer than you think!</h1>
<p className='firstbox-container-subpara'>From odd jobs to bigger projects, your neighbour's got you covered!<br/>

Local Tasker makes it easy for you to get help with anything, from cleaning to repairs.</p>

   <div className='firstbox-container-subinputbox'><input placeholder='What services are you looking for?'/><Link href="https://localtasker.thedatech.com/login"><button><img src="assets/Vector@2x.svg" alt="alt"/></button></Link></div>
       </div>
    </div>
  )
}
