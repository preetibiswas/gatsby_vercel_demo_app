import React from 'react'
import '../styles/doctor.css'

const Doctor = () => {
  return (
    <div className='pt-24 bg-blue-50 pb-24 '>

        <h1 className='hed1'> We have the best specialist</h1>
          <p className='text-center m-6 p-6 text-xs font-semibold'>We have a wide experience in experience design and strategy, <br />
          local-rooted knowledge </p>
          <div class="flex flex-row gap-5 m-4 p-4 justify-center col  ">
            <div class="flex2 rounded-md  ">
            <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"  className='img-photo ' alt="" />
               
                <div  className='text-center'>
                    dr preeti biswas <br />
                    dentist
                </div>
            </div>
            <div class="flex2 rounded-xl hover:">
                <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"  className='img-photo ' alt="" />
                <div className='text-center' >
                    dr preeti biswas <br />
                    dentist
                </div>
            </div>
            <div class="flex2 rounded-xl hover:">
                <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"  className='img-photo ' alt="" />
                <div  className='text-center'>
                    dr preeti biswas <br />
                    dentist
                </div>
            </div>
            <div class="flex2 rounded-xl ">
                <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"  className='img-photo' alt="" />
                <div className='text-center  font-bold'>
                    drrahul biswas <br />
                    doctor
                </div>
            </div>
            
        </div>

    </div>
  )
}

export default Doctor