
import axios from 'axios'
import React,{useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Test9=() => {
  const {id}=useParams()
  const [data,setdata]=useState({
    name:"",
    email:"",
    username:"",
    photo:""
  })
  const navigate=useNavigate()
  const send=(e)=>{
    if(e.target.name=="photo"){
      console.log(e.target.files);
      console.log(e.target.files[0]);
    setdata({...data,[e.target.name]:e.target.files[0]})
    }
    else{
      setdata({...data,[e.target.name]:e.target.value})
   
    }
    
  }
  const submit= async(e)=>{
    await axios.put(`http://localhost:3008/user/${id}`,data) ;
navigate("/")}

  const dataload=async()=>{
    const result=await axios.get(`http://localhost:3008/user/${id}`)
setdata(result.data);
  }
  useEffect(()=>{
dataload()
  },[])

  
  


  return (
    <div>
      <h1>Edit</h1>
<input name="name" value={data.name}  placeholder='name' onChange={(e)=>send(e)}/>
<input  name="email" value={data.email} placeholder='email' onChange={(e)=>send(e)}/>
<button onClick={(e)=>submit(e)}>Update</button>


    </div>
  )
}

export default Test9