import React from 'react'
import { Usefilter } from './Context'
const Brand = () => {
const {dispatch}=Usefilter();
    const  send=(e)=>{
dispatch({
  type:"size",
  check:e.target.checked,
  value:e.target.value
})
    }
  return (
    <>
    <div className='xertgh'>
      
    <input type="checkbox" value="pulsar" onChange={(e)=>send(e)}/>
    <span>pulsar</span>
    <input type="checkbox" value="honda" onChange={(e)=>send(e)}/> <span>honda</span>
    <input type="checkbox" value="ktm" onChange={(e)=>send(e)}/> <span>ktm</span>
    </div>
  
    </>
  )
}

export default Brand