import React from 'react'
import Dental from '../images/dental-crown.png'
import Brain from '../images/brain.png'
import Lungs from '../images/lungs.png'
import Baby from '../images/baby.png'
import '../styles/services.css'

const Services = () => {
  return (
    <div className=" mt-12 pt-12 bg-blue-200">
        <h1  className='text-3xl font-bold leading-loose text text-center'>Our  Services</h1>
        <p className='leading-loose text-center mt-4'>we provide you most full mdical services,so every  <br /> could have the opportunity to recerivr qualitative medical help</p>
        <div class="grid grid-cols-4 justify-items-center mt-12 text-sky-600 con justify-center">
        <div className='bg-slate-50 rounded-lg w-64 h-64  hover:bg-blue-500 mb-6 shadow-2xl hover:h-80'>
            <img src={Dental} alt=""  className='dental' />
        <h3 className='text-2xl font-semibold tracking-tight hover:text-white text-center'>Dental</h3>
        </div>

        <div className='bg-slate-50 rounded-lg w-64 h-64  hover:bg-blue-500 mb-6 shadow-2xl hover:h-80'>
            <img src={Lungs} alt=""  className='dental' />
            <h3 className='text-2xl font-semibold tracking-tight hover:text-white text-center'>Lungs</h3>
        </div>
        <div className='bg-slate-50 rounded-lg w-64 h-64 hover:bg-blue-500 mb-6 shadow-2xl hover:h-80'>
            <img src={Brain} alt=""  className='dental' />
            <h3 className='text-2xl font-semibold tracking-tight hover:text-white text-center'>Neurologists</h3>
        </div>
        <div className='bg-slate-50 rounded-lg w-64 h-64 hover:bg-blue-500 mb-6 shadow-2xl hover:h-80'>
            <img src={Baby} alt=""  className='dental' />
            <h3 className='text-2xl font-semibold tracking-tight hover:text-white text-center'>Dental</h3>
        </div>
   
     
        </div>
        </div>
  
  )
}

export default Services