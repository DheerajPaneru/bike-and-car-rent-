import React, { useEffect, useState } from 'react'
import DATA3 from './Data3'
import { Usefilter } from './Context'
import { useNavigate } from 'react-router-dom'
const Test6 = () => {
    const { dispatch} = Usefilter()
    const [detail, setdetail] = useState(DATA3)
    const [obj, setobj] = useState({name:"",rollno:""})
    const navigate = useNavigate()
    const send = (e) =>{
        setobj({...obj,[e.target.name]:e.target.value})
      }
   // const send1=() =>{
     //   navigate("/") 
  //  }
  const Add=()=>{
    setdetail([...detail,obj])
    console.log(detail, "ui0");
  }

  useEffect(()=>{
    dispatch({
      type:"detail",
      value:detail
  })
  },[detail])


    console.log(detail, "ui");

    return (
        <>

            <input  name="name" onChange={(e) => send(e)} />
            <input  name="rollno" onChange={(e) => send(e)} />
            <button onClick={Add}>Add</button>
            <button onClick={()=>navigate("/")}>Add</button>
            
            {detail.map((c)=>{
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

export default Test6