import React from 'react'
import CTA from './CTA'
import './header.css'
import Me from '../../assets/girl2.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Rm Tran</h1>
        <h5 className='text-light'>Front-End Developer</h5>
        <CTA />

        <HeaderSocials />

        <div className="me">
          <img src={Me} alt="girl" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll down</a>
      </div>
    </header>
  )
}

export default Header