import React from 'react';


const CooperationItem = (props) => {
    return (
        <li className="cooperation__item">
          <div className="cooperation__item-img">
            <div className="cooperation__icon-box"></div>
          </div>

          <div className="cooperation__text-block">
            <h3 
              className="
                cooperation__item-title
                title 
                title--subtitle
              ">
                {props.title}
            </h3>

            <p className="cooperation__text info-text info-text--grey">
              {props.text}
            </p>
          </div>
        </li>
    )
}

export default CooperationItem;