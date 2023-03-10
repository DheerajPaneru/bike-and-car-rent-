import logo from './logo.svg';
import oops from "./oops.jpg"

import { useCallback, useEffect, useLayoutEffect, useReducer, useState } from 'react';
import Sort from "./Sort"
import Brand from "./Brand"
import Engine from "./Engine"
import DATA from './Data';
import axios from "axios";
import { Usefilter } from './Context';
import './App.css';
import Bikecar from './Bikecar';
import BikebrandCar from './Bikebrand';
import Clear from './Clear';
import { useSelector } from "react-redux"
import Slast from './Slast';
import { ADD } from './Action';
import { DEL } from "./Action"
import { useDispatch } from "react-redux"
import Contact1 from './Contact1';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import Seat from './Seat';


function App() {
  const { state } = Usefilter();
  const [ana, setana] = useState();
  const [product, setproduct] = useState([]);
  const [data, setdata] = useState([]);
  const [time0, settime0] = useState({
    stime: ""
  })
  const [time1, settime1] = useState({
    etime: ""
  })
  const [time2, settime2] = useState({
    address: ""
  })
  const [data1, setdata1] = useState({})



  //const [show, setshow] = useState(10);
  // const [page, setpage] = useState({
  // start: 0,
  // end: show
  //});
  const getData = useSelector((state) => state.cartreducer)
  console.log(getData, "ioppp")
  const dispatch = useDispatch()

  const send = (e, a) => {
    if (e.target.checked) {
      dispatch(ADD(a))
    }
    else {
      dispatch(DEL(a))

    }

  }

  // const fetch = async () => {
  //   const datas = await axios.get(`https://dummyjson.com/products?`);
  //   console.log(datas.data.products)
  //   setdata(datas.data.products)

  // }
  //console.log("wibdui")
  //useEffect(() => {
  //  fetch();
  //}, []);

  const sorted = (product, sort) => {
    console.log("yhui")
    const sorted1 = product.sort((a, b) => sort == "lth" ? a.price - b.price : sort === "htl" ? b.price - a.price : product)
    return sorted1;
  };


  const branded = (products, brand) => {
    const sorted1 = products.filter((c) => brand.length > 0 ? brand.includes(c.brand) : products

    )
    return sorted1
  }
  const carndbik1 = (products, on) => {
    const sorted1 = products.filter((c) => on.length > 0 ? on.includes(c.catgry) : products
    )
    return sorted1;

  }

  const engine = (products, engine) => {
    console.log("rt567bhkk")
    const sorted9 = products.filter((c) => engine.length > 0 ? engine.includes(c.engine) : products)
    return sorted9
  }
  const seater = (products, seat) => {
    const sortedseat = products.filter((c) => seat.length > 0 ? seat.includes(c.seater) : products)
    return sortedseat
  }

  const sorted2 = sorted(DATA, state.sort)
  const branded2 = branded(sorted2, state.brand)
  const carndbik2 = carndbik1(branded2, state.on)
  const seater1 = seater(carndbik2, state.seat)
  const engine2 = engine(seater1, state.engine)

  console.log(state, "uo")
  const b = state.on.sort();
  const clear = () => window.location.reload(true)
  //const [user1,setuser1]=useState({})
  //useEffect(()=>{
  //setuser(state)
  //},[])

  //   useEffect(()=>{
  //settime0({...user1})

  // settime1({...user1})
  // settime2({...user1})
  //   },[])

  //   useEffect(()=>
  //  {
  //   setuser({...user1})
  //  },[])




  //   const sd1=(e)=>
  //   {
  //setuser1({...user1,[e.target.name]:e.target.value})
  //    }
  //    const sd2=(e)=>{
  //     setuser1({...user1,[e.target.name]:e.target.value})

  //   }
  //     const sd3=(e)=>{
  //    settime2({[e.target.name]:e.target.value})
  //    }
  //  <input type="checkbox" value="fgyu" checked={band}  />
  const hat = (a, b) => {
    const x = []
    for (let i = 0; i < a.length; i++) {
      x.push(a[i].id)
    }
    const z = x.includes(b)
    return z
  }
  return (
    <div className="App">
      <Contact1 data={state} />
      <Slast />
      <button onClick={() => clear()}>Clear Filter</button>
      <p>Price</p>
      <Sort />
      <br></br>
      <Bikecar />
      <p>Brand</p>
      {b.length < 1 ? <div><BikebrandCar /><Brand /></div> : b.length < 2 ? b[0] == "car" ? <BikebrandCar /> : <Brand /> : null}
      {b.length > 1 ? <div>
        <BikebrandCar />
        <Brand />
      </div> : null}

      <p>Engine</p>
      <Engine />
      <br></br>
      <p>Seat</p>
      <Seat />
      <div className='iop'>
        {engine2 && engine2.length > 0 ?engine2.map((c) => (
          <div className='zxcert'>
            <img src={c.image} alt=" " />
            <h1><span>Brand:</span>{c.brand}</h1>
            <h2><span>Price:</span>{c.price}/day</h2>
            {c.engine ? <h2><span>Engine:</span>{c.engine}cc</h2> : null}
            <h2><input checked={hat(getData.cart, c.id) == false ? false : hat(getData.cart, c.id) == true ? true : null} type="checkbox" onChange={(e) => send(e, c)} /> <span>Book Now</span> </h2>
            {// <button onClick={()=>send(c)}>Book</button>
            }</div>
        ))
        :<img src={oops} alt=""/>}
      </div>
    </div>
  );
}

export default App;
