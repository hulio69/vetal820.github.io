import React from "react";

import { CABINET_ROUTES } from "../../config/constants";

import './Contacts.scss';


const Contacts = () => {
  return (
    <section className="contacts">
      <div className="container">

        <h2 className="title contacts__title">
          Де нас знайти?
        </h2>

        <div className="contacts__items">
          <div className="contacts-info">
            Долина Озер Київська обл.
          </div>

          <div className="contacts-map">

          </div>

        </div>


      </div>
    </section>
  )
};

export default Contacts;
