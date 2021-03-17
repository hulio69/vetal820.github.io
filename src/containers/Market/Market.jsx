import React, { useContext } from 'react';
import { MultiLangContext } from '../../context/MultiLang/MultiLang';

import "./Market.scss";


const Market = () => {
  const {
    words,
  } = useContext(MultiLangContext);

  return (
    <section className="market" id="about">
      <div className="container">
        <h2 className="section__title market___title">
          {words.market} IPO <br/><span>{words.in2020}</span>
        </h2>

        <div className="market__list">
          <div className="market__item">
            <div className="market__item-top">
              <svg width="21" height="26" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.25 10.4166L10.5 1.16663M10.5 1.16663L19.75 10.4166M10.5 1.16663L10.5 24.2916" stroke="#1FBF75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>

              <div className="market__item-grow">
                +36%
              </div>
            </div>

            <div className="market__num-block">
              <span className="market__num-info">
                $<span>218</span>
              </span>

              <p>{words.billions}</p>
            </div>

            <div className="market__bottom-text">
            {words.attractedInvestments}
            </div>
          </div>

          <div className="market__item">
            <div className="market__item-top">
              <svg width="21" height="26" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.25 10.4166L10.5 1.16663M10.5 1.16663L19.75 10.4166M10.5 1.16663L10.5 24.2916" stroke="#1FBF75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>

              <div className="market__item-grow">
                +80%
              </div>
            </div>

            <div className="market__num-block">
              <span className="market__num-info">
                <span>400</span>
              </span>
            </div>

            <div className="market__bottom-text">
            {words.companiesListedOnAmericanStock}
            </div>
          </div>

          <div className="market__item">
            <div className="market__item-top">
              <svg width="21" height="26" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.25 10.4166L10.5 1.16663M10.5 1.16663L19.75 10.4166M10.5 1.16663L10.5 24.2916" stroke="#1FBF75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>

              <div className="market__item-grow">
                +15%
              </div>
            </div>

            <div className="market__num-block">
              <span className="market__num-info">
                <span>29.07</span>%
              </span>
            </div>

            <div className="market__bottom-text">
            {words.returnTheFirstDayPlacement}
            </div>
          </div>

          <div className="market__item">
            <div className="market__num-block">
              <span className="market__num-info market__num-info--income">
                <span>79</span>%
              </span>
            </div>

            <div className="market__item-bottom">
              <div className="market__bottom-text">
              {words.averageStockReturnsToday}
              </div>

              <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M25.1473 5.2893C20.7573 4.40356 16.2428 4.40357 11.8528 5.2893C9.10331 5.84406 6.8906 7.94939 6.13151 10.733L6.06691 10.9699C5.1722 14.2507 5.1722 17.7229 6.06691 21.0038L6.13151 21.2407C6.8906 24.0242 9.10331 26.1296 11.8528 26.6843C13.6999 27.057 15.569 27.2729 17.4416 27.3319V30.1899H14.9718C14.3872 30.1899 13.9133 30.6791 13.9133 31.2825C13.9133 31.8858 14.3872 32.375 14.9718 32.375H22.0283C22.6129 32.375 23.0868 31.8858 23.0868 31.2825C23.0868 30.6791 22.6129 30.1899 22.0283 30.1899H19.5585V27.3319C21.4311 27.2729 23.3002 27.057 25.1473 26.6843C27.8968 26.1296 30.1095 24.0242 30.8686 21.2407L30.9332 21.0037C31.8279 17.7229 31.8279 14.2508 30.9332 10.9699L30.8686 10.733C30.1095 7.94939 27.8968 5.84406 25.1473 5.2893ZM21.6557 17.7273C21.6675 17.7164 21.6792 17.7055 21.6909 17.6946L24.0061 15.5439C24.3537 15.221 24.3819 14.6683 24.069 14.3095C23.7562 13.9507 23.2208 13.9217 22.8731 14.2446L20.558 16.3953C20.3314 16.6058 20.1846 16.7406 20.0747 16.8299C19.9897 16.7153 19.8798 16.5472 19.7106 16.2854L18.6986 14.7185C18.6899 14.705 18.6811 14.6914 18.6724 14.6779C18.4849 14.3874 18.298 14.098 18.1123 13.883C17.902 13.6396 17.5967 13.3749 17.1478 13.3167C16.6989 13.2584 16.3397 13.4369 16.0776 13.6191C15.8461 13.78 15.5957 14.0127 15.3444 14.2463C15.3327 14.2572 15.3209 14.2681 15.3092 14.279L12.9941 16.4297C12.6465 16.7526 12.6183 17.3052 12.9311 17.664C13.244 18.0228 13.7794 18.0519 14.127 17.729L16.4422 15.5783C16.6688 15.3678 16.8156 15.233 16.9254 15.1436C17.0105 15.2583 17.1204 15.4263 17.2895 15.6882L18.3015 17.2551C18.3018 17.2555 18.3021 17.256 18.3024 17.2564C18.3108 17.2695 18.3193 17.2826 18.3277 17.2957C18.5153 17.5862 18.7021 17.8756 18.8878 18.0906C19.0981 18.334 19.4034 18.5987 19.8523 18.6569C20.3012 18.7152 20.6605 18.5367 20.9226 18.3545C21.154 18.1936 21.4044 17.9609 21.6557 17.7273Z" fill="white"/>
              </svg>
            </div>                    
          </div>
        </div>
      </div>
    </section>
  )
};

export default Market;