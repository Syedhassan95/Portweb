import React from 'react'

import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaDribbble,
} from 'react-icons/fa'

import { FiSend } from 'react-icons/fi'

import './contact.css'
const Contact = () => {
  return (
    <section className="contact section">
       <h2 className="section__title" data-aos="fade-down">
         Get In<span> Touch</span>
       </h2>

       <div className="contact__container container grid">
        <div className="contact__data" data-aos="fade-right">
          <h3 className="contact__title">Let's talk to me</h3>

          <p className="contact__description">
            Contact me if you have any questions or suggestions
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className='info__icon'/>

              <div>
                <span className="info__title">Email</span>
                <h4 className="info__desc">sh764998@gmail.com</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className='info__icon'/>

              <div>
                <span className="info__title">Call me</span>
                <h4 className="info__desc">9588634228</h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a href="https://facebook.com"className='contact__socials-link'>
              <FaFacebookF />
            </a>

            <a href="https://twitter.com"className='contact__socials-link'>
              <FaTwitter />
            </a>

            <a href="https://youtube.com"className='contact__socials-link'>
              <FaYoutube />
            </a>

            <a href="https://dribbble.com"className='contact__socials-link'>
              <FaDribbble />
            </a>
          </div>

        </div>

        <form className="contact form" data-aos="fade-left">

          <div className="form__input-group">
            <div className="form__input-div">
              <input type="text" placeholder='Name' className="form__control" />
            </div>

            <div className="form__input-div">
              <input type="email" placeholder='Email' className="form__control" />
            </div>

            <div className="form__input-div">
              <input type="text" placeholder='Subject' className="form__control" />
            </div>
          </div>

          <div className="form__input-div">
            <textarea placeholder='Your Message'  className="form__control textarea"></textarea>
          </div>

          <button className='button'>Send Message
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>

       </div>
       
       <h1 className='section__by' data-aos='fade-up' data-aos-delay={90}><span> BY THANK YOU</span><br />FOR WACTHING MY PORTFOLIO  </h1>
    </section>
  )
}

export default Contact