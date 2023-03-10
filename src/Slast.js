import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux"
import { DEL } from './Action'
import { DEL1 } from './Action'
import { Usefilter } from './Context'
import { useDispatch } from "react-redux"
import { ADD } from './Action'
import { Link, useNavigate } from 'react-router-dom'
const Slast = () => {
  const [money, setmoney] = useState(0)
  const [ana, setana] = useState(false)
const {state}=Usefilter()
  const getData = useSelector((state) => state.cartreducer.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const del = (a) => {
    dispatch(DEL(a))
  }
  const more = (a) => {
    dispatch(ADD(a))
  }
  const remv = (a) => {
    dispatch(DEL1(a))
  }
  console.log(state.din,"fbg")
  const total = () => {
    let price = 0;
   // getData.map((ele, k) => price = ele.qnty*(ele.price) + price+ele.qnty*(ele.price)*(state.din))
   for(let i=0;i<getData.length;i=i+1)
   {
    price=price+(getData[i].price)*(getData[i].qnty)
   }
   let x=price*(state.din)
    setmoney(x)
  }
  useEffect(() => {
   total()
  //  window.localStorage.setItem("data", JSON.stringify(getData))
  },[state.stime,state.etime,state.location,getData,state.din])
  const hat = (a, b) => {
    const x = []
    for (let i = 0; i < a.length; i++) {
      if (a[i].qnty == 9) {
        x.push(a[i].id)
      }
    }
    const z = x.includes(b)
    return z
  }

  return (
    <div className='iop'>
      {getData.map((c) => (
        <div className='zxcert'>
             <img src={c.image} alt=" "/>
            <h1><span>Brand:</span>{c.brand}</h1>
            <h2><span>Price:</span>{c.price}/day</h2>
        { c.engine?<h2><span>Engine:</span>{c.engine}cc</h2>:null}
       
          <button onClick={() => {
            if (c.qnty < c.maxlimit) {
              more(c)
            }
          }}>+</button>
          {hat(getData, c.id)==true ? <span className='blink'>
             Over Limit</span> : null}
          <span>{c.qnty}</span>
          <button onClick={() => {
            setana(false)
            del(c)
          }}>-</button>


          <button onClick={() => remv(c)}>Delete</button>

        </div>
      ))
      }
      {getData.length > 0 ?
        <h1> Total Price:{money}</h1> : null}
      {getData.length > 0 ?
        
          <button onClick={()=>navigate("/c")} >Book Now</button>:null}

      <h2>{getData.length}</h2>
    </div>
  )
}
export default Slast
