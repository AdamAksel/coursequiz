import React from 'react'
import { NavMain, NavGreeting, NavImg1 } from './Nav.elements'
import Logo from '../Images/Logo.png'

const Nav = () => {
  return (
    <NavMain>
      <NavImg1 src={Logo} />
      <NavGreeting>QuizSite for PUHJUH22!</NavGreeting>
    </NavMain>
  )
}

export default Nav
