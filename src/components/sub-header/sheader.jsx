import React, { useState } from 'react'
import "./sheader.css"
const Sheader = () => {

  const [type, settype] = useState(1)
  return (
    <div className="con-sheader">
      <div className="box-sheader">
        <a href="">INSTRUCTION SET</a>
        <a href="">PLAYGROUND</a>
        <a href="">HELP</a>
      </div>
      <div className="lines"><div className="i" style={{
        height: "2px",
        width: "33.33vw",
        backgroundColor: type===0?"blue":"white"
      }}></div><div className="p" style={{ height: "2px",
      width: "33.33vw",
      backgroundColor: type===1?"blue":"white"}}></div><div className="h" style={{ height: "2px",
      width: "33.33vw",
      backgroundColor: type===2?"blue":"white"}}></div></div>
    </div>
  )
}

export default Sheader