
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Usefilter } from './Context'
import DATA3 from './Data3'
const Test5 = () => {
  const {state}=Usefilter()
  const naivigate=useNavigate()
  const [data,setdata]=useState(DATA3)
const send=()=>{
naivigate("/x")
}
  useEffect(()=>{
    setdata(state.userd)
    console.log(state.userd);
  })
  const navigate = useNavigate()
    
  return (
    <>
    <button onClick={()=>navigate(-1)}>back</button>
            
    <button onClick={send}>Add detail</button>
  {data.map((c)=>{
    return(
      <>
      
      <h1>name:{c.name}</h1>
      <h2>roll:{c.rollno}</h2>
      </>
    )
  })}
    
    </>
  )
}

export default Test5