import React from "react";
import PartnerItem from "./components/PartnerItem/PartnerItem";

import "./Partners.scss";

const partnersInfo = [
  {
    title: "Недвижимость",
    id: "1",
    link: null,
    isLink: false,
  },
  {
    title: "Биоактивы",
    id: "2",
    link: null,
    isLink: false,
  },
  {
    title: "Ювелирные изделия",
    id: "3",
    link: "https://shop.karat.jewelry/",
    isLink: true,
  },
  {
    title: "Страхование",
    id: "4",
    link: null,
    isLink: false,
  },
  {
    title: "Путешествия",
    id: "5",
    link: null,
    isLink: false,
  },
  {
    title: "Инвестиции",
    id: "6",
    link: null,
    isLink: false,
  },
];

const Partners = () => {
  return (
    <section className="partners" id='partners'>
      <div className="container">
        <h2 className="partners__title title title--center">Наши партнеры</h2>

        <ul className="partners__list">
          {partnersInfo.map((partner) => (
            <PartnerItem
              title={partner.title}
              key={partner.id}
              link={partner.link}
              isLink={partner.isLink}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Partners;
