import axios from 'axios'
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Test8=() => {
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
    setdata({...data,[e.target.name]:URL.createObjectURL(e.target.files[0])})
    }
    else{
      setdata({...data,[e.target.name]:e.target.value})
   
    }
    
  }
  

  const submit= async()=>{
await axios.post("http://localhost:3008/user",data) ;
navigate("/")
  }
  return (
    <div>
<input name="name"  placeholder='name' onChange={(e)=>send(e)}/>
<input  name="email" placeholder='email' onChange={(e)=>send(e)}/>
<input type="file" name="photo" onChange={(e)=>send(e)} accept="image/png ,image/jpeg,image/webp"/>
<button onClick={submit}>Submit</button>


    </div>
  )
}

export default Test8