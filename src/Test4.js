

import axios from "axios"
import { useEffect, useState } from "react";
export default function Test4() {
  //https://jsonplaceholder.typicode.com/users
  const [data, setdata] = useState([])

  const api = async () => {
    const user = await axios.get("https://jsonplaceholder.typicode.com/users")
    setdata(user.data)
  }
  
  console.log(data)

  const show = (e, a) => {
    const data1 = data.map((ele, id) => {
      if(a == id)
      {
      ele["name"] = e.target.value
      return ele
      }
      else {
        return ele
      }

    })
setdata(data1)

  }
  useEffect(() => {
    api()
  }, [])

  return (

    <div className="App">
      {
        data.map((c, id) => (
          <div key={c.id}>
            <input type="text" value={c.name} onChange={(e) => show(e, id)} />
          </div>
        ))
      }
      <button onClick={()=>window.location.reload(true)}>clear</button>

    </div>
  );
}