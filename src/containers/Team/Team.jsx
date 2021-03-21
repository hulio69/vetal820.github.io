import React, { useState, useEffect, useContext} from "react";
import SlickSlider from 'react-slick';

import './Team.scss';
import TeamItem from './components/TeamItem';
import { MultiLangContext } from "../../context/MultiLang/MultiLang";


const sliderSettings = {
  dots: true,
  arrows: false,
  infinite: false,
  speed: 500,
  slidesToScroll: 1,
  centerPadding:'20px'
};

const TeamListMobile = (props) => (
  <SlickSlider
    {...props.sliderSettings}
    slidesToShow={props.slidesToShow}
  >
    {props.children}
  </SlickSlider>
);
const TeamListDesktop = (props) => <div className="team__list">{props.children}</div>;

const Team = () => {
  const {
    words,
  } = useContext(MultiLangContext);

  const [activeProduct, setActiveProduct] = useState('sincere_systems');
  const [mobile, setMobile] = useState(null);

  useEffect(() => {
    const onResize = () => {
      const width = window.innerWidth;

      if (width > 1200) {
        setMobile(null);
      } else if (width > 900) {
        setMobile({slidesToShow: 3});
      } else if (width > 600) {
        setMobile({slidesToShow: 2});
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

  const TeamList = mobile
    ? TeamListMobile
    : TeamListDesktop;

  return (

    <section className="team team__section" id='team'>
      <div className="container">
        <h3 className="title team__title">
          Наші відгуки
        </h3>

        <TeamList
          sliderSettings={sliderSettings}
          slidesToShow={!!mobile && mobile.slidesToShow}
        >
          <TeamItem
            isActive={!!mobile || activeProduct === ''}
            id='0'
            image='0'
            setActiveProduct={setActiveProduct}
            name='Павел Болилый'
            position={1}
            text='
            Спасибо Storm agency за то, что направили нас в правильное русло, когда мы решили выйти из офлайна в онлайн. Мы активно начали продавать франшизу, открывать новые заведения.
            '
          />

          <TeamItem
            isActive={!!mobile || activeProduct === ''}
            id='1'
            image='1'
            setActiveProduct={setActiveProduct}
            name='Валентина Шунько'
            position={1}
            text='
            Спасибо Storm agency за то, что направили нас в правильное русло, когда мы решили выйти из офлайна в онлайн. Мы активно начали продавать франшизу, открывать новые заведения.
            '
          />

          <TeamItem
            isActive={!!mobile || activeProduct === ''}
            id='2'
            image='2'
            setActiveProduct={setActiveProduct}
            name='Геннадий Дикий'
            position={1}
            text='
            Спасибо Storm agency за то, что направили нас в правильное русло, когда мы решили выйти из офлайна в онлайн. Мы активно начали продавать франшизу, открывать новые заведения.
            '
          />

          <TeamItem
            isActive={!!mobile || activeProduct === ''}
            id='3'
            image='3'
            setActiveProduct={setActiveProduct}
            name='Павел Болилый'
            position={1}
            text='
            Спасибо Storm agency за то, что направили нас в правильное русло, когда мы решили выйти из офлайна в онлайн. Мы активно начали продавать франшизу, открывать новые заведения.
            '
          />

        </TeamList>
      </div>
    </section>
  )
};

export default Team;