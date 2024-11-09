import React from 'react'
import parse from 'html-react-parser'

const ResumeItem = ({icon, year, title, desc, index}) => {
  return (
    <div className="resume__item" data-aos="fade-up" data-aos-delay={index * 100}>
        <div className="resume__icon" data-aos="fade-up" data-aos-delay={index * 100}>{icon}</div>

        <span className="resume__date" data-aos="fade-up" data-aos-delay={index * 100}>{year}</span>
        <h3 className="resume__subtitle" data-aos="fade-up" data-aos-delay={index * 100}>{parse(title)}</h3>
        <p className="resume__description" data-aos="fade-up" data-aos-delay={index * 100}>{parse(desc)}</p>
    </div>
  )
}

export default ResumeItem