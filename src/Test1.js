import React, { useEffect } from 'react'
import { useState } from 'react'
import { Usefilter } from './Context'

const Test1 = () => {
    const {state}=Usefilter()

    const [user,setuser]=useState({
      stime:"",
      sdate:"",
      etime:"",
      edate:""
    })
    useEffect(()=>{
setuser(state)
    },[])
    const sd=(e)=>{
      setuser({...user,[e.target.name]:e.target.value})

    }
  return (
    <> <input type="time" name="stime" value={user.stime} onChange={(e)=>sd(e)}/>
    <span className=''>start time</span>
    <input type="date" name="sdate" value={user.sdate} onChange={(e)=>sd(e)}/>
   <span>date</span>
   <input type="time" name="etime" value={user.etime} onChange={(e)=>sd(e)} />
    <span>end time</span>
    <input type="date"  name="edate"value={user.edate} onChange={(e)=>sd(e)}/>
   <span> end date</span>
   
    </>
  )
}

export default React.memo(Test1)