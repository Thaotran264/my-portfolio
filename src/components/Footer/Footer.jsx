import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="/" className='footer__logo'> Rm Tran</a>

      <ul className="permalinks">
        <li><a href="#">home</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#experience">experience</a></li>
        <li><a href="#services">services</a></li>
        <li><a href="#portfolio">portfolio</a></li>
        <li><a href="#testimonials">testimonials</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/">facebook</a>
        <a href="https://www.instagram.com/">instagram</a>
        <a href="https://twitter.com/">twitter</a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Code by Rm</small>
      </div>
    </footer>
  )
}

export default Footer