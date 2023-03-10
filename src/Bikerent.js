
import React, { useState, useEffect } from 'react'
import "./App.css"
import carandbikelogo from "./carandbikelogo.jpg"
import bikeandcar from "./bikeandcar.jpg"
import bar from "./bar.jpg"
import Box from './Box'
import Journey from './Journey'
import Invest from './invest'
import App from "./App"
import Footer from "./Footer"
import { Usefilter } from './Context'
import { useNavigate } from 'react-router-dom'
import { getDefaultNormalizer } from '@testing-library/react'

const Bikerent = () => {
  const {dispatch}=Usefilter()
  const {state}=Usefilter()

  const [sec, setsec] = useState(0);
  const [min, setmin] = useState(0);
  const [dhik, setdhik] = useState(true);
  const [time0,settime0]=useState('')
  const [time1,settime1]=useState('')
  const[location, setlocation]=useState('')
const [show,setshow]=useState(false)
const [show1,setshow1]=useState(false)
const [show2,setshow2]=useState({})

 

   


  var time;
  useEffect(() => {
    time = setInterval(() => {
      setsec(sec + 1)
      if (sec % 5 == 0) {
        setdhik(true)
      }
      else {
        setdhik(false)
      }
    }, 1000)
    return () => clearInterval(time)

  })

const handle=(e)=>{

e.preventDefault()
}
const navigate=useNavigate()




const takedetail=(e)=>{
  const ele=e.target.value;
  dispatch({
    type:e.target.name,
    value:ele
  })
if(new Date(ele).getTime()<new Date().getTime()){
  setshow(true)
}
else{
  setshow(false)
}
settime0(ele)
}
const takedetail1=(e)=>{

  const ele=e.target.value;
  dispatch({
    type:e.target.name,
    value:ele
  })

if(new Date(ele).getTime()<new Date(time0).getTime()){
  setshow1(true)
}
else{
  setshow1(false)
}
settime1(ele)


}

const timec=()=>{
  let x= new Date(time0).getHours()-new Date(time1).getHours()
  if(x>0){
  x=24-new Date(time0).getHours()+new Date(time1).getHours()
  return x
  }
  else
  return Math.abs(x)

}
const tdif=()=>{
  let d=Math.abs(new Date(time1).getTime()- new Date(time0).getTime())
  return d
 }

const area1=()=>{
  dispatch({
    type:"address",
    value:location
  })
  if(location&&show==false&&show1==false){
  const d={days:Math.floor(tdif()/(3600*1000*24)),hour:timec()}
setshow2(d)
  }
}
useEffect(()=>{
area1()

},[time1,time0,location])


const send=()=>{
  if(show==false&&show1==false&&time0.length&&time1.length&&location)
  {
    navigate("/b")
  }
  dispatch({
    type:"din",
    value:show2.days
  })
  dispatch({
    type:"hour",
    value:show2.hour
  })

}


  return (
    <>
      <div className="toplogo2">
        <a className='vfr36'><img src={bar} alt="" />
        </a>

        <img src={carandbikelogo} alt="" />
        <button className='more34'>More</button>

      </div>
      <header>
        <div className={dhik ? "bikecar34" : "bikecar343"}>


          <form className='formcab' onSubmit={(e)=>handle(e)}>
            <a className='inputt3'>
              <a className='font56'>Start Date</a>
              <input type="datetime-local"  name="stime" onChange={(e)=>takedetail(e)} required/>
              {show?<span className='samyahai'>Date is not valid</span>:null}
            </a>
            <a className='inputt3'>
              <a className='font56'>End Date</a>
              <input type="datetime-local" name='etime' onChange={(e)=>takedetail1(e)} required/>
              {show1?<span  className='samyahai'>Date is not valid</span>:null}
            </a>
            
            <a className='inputt3'>
              <a className='font56'>City</a>
              <select
               name="address" onChange={(e)=>setlocation(e.target.value)}>
            
                <option>Mumbai</option>
                <option selected>location</option>
                <option>Cehnnai</option>
                <option>Uttrakhand</option>
                <option>Delhi</option>
                <option>Banglore</option>
              </select>
            </a>
            <a className='inputt3'>
              <button type='submit' onClick={()=>send()}>Proceed</button>
            {Object.keys(show2).length>0&&time0?<span className='samyahai1'>
            
            Total days {show2.days} hour {show2.hour}</span>:null}
            </a>
          </form>


        </div>




      </header>
      <Box />
      <Journey />
      <Invest />
      <Footer />




    </>
  )
}

export default Bikerent
