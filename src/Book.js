import React,{useEffect, useState} from 'react'

import {useSelector,} from "react-redux"
import { useNavigate } from 'react-router-dom'
import { Usefilter } from './Context'

const Book = () => {
  const {state}=Usefilter()

    const [money,setmoney]=useState(0)
    const [data,setdata]=useState([])
   const navigate=useNavigate()
    const getData=useSelector((state)=>state.cartreducer.cart)
   
  //  useEffect(()=>{
  //   const Data= window.localStorage.getItem("data")
   //     setdata(JSON.parse(Data))
   //   },[])
      const total=()=>{
        let price=0;
        getData.map((ele,k)=>price=ele.qnty*(ele.price)+price+ele.price*state.din)

        setmoney(price)
      }
    
      useEffect(()=>{
total()
      })
  return (
    <>
    {getData.map((c)=>(
    <div className='zxcert'>
    <img src={c.image} alt=" "/>
   <h1><span>Brand:</span>{c.brand}</h1>
   <h2><span>Price:</span>{c.price}/day</h2>
{ c.engine?<h2><span>Engine:</span>{c.engine}cc</h2>:null}
<span>Important Points to remeber
  <div style={{color:"red"}}>{c.describe}</div>
</span>
</div>
    ))}
     {getData.length>0?
      <h1> Total Price:{money}</h1>:null}
     
    <button>Proceed For Payment</button>
    
    </>
  )
}

export default Book