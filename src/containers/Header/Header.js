import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { CABINET_ROUTES, ROUTES } from "../../config/constants";
import classModifier from "../../utils/classModifier";

import './Header.scss';


const links = [
  { anchor: 'aboutUs', title: 'О нас' },
  { anchor: 'advantages', title: 'Преимущества' },
  { anchor: 'partners', title: 'Партнеры' },
  { anchor: 'whyUs', title: 'Почему мы' },
  { anchor: 'FAQ', title: 'FAQ' },
]


const Header = () => {
  const [isOpenMenu, setOpenMenu] = useState(false);

  return (
    <header className={classModifier('header', [isOpenMenu && 'open'])} id='#header'>
      <button
        className={classModifier('header__mobile-menu', [isOpenMenu && 'open'])}
        onClick={() => setOpenMenu(!isOpenMenu)}
      >
        <svg width="18" height="17" fill="none" data-if-close>
          <path
            d="M3.5 0a3.5 3.5 0 10.01 7.01A3.5 3.5 0 003.5 0zM13.85 0a3.5 3.5 0 10.01 7.01 3.5 3.5 0 000-7.01zM3.5 9.65a3.5 3.5 0 10.01 7 3.5 3.5 0 00-.01-7zM13.85 9.65a3.5 3.5 0 10.01 7 3.5 3.5 0 000-7z"
            fill="#49ADF3"
          />
        </svg>

        <svg width="24" height="24" fill="none" data-if-open>
          <path d="M18 6L6 18M6 6l12 12" stroke="#49ADF3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <span className="header__logo" />

      <div className={classModifier('header__nav', [isOpenMenu && 'open'])}>
        <NavLink 
          exact
          to={ROUTES.main}
          className="header__nav-item"
        >
          Главная
        </NavLink>

        {links.map(link =>
          <a
            key={link.anchor}
            href={"#" + link.anchor}
            className="header__nav-item" // TODO: active if we scrolled to container
            onClick={() => setOpenMenu(false)}
          >
            {link.title}
          </a>
        )}

        <NavLink 
          exact
          to={ROUTES.news}
          className="header__nav-item hidden"
        >
          Новости
        </NavLink>
      </div>

      <a
        href={CABINET_ROUTES.main}
        className="header__go-to-cabinet link-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span data-desktop>Личный Кабинет</span>

        <svg data-mobile width="16" height="20" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.3 5.3c0 2.93-2.36 5.28-5.3 5.28A5.27 5.27 0 012.7 5.3C2.7 2.35 5.07 0 8 0s5.3 2.35 5.3 5.3zM8 20c-4.34 0-8-.7-8-3.43 0-2.72 3.69-3.4 8-3.4 4.34 0 8 .7 8 3.43 0 2.72-3.69 3.4-8 3.4z"
            fill="#49ADF3"
          />
        </svg>
      </a>
    </header>
  )
};

export default Header;