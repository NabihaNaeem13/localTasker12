import React from 'react'
import { OurStory } from '../Component/share/OurStory'
import { CardLeft } from './CardLeft';
import { CardRight } from './CardRight';
import Valuesour from './Valuesour';
import { Subcribe } from '../Component/share/Subcribe';
import { MobileOurstory } from '../Component/share/mobileOurstory';
import { MobileSubcribe } from '../Component/share/mobileSubcribe';
import { MobileCardLeft } from './MobileCardLeft';

const data=[{
  id:1,
  icon:"/assets/Vector@2x1.svg",
  title:"Diverse Range of Users",
  para:"Local Tasker serves a diverse range of individuals, including women, stay-at-home parents, retirees, students, and single parents."
},
{
  id:2,
  icon:"/assets/Vector@2x-11.svg",
  title:"Tasker Empowerment",
  para:" The platform allows taskers to determine their own prices, negotiate terms, and receive fair compensation, giving them control over their work and the ability to build their own businesses."
},
{
  id:3,
  icon:"/assets/tabler_gender-bigender@2x1.svg",
  title:"Gender Diversify",
  para:"Local Tasker emphasises gender diversity and promotes equality through initiatives such as promoting female taskers, implementing policies, and partnering with organisations "
},{
  id:4,
  icon:"/assets/Group@2x1.svg",
  title:"Flexible Earning Opportunities",
  para:"Local Tasker creates a supportive and inclusive community for individuals, providing guidance and resources to help grow their businesses and offering a positive"
},
{
  id:5,
  icon:"/assets/Jointhecommunityicon@2x.svg",
  title:"Empowerment & Community",
  para:"By choosing Local Tasker, individuals can benefit from the flexibility, empowerment, and community that come with being part of the platform."
},
{
  id:6,
  icon:"/assets/Vector@2x-21.svg",
  title:"Inclusive Business Growth",
  para:"Local Tasker creates a supportive and inclusive community for individuals, providing guidance and resources to help grow their businesses and offering a positive"
}]

export const metadata = {
  title: 'Who we are',
  description: 'Generated by create next app',
}

const Whoare = () => {
  return (
    <main>
      <div className='desktopboxdisplay'>
      <OurStory title="Our Story," subtitle="Our Journey" para="Welcome to Local Tasker, where we're not just a
platform, but a thriving community. We're all about
making life easier across the UK, one task at a time.
But it's not just about ticking off chores from your
to-do list - it's about creating opportunities,
empowering diverse individuals, and nurturing talent." btnvalue="Hire a Tasker" img1="/circle1who.png" img2="/bigcircleWho.png" link='https://localtasker.thedatech.com/register?type=2'/>
      </div>
      <div className='mobiledisplay'>
      <MobileOurstory title="Our Story," subtitle="Our Journey" para="Welcome to Local Tasker, where we're not just a platform, but a
thriving community. We're all about making life easier across
the UK, one task at a time. But it's not just about ticking off
chores from your to-do list - it's about creating opportunities,
empowering diverse individuals, and nurturing talent." btnvalue="Hire a Tasker" img="/bigcircleWho.png" link='https://localtasker.thedatech.com/register?type=2'/>
    </div>
    <div className='desktopboxdisplay'>
    <CardLeft/>
    </div>
     <MobileCardLeft title="The Local Tasker Vision" para1="At Local Tasker, we've made it simple to connect those
who need services with those ready to provide. Our
platform is designed with you in mind, user-friendly,
intuitive, and seamless, helping you find the perfect
match for any task." para2="But we're about more than just connections. At the heart
of Local Tasker lies a commitment to an inclusive and
nurturing environment. We believe in the potential of
every individual who joins our platform, and we're here
to support you as you grow your business, take control
of your finances, and build a foundation for your future." para3="So come and join us. Experience the Local Tasker
difference and be part of our exciting journey." img="/vision.png"/>
    <div className='desktopboxdisplay'><CardRight/></div>
    <MobileCardLeft title="Our Mission" para1="Local Tasker is creating a positive impact in the world by
empowering individuals from diverse backgrounds to
grow their businesses, showcase their skills, and achieve
financial independence." para2="Our platform connects service providers with those in
need, promoting a thriving community where talents
are recognised and appreciated. By fostering a
nurturing and inclusive environment, we enable people
to gain confidence in their abilities while receiving
mentorship and support to expand their businesses." para3="This contributes to the creation of job opportunities,
stimulates local economies, and helps reduce
unemployment." img="/mission.png"/>
  <Valuesour title="Our Values" para="" data={data}/>
  <div className='desktopboxdisplay'><Subcribe/></div>
   <MobileSubcribe/>
    </main>
  )
}

export default Whoare