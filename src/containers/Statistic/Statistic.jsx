import React, { useContext } from "react";
import { MultiLangContext } from "../../context/MultiLang/MultiLang";

import './Statistic.scss';


const Statistic = () => {
  const {
    words,
  } = useContext(MultiLangContext);

  return (
    <section className="statistic statistic__section" id='statistic'>
      <div className="container">
        <h3 className="section__title">
          {words.open} <br/>
          <span>{words.statistic}</span>
        </h3>

        <div className="statistic__content">
          <div className="statistic__info">
            <div className="statistic__items">
              <div className="statistic-item">
                <span className="statistic-item__title">
                  77.78<span>%</span>
                </span>

                <div className="statistic-item__info">
                  <span className="statistic-item__name">
                    {words.successful} <br /> {words.deals}
                  </span>

                  <img src="/media/images/sections/statistic/block-style-after.svg" alt=""
                       className='statistic-item__image'/>
                </div>
              </div>

              <div className="statistic-item">
                <span className="statistic-item__title">
                  60.36<span>%</span>
                </span>

                <div className="statistic-item__info">
                  <span className="statistic-item__name">
                    {words.averageProfitabilityPerTrade}
                  </span>

                  <img src="/media/images/sections/statistic/block-style-after.svg" alt=""
                       className='statistic-item__image'/>
                </div>
              </div>
            </div>

            <h6 className="statistic-accounts__title">
              {words.brokerAccountsCompany}
            </h6>

            <img src="/media/images/sections/statistic/accounts.png" alt=""
                 className='statistic-accounts__image'/>
          </div>

          <div className='statistic__second'>
            <img src="/media/images/sections/statistic/phone.png" alt=""
                 className='statistic__phone'/>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Statistic;