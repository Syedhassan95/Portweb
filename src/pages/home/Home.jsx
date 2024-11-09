import React from 'react'
import profile from '../../assets/home.jpg'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import './home.css'
import { useTypewriter, Cursor } from 'react-simple-typewriter'


const Home = () => {
  const [text] = useTypewriter({
    words: ['MERN Stack Dev',],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 100,
  })
  return (
    <section className="home section grid">
      <img src={profile} alt="" className="home__img" data-aos="fade-right" />

      <div className="home__content">
        <div className="home__data" data-aos="fade-left" data-aos-delay="100">
          <h1 className="home__title">
             <span style={{fontWeight: 'bold', color: 'var(--first-color)'}}>I am Syed Hassan-</span> {text}
            </h1>

          <p className="home__description">
            I am a MERN Stack Developer with a passion for creating web applications that are both functional and user-friendly.
          </p>

          <Link to="/about" className="button">Explore My Portfolio 
          <span className='button__icon'><FaArrowRight /></span></Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  );
};

export default Home