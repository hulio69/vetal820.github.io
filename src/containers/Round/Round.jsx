import React, { useContext } from "react";

import './Round.scss';
import {LINK_ROUTES} from "../../config/constants";
import { MultiLangContext } from "../../context/MultiLang/MultiLang";


const Round = () => {
  const {
    words,
  } = useContext(MultiLangContext);

  return (

    <section className="round__section" id='round'>
      <div className="container">
        <div className="round">
          <div className="round__content">
            <img src="media/images/sections/round/watch.png" alt="watch"
                 className="round__image"/>

            <div className="round__info">
              <h6 className="round__title">
                {words.round} 1
              </h6>

              <p className='round__text'>
                {words.becomeInvestorFirstRound}
              </p>
            </div>

            <a href={LINK_ROUTES.signUp} target="_blank" rel="noopener noreferrer"
               className="link-btn link-btn--lg round__link hidden">
              {words.getIn}

              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M19.3777 13.2178C19.8741 11.1013 19.8741 8.89868 19.3777 6.78222C18.6607 3.72578 16.2742 1.33929 13.2178 0.622341C11.1013 0.125886 8.89868 0.125886 6.78222 0.622342C3.72578 1.33929 1.33928 3.72579 0.62234 6.78223C0.125887 8.89869 0.125887 11.1013 0.622339 13.2178C1.33928 16.2742 3.72578 18.6607 6.78223 19.3777C8.89869 19.8741 11.1013 19.8741 13.2178 19.3777C16.2742 18.6607 18.6607 16.2742 19.3777 13.2178ZM10.5971 6.96733C10.8401 6.72434 11.2341 6.72434 11.4771 6.96733L14.0697 9.55998C14.1864 9.67667 14.2519 9.83494 14.2519 9.99997C14.2519 10.165 14.1864 10.3233 14.0697 10.44L11.4771 13.0326C11.2341 13.2756 10.8401 13.2756 10.5971 13.0326C10.3541 12.7896 10.3541 12.3956 10.5971 12.1526L12.1275 10.6222L6.37029 10.6222C6.02664 10.6222 5.74806 10.3436 5.74806 9.99997C5.74806 9.65632 6.02664 9.37773 6.37029 9.37773L12.1275 9.37773L10.5971 7.84731C10.3541 7.60431 10.3541 7.21033 10.5971 6.96733Z"
                      fill="#0F0F0F"/>
              </svg>
            </a>
          </div>

          <div className="round__bottom">
            <div className="progress">
              <div className="progress__bar" style={{ width: '12%' }}>
                <div className="progress__info">
                  <span className="progress__value">
                    $17,344
                  </span>

                  <span className="progress__sum">
                    / $100,000
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Round;