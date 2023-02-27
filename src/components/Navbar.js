import React from 'react'
import Img from '../images/hospital.jpg'
import '../index.css'
import { Link } from 'gatsby'

const Navbar = () => {
  return (
  
   <div className=' bg-cyan-50 mt-2'>
   <div className="navbar">
  <div className="navbar-start">
    
    <a className="normal-case text-3xl font-sans text-blue-600 font-semibold ml-5">Medi<span className='text-red-400'>Care+
    </span></a>
  </div>
  <div className="navbar-right">
    <ul className="menu menu-horizontal px-1 navbar-end">
      <Link  className= 'hover:text-blue-600 hover:underline decoration-1 font-semibold mr-10'>Home</Link>
      <Link  className='hover:text-blue-600 hover:underline decoration-1 font-semibold mr-10'>About</Link>
      <Link  className='hover:text-blue-600 hover:underline decoration-1 font-semibold mr-10'>Service</Link>
      <Link  className='hover:text-blue-700 hover:underline decoration-1 font-semibold mr-4'>News</Link>

     </ul>
     <button className="btn btn-primary btn1">Contact</button>
  </div>
</div>
  <h1 className='text-3xl m-24 '>welcome to medicare clinic</h1>
  <h1 className='text-8xl best '>Best specialist</h1>
   <section className='ml-20 mt-6'>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing <br />
     Iusto earum aliquam quaerat fuga, ad, est, assumenda sequi eum 
     <br />
     molestias repudiandae ullam. Nostrum odio consequuntur nobis 
     <br />
     debitis fugiat, voluptate ipsum sed?</p>
   </section>
   <div><button className="btn btn-primary ml-24 mt-4">make an appointment</button>
   <button className="btn btn-primary ml-2 mt-4">Department</button>
   </div>
  
    <img src='https://img.freepik.com/free-vector/tiny-doctors-patients-near-hospital-flat-vector-illustration-therapist-face-mask-saying-goodbye-cured-people-near-medical-building-ambulance-emergency-clinic-concept_74855-25338.jpg?w=900&t=st=1677438580~exp=1677439180~hmac=a72c1669f9838da69bddb2ad0bec76e47b1179e67d6da3f2eef314c8d2718144'  alt=""  className='img1'/>



   

</div>
      



 
   
      
  )
}

export default Navbar