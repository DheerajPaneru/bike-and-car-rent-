import React from 'react'
import { Usefilter } from './Context'
const Seater = () => {
    const dispatch=Usefilter();
    const send=(e)=>{
        dispatch({
          type:"bandc",
            value:e.target.value,
            check:e.target.checked
        })
            }
  return (
    <>
    <input type="checkbox" value="5" onChange={(e)=>send(e)}/>
    <span>5</span>
    <input type="checkbox" value="7" onChange={(e)=>send(e)}/>
    <span>7</span>
    
    </>
  )
}

export default Seater