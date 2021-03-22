import React from "react";

import {CABINET_ROUTES} from "../../config/constants";

import './Info.scss';


const Info = () => {
  return (
    <section id='info' className="info" >
      <div className="container">
        <h2 className="title info__title">
          Основна інформація
        </h2>

        <div className="info__items">
          <div className="info-item">
            <div className="info-item__icon">
              <img src="/media/images/sections/info/fish.svg" alt=""/>
            </div>

            <h6 className="info-item__title">
              Види риби
            </h6>

            <div className="info-item__lists">
              <ul className="info-item__list">
                <li>Щука</li>
                <li>Судак</li>
                <li>Окунь</li>
                <li>Товстолобик</li>
                <li>Короп</li>
              </ul>

              <ul className="info-item__list">
                <li>Лин</li>
                <li>Карась</li>
                <li>Амур білий</li>
                <li>Плітка звичайна</li>
              </ul>
            </div>


            <p className='info-item__text'>Плавають трофеї, які можуть досягати 17-18 кілограм</p>
          </div>

          <div className="info-item">
            <div className="info-item__icon">
              <img src="/media/images/sections/info/rules.svg" alt=""/>
            </div>

            <h6 className="info-item__title">
              Правила риболовлі
            </h6>

            <ul className="info-item__list">
              <li>Можна мати з собою 2 вудочки по 1 гачку </li>
              <li>Максимальний улов, що можна з собою взяти - 3кг</li>
              <li>Підсака та мат - обов'язковий атрибут</li>
              <li>Трофеї більші ніж 3 кг - відпускаються</li>
            </ul>
          </div>

          <div className="info-item">
            <div className="info-item__icon">
              <img src="/media/images/sections/info/price.svg" alt=""/>
            </div>

            <h6 className="info-item__title">
              Ціни
            </h6>

            <ul className="info-item__list">
              <li>Риболовля (1 людина) 7:00 - 20:00 — <span>600 грн</span></li>
              <li>Оренда альтанки (до 6 людей) — <span>600 грн</span></li>
              <li>Мангал + дрова — <span>150 грн</span></li>
              <li>Оренда великої альтанки + посуд + меблі (з 1 людини) — <span>150 грн</span></li>
            </ul>
          </div>
        </div>

        <a
          href={CABINET_ROUTES.viber}
          target="_blank"
          className="link-btn link-btn--light info__link-btn"
          rel="noopener noreferrer"
        >
            <span>
              Написати нам
            </span>

          <svg width="21" height="22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.225 12.735c.657-5.524-.315-9.012-2.068-10.59h.001C15.33-.55 5.776-.95 2.392 2.264.872 3.837.337 6.145.278 9.001c-.059 2.857-.128 8.21 4.86 9.661h.004l-.005 2.218s-.034.898.54 1.079c.656.212.953-.205 2.995-2.643 3.413.296 6.035-.382 6.333-.481.69-.231 4.59-.747 5.22-6.1zm-11.217 5.02s-2.16 2.695-2.832 3.394c-.22.228-.461.207-.458-.244 0-.297.017-3.682.017-3.682-4.229-1.212-3.98-5.77-3.934-8.153.046-2.386.483-4.34 1.77-5.655C6.54.632 14.915 1.254 17.049 3.26c2.609 2.312 1.68 8.846 1.686 9.07-.536 4.467-3.697 4.75-4.278 4.944-.249.082-2.554.675-5.449.482z" fill="#fff"/><path d="M10.204 3.939c-.353 0-.353.55 0 .554 2.738.022 4.993 1.93 5.017 5.43 0 .37.541.366.537-.004h-.001c-.03-3.772-2.492-5.959-5.553-5.98z" fill="#fff"/><path d="M13.805 9.344c-.008.364.532.382.536.012.045-2.08-1.237-3.793-3.647-3.973-.353-.026-.39.529-.038.554 2.09.159 3.191 1.585 3.15 3.407zM13.228 11.71c-.453-.263-.914-.1-1.105.158l-.399.516c-.202.262-.58.227-.58.227C8.38 11.881 7.64 8.99 7.64 8.99s-.033-.392.22-.602l.498-.412c.25-.198.407-.675.153-1.143-.678-1.226-1.134-1.648-1.366-1.973-.243-.305-.61-.374-.991-.168h-.009c-.793.464-1.66 1.332-1.383 2.226.474.942 1.345 3.946 4.12 6.216 1.305 1.073 3.37 2.173 4.246 2.427l.008.013c.863.288 1.703-.614 2.151-1.43v-.007c.2-.395.133-.77-.157-1.014-.516-.502-1.293-1.057-1.903-1.413z" fill="#fff"/><path d="M11.072 7.429c.88.051 1.308.511 1.354 1.456.016.37.552.344.536-.025-.059-1.234-.702-1.922-1.861-1.986-.353-.021-.386.534-.03.555z" fill="#fff"/></svg>
        </a>
      </div>
    </section>
  )
};

export default Info;
