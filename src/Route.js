import React from 'react'
import {Route,Routes, BrowserRouter,Switch} from "react-router-dom"
import Slast from './Slast'
import App from "./App"
import Book from './Book'
import Test from './Test'
import Test1 from './Test1'
import Test2 from './Test2'
import Test3 from './Test3'
import Test4 from './Test4'
import Test5 from './Test5'
import Bikerent from './Bikerent'
import Test6 from './Test6'
import Test7 from './Test7'
import Test8 from './Test8'
import Test9 from './Test9'
const Router = () => {
  return (
    <>
    

<BrowserRouter>

<Routes>

  <Route path="/" element={<Bikerent/>}/>
  <Route path="/b" element={<App/>}/>
  <Route  path="/c"  element={<Book/>}/>
  <Route path="/x" element={<Test6/>}/>
  <Route path="/nm" element={<Test8/>}/>
  <Route path="/ed9/:id" element={<Test9/>}/>




</Routes>
</BrowserRouter>
    </>
  )
}

export default Router