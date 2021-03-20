import React from "react";

import CooperationItem from "./components/CooperationItem/CooperationItem";
import "./Cooperation.scss";


const cooperationInfo = [
  {
    title: "Условия",
    id: "1",
    text: "Бесплатная интеграция бизнеса в Cashback Global",
  },
  {
    title: "Прозрачность",
    id: "2",
    text: "Расчёт с сервисом только после покупки продукта или услуги клиентом",
  },
  {
    title: "Трафик",
    id: "3",
    text: "Постоянный поток новых клиентов",
  },
  {
    title: "Масштаб",
    id: "4",
    text: "Продажи по всему миру",
  },
];


const Cooperation = () => {
  return (
    <section className="cooperation" id='whyUs'>
      <div className="container">
        <div className="cooperation__wrap">
          <div className="cooperation__info-wrap">
            <h2 className="title cooperation__title">
              Почему с нами <br/><span>выгодно сотрудничать?</span>
            </h2>

            <ul className="cooperation__list">
              {cooperationInfo.map((item) => (
                <CooperationItem
                  title={item.title}
                  text={item.text}
                  key={item.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cooperation;
