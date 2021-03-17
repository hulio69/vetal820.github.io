import React, { useContext } from 'react';
import { MultiLangContext } from '../../context/MultiLang/MultiLang';

import "./Ipo.scss";


const Ipo = () => {
  const {
    words,
  } = useContext(MultiLangContext);

  return (
    <section className="ipo" id="whatIsIPO">
      <div className="container">
        <div className="ipo__top">
          <div className="ipo__title-box">
            <h2 className="section__title ipo__title">
              {words.whatIs} <span>IPO?</span>
            </h2>

            <p className="ipo__subtitle-text">
              IPO (Initial Public Offering) — {words.thisInitialPublicOffering}. 
            </p>
          </div>

          <div className="ipo__text-block">
            <p>
              {words.ipoTextInfo1}
            </p>

            <p>
              {words.ipoTextInfo2}
            </p>
          </div>
        </div>

        <ul className="ipo__info-list">
          <li className="ipo__info-item">
            <h3 className="ipo__item-title">
              {words.searchCompaniesInvestment}
            </h3>

            <p>
              {words.detailedAnalysisAllOffers}
            </p>
          </li>

          <li className="ipo__info-item ipo__info-item--green">
            <h3 className="ipo__item-title">
              {words.brokerAccountCreation}
            </h3>

            <p>
              {words.registrationAndFamiliarization}
            </p>
          </li>

          <li className="ipo__info-item ipo__info-item--blue">
            <h3 className="ipo__item-title">
              {words.publicOfferingsShares}
            </h3>

            <p>
              {words.afterAddingShareExchange}
            </p>
          </li>

          <li className="ipo__info-item">
            <h3 className="ipo__item-title">
              {words.profitFixation}
            </h3>

            <p>
            {words.afterEnding} <span className="ipo__marked-text-info">lock-up<span className="ipo__tooltip-box">
            <svg width="10" height="10" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M5.14855 0.647095C6.69519 0.284302 8.30481 0.284302 9.85145 0.647095C12.085 1.17102 13.829 2.915 14.3529 5.14855C14.7157 6.69519 14.7157 8.30481 14.3529 9.85145C13.829 12.085 12.085 13.829 9.85145 14.3529C8.30481 14.7157 6.69519 14.7157 5.14855 14.3529C2.915 13.829 1.17102 12.085 0.647096 9.85145C0.284301 8.30481 0.284301 6.69519 0.647096 5.14855C1.17102 2.91499 2.915 1.17102 5.14855 0.647095ZM7.49998 5.98428C7.91853 5.98428 8.25783 5.64497 8.25783 5.22642C8.25783 4.80787 7.91853 4.46857 7.49998 4.46857C7.08143 4.46857 6.74213 4.80787 6.74213 5.22642C6.74213 5.64497 7.08143 5.98428 7.49998 5.98428ZM7.49998 6.55266C7.81389 6.55266 8.06837 6.80714 8.06837 7.12105V10.1525C8.06837 10.4664 7.81389 10.7208 7.49998 10.7208C7.18607 10.7208 6.93159 10.4664 6.93159 10.1525V7.12105C6.93159 6.80714 7.18607 6.55266 7.49998 6.55266Z" fill="#10FF90"/>
              </svg><div className="ipo__tooltip-body">
                Lock-up-{words.period} — {words.timeAfterIpo}
              </div>  
            </span></span> {words.period90days}
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Ipo;