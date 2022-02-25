import React from 'react'
import './navbar.css'
import { AiOutlineHome, AiOutlineUser, AiOutlineBook } from 'react-icons/ai'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageDetail } from 'react-icons/bi'
import { useState } from 'react'
const Navbar = () => {
  const [active, setActive] = useState('#')

  const handleActive = () => {
    setActive(!active)
  }
  return (
    <nav>
      <a href="#"
        onClick={() => setActive('#')}
        className={active === '#' ? 'active' : ''}
      ><AiOutlineHome /></a>
      <a href="#about"
        onClick={() => setActive('about')}
        className={active === 'about' ? 'active' : ''}
      ><AiOutlineUser /></a>
      <a href="#experience"
        onClick={() => setActive('experience')}
        className={active === 'experience' ? 'active' : ''} ><AiOutlineBook /></a>
      <a href="#services"
        onClick={() => setActive('services')}
        className={active === 'services' ? 'active' : ''} ><RiServiceLine /></a>
      <a href="#contact"
        onClick={() => setActive('contact')}
        className={active === 'contact' ? 'active' : ''} ><BiMessageDetail /></a>
    </nav>
  )
}

export default Navbar