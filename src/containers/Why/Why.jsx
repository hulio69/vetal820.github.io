import React, {useState, useEffect, useContext} from "react";
import SlickSlider from 'react-slick';
import { MultiLangContext } from "../../context/MultiLang/MultiLang";

import './Why.scss';


const sliderSettings = {
  dots: true,
  arrows: false,
  infinite: false,
  speed: 500,
  slidesToScroll: 1,
  centerPadding: '20px',
  adaptiveHeight: true
};

const ItemListMobile = (props) => (
  <SlickSlider
    {...props.sliderSettings}
    slidesToShow={props.slidesToShow}
  >
    {props.children}
  </SlickSlider>
);
const ItemListDesktop = (props) => <ul className="item__list">{props.children}</ul>;

const Why = () => {
  const {
    words,
  } = useContext(MultiLangContext);

  const [mobile, setMobile] = useState(null);

  useEffect(() => {
    const onResize = () => {
      const width = window.innerWidth;

      if (width > 900) {
        setMobile(null);
      } else {
        setMobile({slidesToShow: 1});
      }
    }

    onResize();
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    }
  }, []);

  const ItemList = mobile
    ? ItemListMobile
    : ItemListDesktop;

  return (

    <section className="why why__section" id='why'>
      <div className="container">
        <h3 className="section__title">
          {words.whyWithUs}
          <br/>
          <span>{words.profitableInvest}?</span>
        </h3>

        <ItemList
          sliderSettings={sliderSettings}
          slidesToShow={!!mobile && mobile.slidesToShow}
        >

          <li className='item item--basic'>
            <div className="item__container">
              <h6 className="item__title">
              {words.personalMoneyManagement}
              </h6>

              <ul className='item__ul'>
                <li>
                  <i></i>
                  <p>
                    {words.minimumInvestment} $10,000
                  </p>
                </li>
                <li>
                  <i></i>
                  <p>
                    {words.lowRelocationRate}
                  </p>
                </li>
                <li>
                  <i></i>
                  <p>
                    {words.highCommissionRates}
                  </p>
                </li>
                <li>
                  <i></i>
                  <p>
                    {words.dailyMarketAnalytics}
                  </p>
                </li>
                <li>
                  <i></i>
                  <p>
                    {words.analysisNewAndPromising}
                  </p>
                </li>
                <li>
                  <i></i>
                  <p>
                    {words.registrationAndCreationApplicationsParticipation}
                  </p>
                </li>
                <li>
                  <i></i>
                  <p>
                    {words.annualIncomeAverage}
                  </p>
                </li>
              </ul>
            </div>
          </li>

          <li className='item item--pro'>
            <div className="item__container">

              <div className="item__title-block">
                <h6 className="item__title">
                  {words.investments} <span>{words.with} Sincere IPO</span>
                </h6>

                <img src="/media/images/sections/why/approved.png" alt=""
                className='item__title-image'/>
              </div>



              <ul className='item__ul'>
                <li>
                  <i>
                    <img src="/media/images/sections/why/pro.svg" alt=""/>
                  </i>
                  <p>
                    {words.minimumInvestment} <span><svg width="91" height="44" viewBox="0 0 91 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M50.3253 1.12185C21.6416 -0.429194 1 13.145 1 23.7671C1 34.3891 20.9233 43 45.5 43C70.0767 43 90 34.3891 90 23.7671C90 13.2224 71.2349 4.53551 43.8916 4.53551" stroke="#1FBF75"/>
                    </svg>$2,500</span>
                  </p>
                </li>
                <li>
                  <i>
                    <img src="/media/images/sections/why/pro.svg" alt=""/>
                  </i>
                  <p>
                    {words.theAllocationRateHigherDue}
                  </p>
                </li>
                <li>
                  <i>
                    <img src="/media/images/sections/why/pro.svg" alt=""/>
                  </i>
                  <p>
                    {words.lowerCommissionDue}
                  </p>
                </li>
                <li>
                  <i>
                    <img src="/media/images/sections/why/pro.svg" alt=""/>
                  </i>
                  <p>
                    {words.riskManagementDepartment}
                  </p>
                </li>
                <li>
                  <i>
                    <img src="/media/images/sections/why/pro.svg" alt=""/>
                  </i>
                  <p>
                    {words.expertAnalysisPotential}
                  </p>
                </li>
                <li>
                  <i>
                    <img src="/media/images/sections/why/pro.svg" alt=""/>
                  </i>
                  <p>
                    {words.paymentIncomeIn100days}
                  </p>
                </li>
                <li>
                  <i>
                    <img src="/media/images/sections/why/pro.svg" alt=""/>
                  </i>
                  <p>
                    {words.annualReturnAverage} <span><svg width="69" height="36" viewBox="0 0 69 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M27.9015 34.9021C49.4949 36.1541 68 25.0987 68 16.5245C68 5.5 59.5 -0.999811 34.5 0.999684C15.9985 0.999684 1 7.95039 1 16.5245C1 25.0362 10.5 34.9021 39.0682 31.8201" stroke="#1FBF75"/>
                    </svg>150%</span>  
                  </p>                  
                </li>
              </ul>
            </div>
          </li>
          
        </ItemList>
      </div>
    </section>
  )
};

export default Why;