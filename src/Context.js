import React, { createContext, useContext, useReducer } from 'react'
import DATA3 from './Data3'
import {Reducer}  from './Reducer'
const Filter=createContext()
const intialstate={
    sort:"",
    stime:"",
    etime:"",
    address:"",
    brand:[],
    engine:[],
    on:[],
      din:"",
      hour:"",
      seat:[],
      userd:DATA3
    
}
const Context = ({children}) => {

    const [state,dispatch]=useReducer(Reducer,intialstate)
    const name="dheeraj"
  return (
    <>
    <Filter.Provider value={{state,dispatch,name}}>
{children}
    </Filter.Provider>
    </>
  )
}
const Usefilter=()=>useContext(Filter);

export { Usefilter};
export default Context;