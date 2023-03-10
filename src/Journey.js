
import React from 'react'
import "./App.css"
import emoji from "./emoji.png"
import emoji1 from "./emoji1.png"
import emoji2 from "./emoji2.png"
import emoji3 from "./emoji3.png"


const Journey = () => {
  return (
    <div className='journey4'>
<h1 className='journtext'>
Our journey so far
</h1>
<div className='jorbox'>
  <a className='excvhy'>
    
<a className='vcea'>
  <img src={emoji} alt=""/>
  <h1 className='textcvgh'>1 Mn +</h1>
  <h1 className='texsw'>Happy Revvers</h1>
</a>
<a className='vcea'>
<img src={emoji1} alt=""/>
  <h1 className='textcvgh'>22+cities</h1>
  <h1 className='texsw'>Across India</h1>
</a>
<a className='vcea'>
<img src={emoji2} alt=""/>
  <h1 className='textcvgh'>4.8/5</h1>
  <h1 className='texsw'>20k+reviwers</h1>
</a>
<a className='vcea'>
<img src={emoji3} alt=""/>
  <h1 className='textcvgh'>50 Mn +</h1>
  <h1 className='texsw'>Kms travelled</h1>
</a>

</a>
</div>
    </div>
  )
}

export default Journey



