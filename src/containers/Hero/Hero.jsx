import React, { useContext } from "react";

import { LINK_ROUTES } from "../../config/constants";
import { MultiLangContext } from "../../context/MultiLang/MultiLang";

import './Hero.scss';


const Hero = () => {
  const {
    words,
  } = useContext(MultiLangContext);

  return (
    <section className="hero" id='hero'>
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__left-side">
            <h1 className="title hero__title">
              {words.trustAssetManagement}<br/> <span>{words.onTheStockMarketIpo}</span>
            </h1>

            <p className="hero__subtext">
              {words.investmentsGlobalFastGrowingCompanies} <span><svg width="100" height="39" viewBox="0 0 100 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M43.2154 37.9918C65.3282 37.9918 99 39.0433 99 17.3657C99 1.0411 75.3795 1.04111 49.7487 1.0411C31.1523 1.0411 0.999994 -0.631639 0.999994 17.3657C0.999994 35.363 25.1231 35.8888 54.2718 34.8372" stroke="#1FBF75"/>
              </svg>
              {words.days100}</span>
            </p>

            <a href={LINK_ROUTES.signUp} target="_blank" rel="noopener noreferrer" className="link-btn link-btn--lg hero__link-btn hidden">
              {words.getIn} <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M19.3777 13.2178C19.8741 11.1013 19.8741 8.89868 19.3777 6.78222C18.6607 3.72578 16.2742 1.33929 13.2178 0.622341C11.1013 0.125886 8.89868 0.125886 6.78222 0.622342C3.72578 1.33929 1.33928 3.72579 0.62234 6.78223C0.125887 8.89869 0.125887 11.1013 0.622339 13.2178C1.33928 16.2742 3.72578 18.6607 6.78223 19.3777C8.89869 19.8741 11.1013 19.8741 13.2178 19.3777C16.2742 18.6607 18.6607 16.2742 19.3777 13.2178ZM10.5971 6.96733C10.8401 6.72434 11.2341 6.72434 11.4771 6.96733L14.0697 9.55998C14.1864 9.67667 14.2519 9.83494 14.2519 9.99997C14.2519 10.165 14.1864 10.3233 14.0697 10.44L11.4771 13.0326C11.2341 13.2756 10.8401 13.2756 10.5971 13.0326C10.3541 12.7896 10.3541 12.3956 10.5971 12.1526L12.1275 10.6222L6.37029 10.6222C6.02664 10.6222 5.74806 10.3436 5.74806 9.99997C5.74806 9.65632 6.02664 9.37773 6.37029 9.37773L12.1275 9.37773L10.5971 7.84731C10.3541 7.60431 10.3541 7.21033 10.5971 6.96733Z" fill="#0F0F0F"/>
              </svg>
            </a>
          </div>

          <div className="hero__right-side">
            <div className="hero__video-wrap">
              <div className="hero__preview">
                {/* TODO: hidden*/}
                <div className="hero__play-video hidden">
                  <img src="/media/images/sections/hero/play.svg" alt=""/>
                </div>
              </div>
            </div>

            <div className="hero__info-block hero__info-block--first">
              <div className="hero__num-info">
                23.37<span>%</span>
              </div>

              <div className="hero__text-info">
                {words.average} <span className="hero__marked-text-info">{words.allocation}<span className="hero__tooltip-box">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M5.14855 0.647095C6.69519 0.284302 8.30481 0.284302 9.85145 0.647095C12.085 1.17102 13.829 2.915 14.3529 5.14855C14.7157 6.69519 14.7157 8.30481 14.3529 9.85145C13.829 12.085 12.085 13.829 9.85145 14.3529C8.30481 14.7157 6.69519 14.7157 5.14855 14.3529C2.915 13.829 1.17102 12.085 0.647096 9.85145C0.284301 8.30481 0.284301 6.69519 0.647096 5.14855C1.17102 2.91499 2.915 1.17102 5.14855 0.647095ZM7.49998 5.98428C7.91853 5.98428 8.25783 5.64497 8.25783 5.22642C8.25783 4.80787 7.91853 4.46857 7.49998 4.46857C7.08143 4.46857 6.74213 4.80787 6.74213 5.22642C6.74213 5.64497 7.08143 5.98428 7.49998 5.98428ZM7.49998 6.55266C7.81389 6.55266 8.06837 6.80714 8.06837 7.12105V10.1525C8.06837 10.4664 7.81389 10.7208 7.49998 10.7208C7.18607 10.7208 6.93159 10.4664 6.93159 10.1525V7.12105C6.93159 6.80714 7.18607 6.55266 7.49998 6.55266Z" fill="#10FF90"/>
                  </svg><div className="hero__tooltip-body">
                  {words.allocationDescriptionInfo}
                  </div>
                </span></span> {words.onApplicationParticipation}
              </div>
            </div>

            <div className="hero__info-block">
              <div className="hero__num-info">
                29.07<span>%</span>
              </div>

              <div className="hero__text-info">
                {words.averageReturnFirstDay}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Hero;