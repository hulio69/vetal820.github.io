import React from "react";

const PartnerItem = (props) => {
  return (
    <li className="partners__item">
      {props.isLink 
        ? <a 
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3
              className="partners__item-title"
            >
              <img src="/media/images/sections/partners/logo-partner.svg" alt=""/>
              
              <span>
                {props.title}
              </span>
            </h3>

            <span className="partners__btn">
              Сайт Партнера
            </span>
          </a>
        : <h3
            className="
              partners__item-title 
              title 
              title--center 
              title--subtitle"
            >
            {props.title}
          </h3>
      }
    </li>
  );
};

export default PartnerItem;
