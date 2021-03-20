import React from "react";

import './AboutUs.scss';


const AboutUs = () => {

  return (
    <section className="about" id='aboutUs'>
      <div className="container">
        <div className="about__grid">
          <div className="about__left">
            <h2 className="title about__title">О нас</h2>

            <h3 className="title title--subtitle about__subtitle">
              Cashback Global — это платформа, которая предоставляет возможность получать кэшбэк от покупок с разных
              продуктов и услуг по всему миру.
            </h3>

            <h4 className="info-text info-text--grey">
              Предоставляем великолепную возможность бизнесу увеличить количество клиентов с помощью кэшбэка
            </h4>
          </div>

          <div className="about__right">
            <img
              src="/media/images/sections/about-us/image.png"
              alt="about-us"
              className='about__image'/>

            <a href='https://youtu.be/djAUN5xdtKw'
               target='_blank'
               className="about__video"/>
          </div>
        </div>
      </div>
    </section>
  )
};

export default AboutUs;