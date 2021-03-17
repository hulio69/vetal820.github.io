import React, { useContext } from "react";
import { LINK_ROUTES } from "../../config/constants";

import './Footer.scss';
import { MultiLangContext } from "../../context/MultiLang/MultiLang";


const Footer = () => {
  const {
    words,
  } = useContext(MultiLangContext);

  return (
    <footer className='footer'>
      <div className="container">
        <div className="footer__table">
          <div className="footer__block">
            <a href="/" className='footer__logotype'>
              <img src="/media/images/sections/footer/logotype.svg"
                   alt="logotype"/>
            </a>

            <p className="footer__text">
              Copyright © {new Date().getFullYear()}, Sincere.group
            </p>
            <p className="footer__text">
              All trademarks and copyrights belong to their respective owners.
            </p>
          </div>

          {/*temp*/}
          <div></div>

          <div className="footer__list footer__list--docs hidden">
            <p className="footer__title">{words.documents}</p>
            <a
              href='/'
              target="_blank"
              className='footer__link'
              rel="noopener noreferrer"
            >
              {words.termsOfUse}
            </a>

            <a
              href='/'
              target='_blank'
              className='footer__link'
              rel="noopener noreferrer"
            >
              {words.privacyPolicy}
            </a>

            <a
              href='/'
              target="_blank"
              className='footer__link'
              rel="noopener noreferrer"
            >
              {words.amlPolicy}
            </a>

            <a
              href='/'
              target='_blank'
              className='footer__link'
              rel="noopener noreferrer"
            >
              {words.risks}
            </a>
          </div>

          <div className="footer__list footer__list--contacts">
            <p className="footer__title">{words.contacts}</p>

            <span className='footer__text'>
              Email:

            <a href="mailto:support@sinsere.systems"
               target="_blank"
               rel="noopener noreferrer"
               className='footer__mail'>

              support@sinsere.systems
            </a>
            </span>


            <div className="social hidden">
              <a href={LINK_ROUTES.facebook} className="social__link" target="_blank" rel="noopener noreferrer">
                <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.71875 9L9.15625 6.125H6.375V4.25C6.375 3.4375 6.75 2.6875 8 2.6875H9.28125V0.21875C9.28125 0.21875 8.125 0 7.03125 0C4.75 0 3.25 1.40625 3.25 3.90625V6.125H0.6875V9H3.25V16H6.375V9H8.71875Z" fill="#0F0F0F"/>
                </svg>
              </a>
              <a href={LINK_ROUTES.instagram} className="social__link" target="_blank" rel="noopener noreferrer">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 3.40625C6 3.40625 4.40625 5.03125 4.40625 7C4.40625 9 6 10.5938 8 10.5938C9.96875 10.5938 11.5938 9 11.5938 7C11.5938 5.03125 9.96875 3.40625 8 3.40625ZM8 9.34375C6.71875 9.34375 5.65625 8.3125 5.65625 7C5.65625 5.71875 6.6875 4.6875 8 4.6875C9.28125 4.6875 10.3125 5.71875 10.3125 7C10.3125 8.3125 9.28125 9.34375 8 9.34375ZM12.5625 3.28125C12.5625 2.8125 12.1875 2.4375 11.7188 2.4375C11.25 2.4375 10.875 2.8125 10.875 3.28125C10.875 3.75 11.25 4.125 11.7188 4.125C12.1875 4.125 12.5625 3.75 12.5625 3.28125ZM14.9375 4.125C14.875 3 14.625 2 13.8125 1.1875C13 0.375 12 0.125 10.875 0.0625C9.71875 0 6.25 0 5.09375 0.0625C3.96875 0.125 3 0.375 2.15625 1.1875C1.34375 2 1.09375 3 1.03125 4.125C0.96875 5.28125 0.96875 8.75 1.03125 9.90625C1.09375 11.0312 1.34375 12 2.15625 12.8438C3 13.6562 3.96875 13.9062 5.09375 13.9688C6.25 14.0312 9.71875 14.0312 10.875 13.9688C12 13.9062 13 13.6562 13.8125 12.8438C14.625 12 14.875 11.0312 14.9375 9.90625C15 8.75 15 5.28125 14.9375 4.125ZM13.4375 11.125C13.2188 11.75 12.7188 12.2188 12.125 12.4688C11.1875 12.8438 9 12.75 8 12.75C6.96875 12.75 4.78125 12.8438 3.875 12.4688C3.25 12.2188 2.78125 11.75 2.53125 11.125C2.15625 10.2188 2.25 8.03125 2.25 7C2.25 6 2.15625 3.8125 2.53125 2.875C2.78125 2.28125 3.25 1.8125 3.875 1.5625C4.78125 1.1875 6.96875 1.28125 8 1.28125C9 1.28125 11.1875 1.1875 12.125 1.5625C12.7188 1.78125 13.1875 2.28125 13.4375 2.875C13.8125 3.8125 13.7188 6 13.7188 7C13.7188 8.03125 13.8125 10.2188 13.4375 11.125Z" fill="#0F0F0F"/>
                </svg>
              </a>
              <a href={LINK_ROUTES.youtube} className="social__link" target="_blank" rel="noopener noreferrer">
                <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.1875 1.875C17.25 2.125 17.3021 2.4375 17.3438 2.8125C17.4062 3.1875 17.4479 3.5625 17.4688 3.9375C17.4896 4.29167 17.5 4.625 17.5 4.9375C17.5208 5.25 17.5312 5.51042 17.5312 5.71875V6C17.5312 7.875 17.4167 9.26042 17.1875 10.1562C17.0833 10.5104 16.8958 10.8229 16.625 11.0938C16.3542 11.3646 16.0312 11.5521 15.6562 11.6562C15.2604 11.7604 14.5104 11.8438 13.4062 11.9062C12.3021 11.9479 11.2917 11.9792 10.375 12H9C5.4375 12 3.21875 11.8854 2.34375 11.6562C1.53125 11.4271 1.02083 10.9271 0.8125 10.1562C0.708333 9.76042 0.625 9.21875 0.5625 8.53125C0.520833 7.82292 0.489583 7.22917 0.46875 6.75V6C0.46875 4.14583 0.583333 2.77083 0.8125 1.875C0.916667 1.5 1.10417 1.17708 1.375 0.90625C1.64583 0.635417 1.96875 0.447917 2.34375 0.34375C2.73958 0.239583 3.48958 0.166667 4.59375 0.125C5.69792 0.0625 6.70833 0.0208333 7.625 0H9C12.5625 0 14.7812 0.114583 15.6562 0.34375C16.0312 0.447917 16.3542 0.635417 16.625 0.90625C16.8958 1.17708 17.0833 1.5 17.1875 1.875ZM7.25 8.5625L11.7188 6L7.25 3.46875V8.5625Z" fill="#0F0F0F"/>
                </svg>
              </a>
              <a href={LINK_ROUTES.telegram} className="social__link" target="_blank" rel="noopener noreferrer">
                <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 1.09375L11.875 11.0312C11.7083 11.7396 11.3229 11.9271 10.7188 11.5938L7.5 9.21875L5.9375 10.7188C5.72917 10.9271 5.51042 11.0312 5.28125 11.0312L5.53125 7.75L11.5 2.375C11.6458 2.22917 11.6458 2.14583 11.5 2.125C11.375 2.08333 11.2396 2.11458 11.0938 2.21875L3.71875 6.875L0.53125 5.875C0.177083 5.77083 0.0104167 5.61458 0.03125 5.40625C0.0520833 5.19792 0.270833 5.02083 0.6875 4.875L13.0938 0.0625C13.4062 -0.0416667 13.6562 0 13.8438 0.1875C14.0312 0.354167 14.0833 0.65625 14 1.09375Z" fill="#0F0F0F"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
