import React from "react";

import './AboutUs.scss';
import {CABINET_ROUTES} from "../../config/constants";


const AboutUs = () => {

  return (
    <section className="about" id='aboutUs'>
      <div className="container">
        <div className="about__grid">
          <div className="about__left">
            <h2 className="title about__title">Про нас</h2>

            <h3 className="subtitle about__subtitle">
              ЕКО-відпочинок у Долині Озер
            </h3>

            <h4 className="info-text info-text--grey">
              Фантастична природа, чисте повітря і атмосфера спокою та натхнення! Завітайте до нас та відчуйте це особисто... </h4>
          </div>

          <div className="about__right">
            <img
              src="/media/images/sections/about-us/image.jpg"
              alt="about-us"
              className='about__image'/>

            <a href={CABINET_ROUTES.youtubeVideo}
               target='_blank'
               rel="noopener noreferrer"
               className="about__video"/>
          </div>
        </div>
      </div>
    </section>
  )
};

export default AboutUs;