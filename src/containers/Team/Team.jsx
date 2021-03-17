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
const TeamListDesktop = (props) => <ul className="team__list">{props.children}</ul>;

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
        <h3 className="section__title">
          {words.ourTeam} <br/>
          <span>{words.analysts}</span>
        </h3>

        <TeamList
          sliderSettings={sliderSettings}
          slidesToShow={!!mobile && mobile.slidesToShow}
        >
          <TeamItem
            isActive={!!mobile || activeProduct === ''}
            id='1'
            image='metashev'
            setActiveProduct={setActiveProduct}
            name={words.teamName1}
            position={words.roleTeam1}
            text={words.experience1}
          />

          <TeamItem
            isActive={!!mobile || activeProduct === ''}
            id='2'
            image='vanina'
            setActiveProduct={setActiveProduct}
            name={words.teamName2}
            position={words.roleTeam2}
            text={words.experience2}
          />

          <TeamItem
            isActive={!!mobile || activeProduct === ''}
            id='3'
            image='chernuh'
            setActiveProduct={setActiveProduct}
            name={words.teamName3}
            position={words.roleTeam3}
            text={words.experience3}
          />

          <TeamItem
            isActive={!!mobile || activeProduct === ''}
            id='4'
            image='smit'
            setActiveProduct={setActiveProduct}
            name={words.teamName4}
            position={words.roleTeam4}
            text={words.experience4}
          />

        </TeamList>
      </div>
    </section>
  )
};

export default Team;