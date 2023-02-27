import React from 'react'
import '../styles/work.css'
import Team from '../images/medical-team.png'
import Ambluence from '../images/ambulance.png'
import Injection from '../images/injection.png'


const Work = () => {
  return (
   <div className='bg-cyan-50 mb-24 flex   mb-12 container-lg '>
     <div className=' mt-24 '>
        <section>
            <p className='clinic'>Clinic with innovation</p>
            <p  className='mb-12'>We provide the most full medical services so every person could <br />have the oppurtunity to receive qualitative medical help</p>
             </section>
             <button className='btn ml-24'>learn more</button>
    </div >
    <div  className='relative ml-24 '> 
    
   
    
   
    <section className='w-48 h-48 drop-shadow-2xl rounded-2xl bg-slate-100  second'>
     <img src={Team} alt="" className=' second_img h-48' />
     
     <div className='absolute bottom-10 left-10 font-bold'>Qualified Doctors</div>
    </section>
    <section className='w-48 h-48 drop-shadow-2xl rounded-2xl bg-slate-100 first'>
     <img src={Injection} alt="" className='team h-48'  />
     <div className='absolute bottom-10 left-10 font-bold'>Emergency care</div>
    </section>
    <section className='w-48  h-48 drop-shadow-2xl rounded-2xl bg-slate-100 third'>
     <img src={Ambluence} alt="" className='third_img h-48' />
     <div className='absolute bottom-10 left-10 font-bold'>24 houre service</div>
     </section>
    
    
    </div>
   
   </div>
    
  )
}

export default Work