import React from 'react'
import { Usefilter } from './Context'
const Clear = () => {
    const {dispatch}=Usefilter();
    const send=()=>{
dispatch({
    type:"clear"
})
    }
  return (
    <>
    
      
    <button onClick={send}>Clear Filter</button>
  
    </>
  )
}

export default Clear