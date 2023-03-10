
import React, { useState } from 'react'
import "./App.css"
import KTM from './Datacar'
import PULSAR from './Pulsar'
import Honda from './Honda'
import rightarrow from "./rightarrow.png"

const Box = () => {
  const [bike, setbike] = useState(KTM)
  return (
    <>
      <div className='box1'>
        <div className='cvft67'>

          <div className='seltop45'>
            <a className='brande' onMouseOver={()=>{setbike(KTM)}}>KTM</a>
            <a className='brande bnj' onMouseOver={()=>{setbike(PULSAR)}}>PULSAR</a>
            <a className='brande' onMouseOver={()=>{setbike(Honda)}}>HONDA</a>
          </div>
          <div className='bnjk'>
{bike.map((c)=>( <a className='card34'>
              <img src={c.image} alt=" "/>
              <div className='overlay'>
                <a className='text'>
                  <a className='fde'>
                    <span className='ert'>Price -</span><span className='green'>₹ 904.5/day
                    </span>
                  </a>
                  <a className='fde'>
                    <span className='ert'>Brand -</span><span className='green'>{c.brand}
                    </span>
                  </a>
                  <a className='datE34'>
                    <a className='xcder'>
                      <a className='extra5'>Extra Day Charges -</a>
                      <a className='ext45cv'>₹ 980/day </a>
                    </a>
                    <a className='xcder'>
                      <a className='extra5'>Engine -</a>
                      <a className='ext45cv'>{c.engine}</a>

                    </a>
                  </a>
                </a>
              </div>
            </a>
))}
           
           
            <a className='cvrxc'>
              <a className='xe45v'>
                <img src={rightarrow} alt=""/>
              </a>
              <a className='cvt6'>More</a>
            </a>
    
          </div>
        </div>
      </div>


    </>
  )
}

export default Box

