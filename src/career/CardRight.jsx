import React from 'react'
import Image from 'next/image'

export const CardRight = () => {
  return (
 <>
     <div className='container desktopboxdisplay'>
    <div className='row mt-5 mb-5'>
     <div className='col-md-6'>
     <div id="leftimageconor" className='mt-2 mb-2'>
     <div className='rect3'></div>
     <div className='rect4'>
     <Image src='/missiondriven.png' className='vhgimage' alt="earn" width={500} height={380} style={{borderRadius:"15px"}}/>
     </div>
     </div>
     </div>
     <div className='col-md-6'>
        <h1 className='lefttitle'>Why Local Tasker?</h1>
        <p className='mt-3' style={{color: "rgb(123 127 131)"}}><strong>Community Impact:</strong> By joining Local Tasker, youll be a
part of a team that directly impacts the lives of people in
your community.</p>
<p className='mt-3' style={{color: "rgb(123 127 131)"}}><strong>Growth Opportunities:</strong> We believe in the potential of our
employees and provide ample opportunities for career
advancement.</p>
<p className='mt-3' style={{color: "rgb(123 127 131)"}}><strong>Inclusive Environment:</strong> We re proud of our diverse team
and uphold a culture of respect and inclusion.</p>
<p className='mt-3' style={{color: "rgb(123 127 131)"}}><strong>Work-Life Balance:</strong> Flexible schedules and remote work
opportunities allow our team members to balance their
personal and professional lives effectively.</p>
<p className='mt-3' style={{color: "rgb(123 127 131)"}}>
<strong>Meaningful equity:</strong> We re all working together to succeed
and you get an option to have a slice of the pie.
</p>
     </div>
    </div>
    </div>
    <div className='container mobiledisplay' style={{marginTop:"1rem"}}>
      <h1 className='lefttitle pt-1 text-center'>Why Local Tasker?</h1>
      <div id="leftimageconor" className='mt-2 mb-2'>
     <div className='rect3'></div>
     <div className='rect4' style={{top:'20px'}}>
     <Image src='/missiondriven.png' className='vhgimage' alt="earn" width={400} height={380} style={{borderRadius:"15px"}}/>
     </div>
     </div>
      <p className='ourstorypara' style={{marginTop:"19rem"}}><strong>Community Impact:</strong> By joining Local Tasker, youll be a
part of a team that directly impacts the lives of people in
your community.</p>
      <p className='ourstorypara mt-4'><strong>Growth Opportunities:</strong> We believe in the potential of our
employees and provide ample opportunities for career
advancement.</p>
      <p className='ourstorypara mt-4'><strong>Inclusive Environment:</strong> We re proud of our diverse team
and uphold a culture of respect and inclusion.</p>
      <p className='ourstorypara mt-4'><strong>Work-Life Balance:</strong> Flexible schedules and remote work
opportunities allow our team members to balance their
personal and professional lives effectively.</p>
      <p className='ourstorypara mt-4'><strong>Meaningful equity:</strong> We re all working together to succeed
and you get an option to have a slice of the pie.</p>
      </div>
 </>
  )
}
