import React from 'react'
import './contact.css'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { BsTelephoneFill } from 'react-icons/bs'
import { MdOutlineEmail } from 'react-icons/md'
const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <FaMapMarkerAlt className='contact__option-icon' />
            <h4>Address</h4>
            <h5>HoChiMinh city</h5>
            <a target='_blank' href="/">Send a message</a>
          </article>

          <article className='contact__option'>
            <BsTelephoneFill
              className='contact__option-icon' />
            <h4>Phone</h4>
            <h5>+00 151515</h5>
            <a target='_blank' href="/">Send a message</a>
          </article>

          <article className='contact__option'>
            <MdOutlineEmail
              className='contact__option-icon' />
            <h4>Email</h4>
            <h5>mail@mail.com</h5>
            <a target='_blank' href="/">Send a message</a>
          </article>
        </div>

        <form>
          <input type="text" id='name' placeholder='Your Full Name'
            required />
          <input type="email" id='email' placeholder='Your Email'
            required />
          <textarea name="message" id="message" cols="30" rows="10"
            placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Messsage</button>
        </form>
      </div>
    </section>
  )
}

export default Contact