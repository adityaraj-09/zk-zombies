import React from 'react'
import Playground from '../playground/playground'
import "./main.css"
const Main = ({match}) => {
  return (
    <div className="con-main">
        <div className="box-main">
          {
            match==="playground"?<Playground/>:null
          }
            
        </div>
    </div>
  )
}

export default Main