import React from "react";
import {CABINET_ROUTES} from "../../config/constants";

import Social from "../../components/Social/Social";

import './Footer.scss';


const Footer = () => {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="footer__table">
          <div className="footer__image">
            <img src="/media/images/sections/footer/logotype.png" alt="logotype"/>
          </div>

          <div className="footer__list">
            <p className="footer__title">Швидкий доступ</p>
            <a
              href='/'
              target="_blank"
              className='footer__link'
              rel="noopener noreferrer"
            >
              Регистрация
            </a>

            <a
              href='/'
              target='_blank'
              className='footer__link'
              rel="noopener noreferrer"
            >
              Вход
            </a>
          </div>

          <div className="footer__list">
            <p className="footer__title">Наши контакты</p>
            <a href={`mailto:${CABINET_ROUTES.mail}`}
               className='footer__link'
               rel="noopener noreferrer">
              {CABINET_ROUTES.mail}
            </a>

            <Social/>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
