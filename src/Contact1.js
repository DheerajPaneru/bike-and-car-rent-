import React, { useState, useEffect } from 'react'
import { Usefilter } from './Context'
const Contact1 = (props) => {
    const {dispatch}=Usefilter()
  const {state}=Usefilter()
    console.log(props)
    const [user, setuser] = useState({ ...props.data })

    const sd = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        setuser((prev) => ({ ...prev, [name]: value }))
    }
useEffect(() => {
    dispatch({
        type:"stime",
        value:user.stime
      })
}, [user.stime])

useEffect(() => {
      dispatch({
        type:"etime",
        value:user.etime
      })
}, [user.etime])

useEffect(() => {
    dispatch({
        type:"din",
        value:user.din
      })
}, [user.din,user.stime,user.etime])

useEffect(() => {
      dispatch({
        type:"hour",
        value:user.hour
      })
}, [user.hour])


const timec = () => {
    let x = new Date(user.stime).getHours() - new Date(user.etime).getHours()
    if (x > 0) {
        x = 24 - new Date(user.stime).getHours() + new Date(user.etime).getHours()
        return x
    }
    else
        return Math.abs(x)
}
const dincal = () => {
    let d = Math.abs(new Date(user.etime).getTime() - new Date(user.stime).getTime())
    return d
}

const update = () => {
    setuser({ ...user, ["din"]: Math.floor(dincal() / (3600 * 1000 * 24)), ["hour"]: timec() })
}

useEffect(() => {
    update()
},[user.stime,user.etime])

return (
    <>
        <div className='formcab1'>

            <input type="datetime-local" className="dfgh" name="stime" value={user.stime} onChange={(e) => sd(e)} required />
            <span className='samyahai'>Start Date</span>
            <input classname="dfgh" type="datetime-local" name="etime" value={user.etime} onChange={(e) => sd(e)} required />
            <span className='samyahai'>End Date</span>
            <select name="address" value={user.address} onChange={(e) => sd(e)}>

                <option>Mumbai</option>
                <option>Kolkata</option>
                <option>Cehnnai</option>
                <option>Uttrakhand</option>
                <option>Delhi</option>
                <option>Banglore</option>
            </select>
            {user.stime && user.etime ? <span className='samyahai'>City Total days {user.din} hour {user.hour}</span> : null}
        </div>
    </>
)
}

export default React.memo(Contact1)