import React from 'react';

import classModifier from '../../../utils/classModifier';

const TeamItem = props => {
  const {
    isActive,
    id,
    setActiveProduct,
    image,
    name,
    position,
    text,
  } = props;


  return (
    <li
      className={classModifier('team__item', [isActive && 'show'])}
      onMouseEnter={() => !isActive && setActiveProduct(id)}
    >
      <img src={`/media/images/sections/team/team-${image}.png`} alt="zz"
           className="team__image"/>

      <div className="team__title-block">
        <h3 className="team__name">
          {name}
        </h3>

        <div className='tooltip'>
          <img src="/media/images/tooltip.svg" alt=""/>

          <div className="tooltip__block">
            <p className="tooltip__text">
              {text}
            </p>
          </div>
        </div>
      </div>

      <p className="team__position">{position}</p>
    </li>
  )
}

export default TeamItem;