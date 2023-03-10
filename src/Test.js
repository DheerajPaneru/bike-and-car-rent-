import React, { useEffect, useState } from 'react'
import Test1 from './Test1'
import { useNavigate } from 'react-router-dom'
import { Usefilter } from './Context'
const Test = () => {
  const navigate=useNavigate()
  const [data,setdata]=useState(0)
  const [data1,setdata1]=useState()
  const [data2,setdata2]=useState()
  const [data3,setdata3]=useState()
  const [data4,setdata4]=useState()
const {dispatch}=Usefilter()
  const send=(e)=>{
dispatch({
  type:e.target.name,
  value:e.target.value
})
  }
    useEffect(()=>{
    },[])
    console.log(data1)
    console.log(data2)
  return (
    <>

    <button onClick={()=>navigate("/x")}>click</button>
    <input type="time" name="stime" value={data1} onChange={(e)=>send(e)}/>
    <span>start time</span>
    <input type="date" name="sdate" value={data2} onChange={(e)=>send(e)}/>
   <span>date</span>
   <input type="time" name="etime" value={data3} onChange={(e)=>send(e)}/>
    <span>end time</span>
    <input type="date"  name="edate"value={data4} onChange={(e)=>send(e)}/>
   <span> end date</span>
   
    </>
  )
}

export default Test