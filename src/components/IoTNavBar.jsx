import React from 'react'
import { Link } from 'react-router-dom'
import IoTHeader from './IoTHeader'
import Logo from './../assets/logo.png'
import react from './../assets/react.svg'

export default function IoTNavBar() {
  return (
    <div style={{textAlign:"center"}}>
      <Link to="/" style={{margin:"5px",textDecoration:"none"}}>Login</Link>
      <Link to="/home" style={{margin:"5px",textDecoration:"none"}}>Home</Link>      
      <Link to="/about" style={{margin:"5px",textDecoration:"none"}}>เกี่ยวกับ</Link>      
      <Link to="/contact" style={{margin:"5px",textDecoration:"none"}}>ติดต่อเรา</Link>     
      <Link to="/showIoT" style={{margin:"5px",textDecoration:"none"}}>ข้อมูล IoT</Link>
      <br />
      <img width={100} src={Logo} alt="logo" />
      <img width={100} src={react} alt="logo" />
      <img width={100} src="./vite.svg" alt="logo" />
    <br />
      <IoTHeader/>
        
    </div>
  )
}
