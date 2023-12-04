import React, { useState } from 'react'
import "./sheader.css"
const Sheader = ({match}) => {

 
  return (
    <div className="con-sheader">
      <div className="box-sheader">
        <a href="/instrutions" >INSTRUCTION SET</a>
        <a href="/playground" >PLAYGROUND</a>
        <a href="/help">HELP</a>
      </div>
      <div className="lines"><div className="i" style={{
        height: "2px",
        width: "33.33vw",
        backgroundColor: match==="instrutions"?"blue":"white"
      }}></div><div className="p" style={{ height: "2px",
      width: "33.33vw",
      backgroundColor: match==="playground"?"blue":"white"}}></div><div className="h" style={{ height: "2px",
      width: "33.33vw",
      backgroundColor: match==="help"?"blue":"white"}}></div></div>
    </div>
  )
}

export default Sheader