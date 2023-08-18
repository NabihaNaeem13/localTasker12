'use client'
import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data=[{
  id:1,
  title:"Submit your CV",
  icon:"/assets/Hiring Process 1@2x.svg"
},{
  id:2,
  title:"An initial video call",
  icon:"/assets/Hiring Process 2@2x.svg"
},{
  id:3,
  title:"Complete a technical exercise",
  icon:"/assets/Hiring Process 3@2x.svg"
},{
  id:4,
  title:"Interview (in person/remote)",
  icon:"/assets/Hiring Process 4@2x.svg"
},{
  id:5,
  title:"Receive an offer!",
  icon:"/assets/Hiring Process 5@2x.svg"
}]
export const Jobpost = ({setOpen}) => {
  var settings = {
    dots:false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
          }
        }
      ]
  };
  return (
    <div className='container mt-5 mb-5' style={{backgroundColor:"#f2f9fb",borderRadius:"28px"}}>
      <span id="lengthopening">View All Openings (6)<span style={{color:"#aba9a9"}}> | Marketing Manager</span></span>
     <h1 className='lefttitle mt-3 mb-3'>Marketing Manager</h1>
     <span style={{color:"#aba9a9"}}>Full Time</span>
     <h6 className='jobpostpara'>London, UK / Hybrid</h6>
     <p className='jobpostpara mb-4' style={{color:"black"}}>£50,000 £75,000 + equity</p>
     <p className='jobpostpara mt-4'>The quality of our app is everything to us at Muzz and our QA team is at the heart of it. We re looking
for a Senior/Lead Mobile QA Engineer to join our talented 6 strong team, to ensure we re building an
incredible product our members love.</p>
<p className='jobpostpara mt-4'>Muzz is the world s largest Muslim dating and marriage app. We ve got over 9 million members and
have helped more than 500,000 couples get married. We re on our way to becoming the first $1
billion Muslim tech brand - but we need your help!</p>
<button className='hirebtn'>Apply Now</button>
     <div className='row'>
        <div className='col-md-6 mt-5 mx-1'><h3 className='m-2'>We’re looking for</h3>
         <ul>
            <li><img src="/assets/tick byllets@2x.svg"/> 5+ years experience in QA</li>
            <li><img src="/assets/tick byllets@2x.svg"/> 2+ years experience of app testing</li>
            <li><img src="/assets/tick byllets@2x.svg"/> This is a manual test role</li>
            <li><img src="/assets/tick byllets@2x.svg"/> Experience building and leading a team</li>
            <li><img src="/assets/tick byllets@2x.svg"/> Building and implementing test strategies</li>
            <li><img src="/assets/tick byllets@2x.svg"/> Mentor and guide the team</li>
            <li><img src="/assets/tick byllets@2x.svg"/> The guru on Product knowledge</li>
            <li><img src="/assets/tick byllets@2x.svg"/> Somebody who ensures common user journeys</li>
            <li><img src="/assets/tick byllets@2x.svg"/> Ability to triage bugs</li>
            <li><img src="/assets/tick byllets@2x.svg"/> Somebody who can reproduce bugs report</li>
            <li><img src="/assets/tick byllets@2x.svg"/> A desire to try to break our apps</li>
            <li><img src="/assets/tick byllets@2x.svg"/> Experience working in an Agile team</li>
            <li><img src="/assets/tick byllets@2x.svg"/> Familiarity with project management</li>
            <li><img src="/assets/tick byllets@2x.svg"/> Hybrid - attend our London office twice a week</li>
            <li><img src="/assets/tick byllets@2x.svg"/> Leadership Skills</li>
         </ul>
        </div>
        <div className='col-md-6 mt-5 mx-1'><h3 className='m-2'>Bonus Points</h3>
        <ul>
        <li><img src="/assets/tick byllets@2x.svg"/> Mobile test automation experience or an interest</li>
            <li><img src="/assets/tick byllets@2x.svg"/> Experience in API testing (e.g. Postman, curl)</li>
            <li><img src="/assets/tick byllets@2x.svg"/> Experience of testing on both iOS and Android</li>
            <li><img src="/assets/tick byllets@2x.svg"/> Comfortable in databases writing SQL</li>
            <li><img src="/assets/tick byllets@2x.svg"/> Startup experience</li>
        </ul>
        </div>

     </div>

    <h1 className='lefttitle text-center mt-4 mb-4'>Our Hiring Process</h1>
    <p className='text-center jobpostpara'>We pride ourselves on making fast hiring decisions.</p>
    <div className='row text-center mx-5' style={{justifyContent:"center"}}>
       <Slider {...settings}>
       {data && data.map((item)=>{
        return(
          <div className='col' style={{justifyContent:"center"}} key={item.id}>
          <div className='hiringstepCard'>
        <img src={item.icon}/>
        <p>{item.title}</p>
       </div>
          </div>
        )
       })}
       </Slider>
       </div>
    <h1 className='lefttitle text-center mt-4 mb-4'>Apply Now</h1>
    <p className='text-center jobpostpara'>Attach your CV, and cover letter (optional) and we will try to
get back to you as soon as we can.</p>
     <form className='mx-auto text-center mb-3'>
     <div>
                <input className='contactforminput' name="name" placeholder='Full Name'/>
                </div>
                <div>
                <input type='email' className='contactforminput' name="email" placeholder='Your email'/>
                </div>
                <textarea className='textarea p-2' placeholder='Message/Cover Letter'></textarea>
                <div>
                  <button id="uploadcv">Upload CV</button>
                </div>
                <div><button className='hirebtn' style={{margin:"2rem 0rem 2rem"}}>Submit</button></div>
                 <button id="x" onClick={()=>setOpen(false)}>X</button>
     </form>
    </div>
  )
}
