import React, { useState } from 'react'
import Link from 'next/link';
import {AiOutlineMenu} from "react-icons/ai";
import { useRouter } from 'next/router'

export const Header = () => {
    const [mobileMenu,setMobileMenu]=useState(false);
    const [isOpen, setIsOpen] = useState(true);
    
  const closeSidebar = () => {
    setIsOpen(false);
  };
    const router=useRouter();
    const trogglebtn=()=>{
        if(mobileMenu===false){
          setMobileMenu(true);
        }else{
          setMobileMenu(false);
        }
       }

  return (
    <>
    <nav className='nav-container'>
        <div><Link href='/'><a><img src="/assets/Logo.svg" alt='logo.png'/></a></Link></div>
        <ul className='nav-ul'>
        <li><Link href='https://localtasker.thedatech.com/login'>Services</Link></li>
        <li><Link href='/Howitwork'>How it works</Link></li>
        <li><Link href='https://localtasker.thedatech.com/login-option'>Sign Up</Link> / <Link href='https://localtasker.thedatech.com/login-option'>Login</Link></li>
        <button className='nav_btn' onClick={()=>router.push('/become_a_tasker')}>Become A Tasker</button>
        </ul>
    </nav>
    <nav className='nav-mobile-container'>
    <div className='nav-inner-box'>
    <AiOutlineMenu className='nav-menu-icon' onClick={trogglebtn}/>
     <div className='text-center'><img src="/assets/Logo.svg" alt='logo.png' id="mobilelogo"/></div>
    </div>
    </nav>
    {mobileMenu && <ul className='nav-mobile-ul'>
        <button className='nav-closebtn' onClick={()=>setMobileMenu(false)}>X</button>
        <li><Link href='https://localtasker.thedatech.com/login'>Services</Link></li>
        <li><Link href='/Howitwork'><a>How it works</a></Link></li>
        <li><Link href='https://localtasker.thedatech.com/login-option'>Signup</Link>/<Link href='https://localtasker.thedatech.com/login-option'>Login</Link></li>
       <Link href='/become_a_tasker'><button className='nav-mobile-btn mb-3'>Become A Tasker</button></Link>
    </ul>}
    </>
  
  )
}
