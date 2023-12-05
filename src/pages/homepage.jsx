import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AlertDialog from '../components/alertdialog/alert'
import Header from '../components/header/header'
import Main from '../components/main/main'
import Sheader from '../components/sub-header/sheader'

const Homepage = () => {
    const {state}=useParams()
    
  
    
  return (
    <div style={{ backgroundColor: "#f6f6f9",
        minHeight: "100vh",position:"relative",overflowX:"hidden"}}>
        <AlertDialog right={"70px"} color="green" top={"85vh"} message={"new message from server"} executeFunction={()=>{}} isVisible={true}/>
        <Header match={state}/>
        <Sheader match={state}/>
        <Main match={state}/>
    </div>
  )
}

export default Homepage