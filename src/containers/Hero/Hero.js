import React from "react";

import { CABINET_ROUTES } from "../../config/constants";

import './Hero.scss';


const Hero = (props) => {
  return (
    <section className="hero" id='#hero'>
      <div className="container">
        <div className="hero__container">
          <h1 className="title hero__title">
            ЕКО-відпочинок у

            <span> Долині Озер</span>
          </h1>

          <h3 className="hero__subtitle">
            Фантастична природа, чисте повітря і атмосфера спокою та натхнення! Завітайте до нас та відчуйте це особисто...
          </h3>

          <a
            href='/'
            target="_blank"
            className="link-btn link-btn--light"
            rel="noopener noreferrer"
          >
            <span>Написати нам</span>
          </a>
        </div>

      </div>

      <div className="hero__img-wrap">
        <div className="container">

        </div>
      </div>
    </section>
  )
};

export default Hero;