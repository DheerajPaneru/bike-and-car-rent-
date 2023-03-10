import React from 'react'
import { Usefilter } from './Context';
const BikebrandCar = () => {
  const {dispatch}=Usefilter();
  const  send=(e)=>{dispatch({
type:"size",
check:e.target.checked,

value:e.target.value
})
  }
  return (
    <>
    <div className='xertgh'>
      
    <input type="checkbox" value="suv" onChange={(e)=>send(e)}/>
    <span>SUV</span>
    <input type="checkbox" value="Maruti" onChange={(e)=>send(e)}/>
    <span>Maruti</span>
    <input type="checkbox" value="Creata" onChange={(e)=>send(e)}/>
    <span>Creata</span>
    <input type="checkbox" value="Tata" onChange={(e)=>send(e)}/>
    <span>Tata</span>
    <input type="checkbox" value="i10" onChange={(e)=>send(e)}/>
    <span>i10</span>
    </div>
    </>
  )
}

export default BikebrandCar