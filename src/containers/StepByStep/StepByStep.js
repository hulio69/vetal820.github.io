import React from "react";

import './StepByStep.scss';


const steps = [
  'Выбери товар или услугу партнера',
  'Сделай покупку',
  'Пройди простую регистрацию',
  'Активируй полученный код',
]


const StepByStep = (props) => {
  return (
    <section className="step-by-step">
      <div className="container">
        <div className="step-by-step__inner">
          <div className="step-by-step__left">
            <h2 className="title title--small title--white step-by-step__title">Как покупать кэшбэком?</h2>

            <ul className="step-by-step__list">
              {steps.map((info, index) =>
                <li
                  key={index}
                  className="step-by-step__step"
                >
                  <div className="step-by-step__step-count">{index + 1}</div>

                  <h6 className="step-by-step__step-info">{info}</h6>
                </li>
              )}
            </ul>
          </div>

          <div className="step-by-step__right">
            <img src="/media/images/sections/step-by-step/icon.svg" alt="cashback" />
          </div>
        </div>
      </div>
    </section>
  )
};

export default StepByStep;