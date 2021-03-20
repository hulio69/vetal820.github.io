import React from "react";

import { CABINET_ROUTES } from "../../config/constants";

import './Hero.scss';


const Hero = (props) => {
  return (
    <section className="hero" id='#hero'>
      <div className="container">
        <h1 className="title hero__title">
          <>Умные покупки </>

          <span>c&nbsp;кэшбэком</span>
        </h1>

        <h3 className="hero__subtitle">Покупай товары и услуги по всему миру и мы вернем часть расходованых средств</h3>

        <a
          href={CABINET_ROUTES.signUp}
          className="link-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Регистрация</span>
        </a>
      </div>

      <div className="hero__img-wrap">
        <div className="container">
          <div className="hero__image">
            <picture data-media="desktop">
              <source srcSet="/media/images/sections/hero/hero@2x.png 2x, /media/images/sections/hero/hero@1x.png 1x" type="image/png" />
              <img src="/media/images/sections/hero/hero@1x.png" alt="" />
            </picture>

            <picture data-media="mobile">
              <source srcSet="/media/images/sections/hero/hero-mob@2x.png 2x, /media/images/sections/hero/hero-mob@1x.png 1x" type="image/png" />
              <img src="/media/images/sections/hero/hero-mob@1x.png" alt="" />
            </picture>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Hero;