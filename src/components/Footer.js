import React from 'react'

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded " style={{background: '#ECF4FF'}}>
  <div className="grid grid-flow-col gap-4">
    <a className="link link-hover link-primary">About</a> 
    <a className="link link-hover link-primary">Contact</a> 
    <a className="link link-hover link-primary">services</a> 
    <a className="link link-hover link-primary">news</a>
  </div> 
  
    
  <div>
    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
  </div>
</footer>
  )
}

export default Footer