import React from 'react'
import { useState } from 'react';

const Test2 = () => {
    const a=new Array(9)
    const data=[{name:"indian",value:"in",cities:['Delhi',"Mumbai"]},{name:"Pak",value:"Pk",cities:['Lahore',"Karachi"]},{name:"Bangladesh",value:"Bg",cities:['Dhaka',"Chittagong"]}];
    const [city,setcity]=useState(data)
    const [Show,setShow]=useState(false)
    const [Show2,setShow2]=useState([])


const delt=(a)=>{
    const x=city.filter((c)=>c.name!=a)
    setcity(x)

}
const learn=()=>{
    
        a.fill(9)

    return a;
}
console.log(learn())
const show=(e,a)=>{
    if(e.target.checked)
    {
        setShow(true)
        setShow2([...Show2,a])
    }
    else{
        setShow(false)
    setShow2(Show2.filter((c)=>c!=a))
        
    }
}
console.log(Show2)
  return (
    <>

        {
    data.map((c,id)=>(
        <div>
            
           
           <div>{c}
           <input type="checkbox" onChange={(e)=>show(e,c.name)}/>
           {Show2.includes(c)?<button onClick={()=>delt(c.name)}>x</button>:null}
                 </div>
                </div>
    ))
}
    


    </>
  )
}

export default Test2