import React from 'react'
import { portfolio } from '../../data'
import PortfolioItem from '../../components/PortfolioItem'
import './portfolio.css'

const Portfolio = () => {
  return (
   <section className="portfolio section">
    <h2 className="section__title" data-aos="fade-down" data-aos-delay={100}>
      My <span>Portfolio</span>
    </h2>

    <div className="portfolio__container container grid" data-aos='fade-up' data-aos-delay={100}>
      {portfolio.map((item) => {
        return <PortfolioItem key={item.id} data-aos="fade-up" data-aos-delay={item.id * 100} {...item} />
      })}
    </div>
   </section>
  )
}


export default Portfolio