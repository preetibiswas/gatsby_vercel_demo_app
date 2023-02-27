import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import Img2 from '../images/avatar1.jpg'
import Img from '../images/comma.png'
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Review = () => {
  const [review,setReview]=useState([])
 
  useEffect(()=>{
    fetchdata()
  },[])
  const fetchdata=async()=>{
    const response=await axios.get("https://admin.tomedes.com/api/v1/get-reviews?page=1")
    const result=response.data
    const data=result.data
    console.log(data)
    setReview(data)
    

  }
  return (
    
   <div className=''>
     <section className="text-5xl font-bold  mb-12 pb-12 ml-12">What our customer say </section>
     <Swiper style={{ width:'70%'}} 
      // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={20}
      slidesPerView={2}
     
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>
        {review.map(({Name,Reviews,rating},index)=>{
          return(
            <SwiperSlide className='' key={index}>
              
           
           <div className="card card-side bg-base-100 shadow-2xl mr-12 mb-24  ">
            
  <div className="card-body">
  <p className='text-left text-sm font-serif mb-4'>{Reviews}</p>
  <div className='flex flex-row ' >
   <img className="w-12 rounded-full" src={Img2}alt="Woman's Face"/>

    <span className='font-bold ml-4'>{Name} <br /> <span className='font-light text-sm'>Patient</span></span>  
   
    
    
   </div>

   
    
  </div>
</div>


          
        </SwiperSlide>

          )
        })

        }
        
        
      </Swiper>
     
    </div>
  )
}

export default Review