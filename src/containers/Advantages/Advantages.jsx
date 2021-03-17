import React, { useContext } from 'react';

import { MultiLangContext } from "../../context/MultiLang/MultiLang";
import './Advantages.scss';


const Advantages = () => {
  const {
    words,
  } = useContext(MultiLangContext);

  return (
    <section className="advantages" id="advantages">
      <div className="container">
        <h2 className="section__title advantages__title">
          Sincere <span>IPO</span>
        </h2>

        <div className="advantages__wrapper">
          <div className="advantages__video-block">
            <div className="advantages__preview">
              <img className="advantages__preview-img" src="/media/images/sections/advantages/notebook-preview.png" alt=""/>

              <div className="advantages__play-video hidden">
                <img src="/media/images/sections/hero/play.svg" alt=""/>
              </div>
            </div>

            <p className="advantages__video-description">
              Sincere IPO — {words.ipoDescriptionInfo}.
            </p>
          </div>

          <ul className="advantages__info">
            <li className="advantages__info-item">
              <div className="advantages__info-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.5873 16.1223H18.9886V18.5615L18.3133 18.317C17.954 18.1869 17.6391 17.7822 17.6391 17.244C17.6391 16.5402 18.1447 16.1223 18.5873 16.1223Z" fill="white"/>
                  <path d="M21.0122 23.8775V21.4385L21.6868 21.6828C22.0461 21.8129 22.361 22.2177 22.361 22.7559C22.361 23.4597 21.8554 23.8775 21.4128 23.8775H21.0122Z" fill="white"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M14.9486 5.5505C18.2758 4.8165 21.7241 4.8165 25.0514 5.5505L25.7474 5.70404C30.3942 6.72916 34.0577 10.2856 35.205 14.8853C36.0427 18.2441 36.0427 21.7559 35.205 25.1147C34.0577 29.7144 30.3942 33.2708 25.7474 34.296L25.0513 34.4495C21.7241 35.1835 18.2758 35.1835 14.9486 34.4495L14.2525 34.296C9.60567 33.2708 5.94219 29.7144 4.79493 25.1147C3.95719 21.7559 3.95719 18.2441 4.79493 14.8853C5.94219 10.2856 9.60567 6.72916 14.2525 5.70405L14.9486 5.5505ZM21.0122 13.2829C21.0122 12.7264 20.5592 12.2753 20.0004 12.2753C19.4416 12.2753 18.9886 12.7264 18.9886 13.2829V14.1072H18.5873C16.8649 14.1072 15.6154 15.5959 15.6154 17.244C15.6154 18.5387 16.3802 19.7613 17.6217 20.2108L18.9886 20.7058V23.8775H18.8758C18.2739 23.8775 17.6391 23.3194 17.6391 22.4425C17.6391 21.886 17.1861 21.4349 16.6273 21.4349C16.0684 21.4349 15.6154 21.886 15.6154 22.4425C15.6154 24.2636 16.9941 25.8927 18.8758 25.8927H18.9886V26.7171C18.9886 27.2735 19.4416 27.7246 20.0004 27.7246C20.5592 27.7246 21.0122 27.2735 21.0122 26.7171V25.8927H21.4128C23.1352 25.8927 24.3846 24.4039 24.3846 22.7559C24.3846 21.4611 23.6198 20.2385 22.3784 19.789L21.0122 19.2943V16.1223H21.1243C21.7262 16.1223 22.361 16.6805 22.361 17.5573C22.361 18.1138 22.814 18.5649 23.3728 18.5649C23.9316 18.5649 24.3846 18.1138 24.3846 17.5573C24.3846 15.7362 23.006 14.1072 21.1243 14.1072H21.0122V13.2829Z" fill="white"/>
                </svg>
              </div>

              <div className="advantages__info-text">
                <h4 className="advantages__info-title">
                  {words.simplifiedInvestment}
                </h4>

                <p>
                  Sincere IPO {words.offersInvestorsTransparentTermsAsset}.
                </p>
              </div>
            </li>

            <li className="advantages__info-item">
              <div className="advantages__info-icon">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M13.3644 4.12574C8.77796 5.16263 5.17919 8.68739 4.07506 13.2241C3.47131 15.7048 3.47683 18.315 4.08058 20.7957C5.20197 25.4033 8.50065 29.238 12.9258 31.0247L13.1187 31.1026C15.0336 31.8758 17.2272 30.9446 18.013 29.0473C18.2292 28.5252 18.7441 28.1788 19.3131 28.1788H21.0456C25.7578 28.1788 29.857 24.9769 30.9631 20.4324C31.5123 18.1756 31.5123 15.8215 30.9631 13.5648L30.818 12.9689C29.752 8.58852 26.2772 5.18523 21.8488 4.18407L21.2267 4.04343C18.7589 3.48552 16.1963 3.48552 13.7285 4.04343L13.3644 4.12574ZM12.1072 11.8986C11.514 11.8986 11.0331 12.3758 11.0331 12.9643C11.0331 13.5528 11.514 14.0299 12.1072 14.0299H21.953C22.5462 14.0299 23.0271 13.5528 23.0271 12.9643C23.0271 12.3758 22.5462 11.8986 21.953 11.8986H12.1072ZM13.8973 17.2269C13.3041 17.2269 12.8232 17.704 12.8232 18.2926C12.8232 18.8811 13.3041 19.3582 13.8973 19.3582H20.1628C20.756 19.3582 21.2369 18.8811 21.2369 18.2926C21.2369 17.704 20.756 17.2269 20.1628 17.2269H13.8973Z" fill="white"/>
                </svg>
              </div>

              <div className="advantages__info-text">
                <h4 className="advantages__info-title">
                  {words.personalManager}
                </h4>

                <p>
                  {words.investorsWithCapitalOver}
                </p>
              </div>
            </li>

            <li className="advantages__info-item">
              <div className="advantages__info-icon">
                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M14.2971 5.29419C17.3904 4.5686 20.6096 4.5686 23.7029 5.29419C28.17 6.34203 31.658 9.82999 32.7058 14.2971C33.4314 17.3904 33.4314 20.6096 32.7058 23.7029C31.658 28.17 28.17 31.658 23.7029 32.7058C20.6096 33.4314 17.3904 33.4314 14.2971 32.7058C9.82999 31.658 6.34203 28.17 5.29419 23.7029C4.5686 20.6096 4.5686 17.3904 5.29419 14.2971C6.34203 9.82999 9.82999 6.34203 14.2971 5.29419ZM19.9094 15.4529C19.9094 14.9506 19.5022 14.5435 19 14.5435C18.4977 14.5435 18.0905 14.9506 18.0905 15.4529L18.0905 22.0314C18.0905 22.5337 18.4977 22.9408 19 22.9408C19.5022 22.9408 19.9094 22.5337 19.9094 22.0314V15.4529ZM15.3623 17.4843C15.3623 16.982 14.9551 16.5749 14.4529 16.5749C13.9506 16.5749 13.5434 16.982 13.5434 17.4843L13.3877 24.0906C13.3877 24.5928 13.7948 25 14.2971 25C14.7994 25 15.2065 24.5928 15.2065 24.0906L15.3623 17.4843ZM24.4565 14C24.4565 13.4977 24.0493 13.0906 23.5471 13.0906C23.0448 13.0906 22.6376 13.4977 22.6376 14V20.5471C22.6376 21.0494 23.0448 21.4565 23.5471 21.4565C24.0493 21.4565 24.4565 21.0494 24.4565 20.5471V14Z" fill="white"/>
                </svg>
              </div>

              <div className="advantages__info-text">
                <h4 className="advantages__info-title">
                  {words.completeReporting}
                </h4>

                <p>
                  {words.entireHistoryTransactions}
                </p>
              </div>
            </li>

            <li className="advantages__info-item">
              <div className="advantages__info-icon">
                <svg width="21" height="25" viewBox="0 0 21 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.5 0.125C7.15305 0.125 4.43982 2.81609 4.43982 6.13571C4.43982 9.45534 7.15305 12.1464 10.5 12.1464C13.8469 12.1464 16.5602 9.45534 16.5602 6.13571C16.5602 2.81609 13.8469 0.125 10.5 0.125Z" fill="white"/>
                  <path d="M14.0763 14.8205C11.7071 14.4455 9.2929 14.4455 6.92368 14.8205L6.66973 14.8607C3.3314 15.3892 0.875 18.2452 0.875 21.5981C0.875 23.4079 2.35417 24.875 4.17882 24.875H16.8212C18.6458 24.875 20.125 23.4079 20.125 21.5981C20.125 18.2452 17.6686 15.3892 14.3303 14.8607L14.0763 14.8205Z" fill="white"/>
                </svg>
              </div>

              <div className="advantages__info-text">
                <h4 className="advantages__info-title">
                  {words.analystTeam}
                </h4>

                <p>
                  {words.teamProfessionalAnalysts}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Advantages;