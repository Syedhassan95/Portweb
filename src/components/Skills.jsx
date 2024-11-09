import React from 'react'
import { skills } from '../data'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Images from './Images'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import '../components/themes.css'

const Skills = () => {
  const [repeat] = useTypewriter({
    words: ['EDUCATION', 'DEGREES', 'COLLEGE'],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 100,
  })

  return (
    <div className="section__content">
      <Images />
      <h1 className='heading__title' data-aos="fade-up" data-aos-duration="1000" >SCROLL DOWN TO SEE MY</h1>
      
      <div className="typewriter__text" data-aos="fade-up" data-aos-duration="1000">
        <h2 className='typewriter__text' style={{ color: 'var(--first-color)', fontSize: 'var(--h2-font-size)' }}>{repeat}<Cursor /></h2>
      </div>
    </div>
  )
}

export default Skills