import React, { useState } from 'react'
import Close from '../assets/close.svg'

const PortfolioItem = ({img, title, details,}) => {
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal);
  }
  return (
     <div className="portfolio__item">
      <img src={img} alt='' className="portfolio__img" />

      <div className="portfolio__hover" onClick={toggleModal}>
        <h3 className="portfolio__title">{title}</h3>
      </div>

      {modal && (
      <div className="portfolio__modal" data-aos='fade-down' data-aos-delay={50}>
        <div className="portfolio__modal-content" data-aos='fade-up' data-aos-delay={100}>
          <img src={Close} alt='' className="modal__close" onClick={toggleModal} />

          <h3 className="modal__title" data-aos='fade-up' data-aos-delay={100}>{title}</h3>

          <ul className="modal__list grid" data-aos='fade-up' data-aos-delay={100}>
            {details.map(({icon, title, desc}, index) => {
              return(
                <li className="modal__item" key={index} data-aos='fade-up' data-aos-delay={index * 100}>
                  <span className="item__icon" data-aos='fade-up' data-aos-delay={index * 100}>{icon}</span>

                  <div>
                    <span className="item__title" data-aos='fade-up' data-aos-delay={index * 100}>{title}</span>
                    <span className="item__details" data-aos='fade-up' data-aos-delay={index * 100}>{desc}</span>
                  </div>
                </li>
              )
            })}
          </ul>

          <img src={img} alt="" className="modal__img" data-aos='fade-up' data-aos-delay={100} />
        </div>
      </div>
      )}
     </div>
  );
};


export default PortfolioItem