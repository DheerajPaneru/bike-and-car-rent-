import React from 'react'
import { Usefilter } from './Context'

const Seat = () => {
    const {dispatch}=Usefilter();
    const  send=(e)=>{
        dispatch({
          type:"seat",
          check:e.target.checked,
          value:e.target.value
        })
            }
         
  return (
    <>
    <div className='xertgh'>
      
      <input type="checkbox" value="5" onChange={(e)=>send(e)}/>
      <span>5💺</span>
      <input type="checkbox" value="7" onChange={(e)=>send(e)}/> <span>7💺</span>
      
      </div>
  
    </>
  )
}

export default Seat