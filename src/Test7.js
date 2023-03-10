import React,{useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const Test7 = () => {
  //npm run json-server
  const [data,setdata]=useState([])

const navigate=useNavigate()
  const fetch= async()=>{
 const userd= await  axios.get(`http://localhost:3008/user`)
 setdata(userd.data)
  }
  useEffect(()=>{
    fetch()
  },[])
  console.log(data)
  const edit=(a)=>{
navigate("")
  }
  return (
    <div>
      <button onClick={()=>navigate("/nm")}>Add</button>
      {
      data.map((c)=>{
        return(
          <>

          <h1>{c.name}</h1>
          <h1>{c.username}</h1>
          <h1>{c.email}</h1>
          <img src={c.photo}alt=""/>
          <Link  to={`/ed9/${c.id}`}>Edit</Link>

          <button>Delte</button>
          <button>View</button>
          </>
        )
      })}
      </div>
  )
}

export default Test7