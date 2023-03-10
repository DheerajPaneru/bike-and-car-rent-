import React,{useEffect, useState} from 'react'

const Test3 = () => {
    const  a=[1,2,3,4,5,6]
    const z=["cricket","football","hockey"];
    const d=["weekday","weekend"]

    const x=Math.max(...a)
    const [data,setdata]=useState([])
    const [data1,setdata1]=useState([])
    const [count,setcount]=useState(0)

const send=(e)=>{
    if(e.target.name=='sports'){
    setdata([e.target.value])

}
else
{
    setdata1([e.target.value])
}
}
console.log(...data,...data1)
useEffect(()=>{
    setcount(count+1)
},[])
  return (
    <>
    {count}
    {z.map((c)=>(
        <div>
            <input type="radio" value={c}  onChange={(e)=>send(e)}
            name="sports"/>{c}
        </div>
    ))}
    {d.map((c)=>(
        <div>
            <input type="radio" value={c} name="day" onChange={(e)=>send(e)}/>{c}
        </div>
    ))}
    
    
    </>
  )
}

export default Test3