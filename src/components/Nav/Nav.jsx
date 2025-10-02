import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'
import "../Nav/Nav.css"

const Nav = () => {
  const [className, setClassName] = useState()
  const handleNav = ()=>{

  }
  return (
    <div className="Nav">
        <div className="Nav-Logo"><img className="Nav-Img" src={logo} alt="Logo" /></div>
        <div className="Nav-List">
          <NavLink to="/">Home</NavLink>
        </div>
    </div>
  )
}

export default Nav