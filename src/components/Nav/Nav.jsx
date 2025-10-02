import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'
import "../Nav/Nav.css"

const Nav = () => {
  return (
    <div className="Nav">
        <div className="Nav-Logo"><img className="Nav-Img" src={logo} alt="Logo" /></div>
        <div className="Nav-List">
          <NavLink className="li" to="/">Home</NavLink>
          <NavLink className="li" to="/about">About us</NavLink>
          <NavLink className="li" to="/articles">Articles</NavLink>
        </div>
    </div>
  )
}
export default Nav