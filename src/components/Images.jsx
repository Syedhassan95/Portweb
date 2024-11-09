import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import node from '../assets/nodejs2.png'
import mongo from '../assets/mongodb.png'
import express from '../assets/express.png'
import tailwind from '../assets/tailwind.png'

const Images = () => {
  return (
    <div className="skills__icons-container" data-aos="fade-up" data-aos-duration="1000">
      <div className="skills__icon-wrapper">
        <img className='skills__icon-html' src={html} alt='HTML' />
        <h1 className='skills__icon-title' data-aos="fade-up" data-aos-duration="1000">HTML</h1>
      </div>
      
      <div className="skills__icon-wrapper">
        <img className='skills__icon-css' src={css} alt='CSS' />
        <h1 className='skills__icon-title' data-aos="fade-up" data-aos-duration="1000">CSS</h1>
      </div>
      
      <div className="skills__icon-wrapper">
        <img className='skills__icon-js' src={js} alt='JavaScript' />
        <h1 className='skills__icon-title' data-aos="fade-up" data-aos-duration="1000">JavaScript</h1>
      </div>
      
      <div className="skills__icon-wrapper">
        <img className='skills__icon-react' src={react} alt='React' />
        <h1 className='skills__icon-title' data-aos="fade-up" data-aos-duration="1000">React</h1>
      </div>

      <div className="skills__icon-wrapper">
        <img className='skills__icon-node' src={node} alt='Node.js' />
        <h1 className='skills__icon-title' data-aos="fade-up" data-aos-duration="1000">Node.js</h1>
      </div>

      <div className="skills__icon-wrapper">
        <img className='skills__icon-mongo' src={mongo} alt='MongoDB' />
        <h1 className='skills__icon-title' data-aos="fade-up" data-aos-duration="1000">MongoDB</h1>
      </div>
      
      <div className="skills__icon-wrapper">
        <img className='skills__icon-express' src={express} alt='Express' />
        <h1 className='skills__icon-title' data-aos="fade-up" data-aos-duration="1000">Express</h1>
      </div>
      
      <div className="skills__icon-wrapper">
        <img className='skills__icon-tailwind' src={tailwind} alt='Tailwind' />
        <h1 className='skills__icon-title' data-aos="fade-up" data-aos-duration="1000">Tailwind</h1>
      </div>
    </div>
  )
}

export default Images