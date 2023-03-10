
import React from 'react'
import bikelog from "./bikelogo.png"
const Footer = () => {
  return (
    <>
    
    <div className='footercv'>
        <div className='xawec'>
            
        <div className='boxlogo'>
            <img src={bikelog} alt=""/>
            <h1 className='cxwrt'>© 2022 Primemover Mobility Technologies Pvt Ltd. All rights reserved</h1>
        </div>
       
        <div className='boxlogo'>
            <a className='fotmenu'>Home</a>
            <a className='fotmenu'>FAQs</a>
            <a className='fotmenu'>Policy</a>
            <a className='fotmenu'>Blog</a>
        </div>
        <div className='boxlogo'>
            <a className='socialcv'>
             Social 
            </a>
            <a className='socialllogo'>
<a className='phot58'>
    <img src={bikelog} alt=""/>
</a>
<a className='phot58'>
<img src={bikelog} alt=""/>
</a>
<a className='phot58'>
<img src={bikelog} alt=""/>
</a>
<a className='phot58'>
<img src={bikelog} alt=""/>
</a>
<a className='phot58'>
<img src={bikelog} alt=""/>
</a>


            </a>
        </div>
        <div className='boxlogo'></div>

        </div>
    </div>
    
    
    </>
  )
}

export default Footer

