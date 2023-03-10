import React from 'react'
import { Usefilter } from './Context'
const Bikecar = () => {
    const {dispatch}=Usefilter();
    const send=(e)=>{
dispatch({
  type:"bandc",
   
  
    check:e.target.checked,
    value:e.target.value
})
    }
  return (
    <>
    <div className='xertgh'>
      
    <input type="checkbox" value="car" onChange={(e)=>send(e)}/>
    <span>Car</span>
    <input type="checkbox" value="bike" onChange={(e)=>send(e)}/>
    <span>Bike</span>
    </div>
    </>
  )
}

export default Bikecar