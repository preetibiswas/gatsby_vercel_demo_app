import React from 'react'

const Newsletter = () => {
  return (

      
        <div className="hero min-h-screen bg-blue-200">
        
  <div className="hero-content flex-col flex-row-reverse">
    <div className="text-center lg:text-top">
    
      <h1 className="text-3xl font-bold ">Subscribe to Newsletter</h1>
      <p className="py-6">we have a wide experience in experience and design</p>
    </div>
    <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
       
        <div className="form-control mt-6">
          <button className="btn btn-primary">send</button>
        </div>
      </div>
    </div>
  </div>
</div>
 
  )
}

export default Newsletter