import React from "react";

import { CABINET_ROUTES } from "../../config/constants";

import './Join.scss';


const Join = () => {
  return (
    <section className="join">
      <div className="container">
        <div className="join__box">
          <div className="join__info">
            <h2 className="title title--small join__title">
              Присоединяйтесь <br/>к&nbsp;<span>Cashback Global</span>
            </h2>

            <p className="join__text info-text">
              И  получите свой первый кэшбэк!
            </p>

            <a 
              href={CABINET_ROUTES.signUp}
              target="_blank"
              rel="noopener noreferrer"
              className="link-btn"
            >
              <span>
                Регистрация
              </span> 
            </a>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Join;
