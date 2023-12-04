import React from 'react'
import {Link} from "react-router-dom"
import "./header.css"
const Header = () => {
  return (
    <div className="con-header">
        <div className="title-box"><h3>zkZombies</h3></div>
        <div className="link-box"><a href="">Documentation</a> <a href="">Developer Tools</a> <a href="">Home Page</a></div>
    </div>
  )
}

export default Header