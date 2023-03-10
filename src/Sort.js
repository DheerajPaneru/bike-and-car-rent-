import React from 'react'
import  {Usefilter}  from './Context'
const Sort = () => {
  const {dispatch}=Usefilter();
  const {state} =Usefilter();
  console.log(Usefilter,state)
    const send=(value)=>{
      dispatch({
  type:value,
  payload:value
});
    }
  return (
    <>
    <div className='xertgh'>
      
    <input type="radio" name="sort" value="lth" onChange={(e)=>send(e.target.value)}/> <span >Low to High</span>
    
     <input type="radio" name="sort" value="htl" onChange={(e)=>send(e.target.value)}/> <span>High to Low</span>
     </div>
    </>
  )
}

export default Sort