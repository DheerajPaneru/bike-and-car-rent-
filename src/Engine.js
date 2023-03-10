import React from 'react'
import { Usefilter } from './Context'
const Engine = () => {
  const {dispatch}=Usefilter();
    const send=(e)=>{
dispatch({
  type:"engine",
  check:e.target.checked,
  value:parseInt(e.target.value)

})
    }
  return (
    <>
    <div className='xertgh'>
      
       <input type="checkbox" value="200" onChange={(e)=>send(e)}/>
    <span>200+cc</span>
    <input type="checkbox" value="300" onChange={(e)=>send(e)}/> <span>300+cc</span>
    <input type="checkbox" value="100" onChange={(e)=>send(e)}/> <span>100-150cc</span>
    </div>
    </>
  )
}

export default Engine