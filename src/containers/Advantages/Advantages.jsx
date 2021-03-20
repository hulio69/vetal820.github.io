import React from "react";

import "./Advantages.scss";
import AdvantageItem from "./components/AdvantageItem/AdvantageItem";


const advantagesInfo = [
  {
    title: "Комфорт",
    id: "1",
    text: "Один счет для всех кэшбэкпрограмм",
    tooltipTitle: "Один счет для всех кэшбэкпрограмм",
    tooltipText: "Используйте личный аккаунт нашей платформы для зачислений с покупок в наших партнеров и вывода кэшбэка в любое время доступные платформы.",
  },
  {
    title: "Выгода",
    id: "2",
    text: "Минимальная комиссия сервиса",
    tooltipTitle: "Минимальная комиссия сервиса",
    tooltipText: "Комиссия на вывод полученных средств составляет всего 1%. Дополнительные сборы при выводе кэшбэка не взимаются.",
  },
  {
    title: "Лояльность",
    id: "3",
    text: "Высокие ставки кэшбэка",
    tooltipTitle: "Высокие ставки кэшбэка",
    tooltipText: "Заключая сотрудничество с нашими партнерами, мы предоставляем привилегированные условия по выплатам кэшбэка для наших пользователей.",
  },
  {
    title: "Популярность",
    id: "4",
    text: "Большая география развития сервиса",
    tooltipTitle: "Большая география развития сервиса",
    tooltipText: "Благодаря реализованной бизнес-моделе нашей платформы, мы интенсивно развиваемся и с радостью помогаем экономить покупателям по всему миру.",
  },
  {
    title: "Вывод",
    id: "5",
    text: "Вывод всего от 50$",
    tooltipTitle: "Вывод 50$",
    tooltipText: "Вывод полученного кэшбэка от своих покупок вы можете легко получить в любой момент, при соблюдении единственного условия. Ограничений на максимальный вывод нет.",
  },
  {
    title: "Развитие", 
    id: "6",
    text: "Постоянный рост количества кэшбек партнёров",
    tooltipTitle: "Постоянный рост количества кэшбек партнёров",
    tooltipText: "Высокие ставки, низкие комиссии и безграничность в покупках для пользователей — являются ключевыми факторами, которые позволяют непрерывно получать поток новых покупателей.",
  },
];


const Advantages = () => {
  return (
    <section className="advantages" id='advantages'>
      <div className="container">
        <h2 className="title title--center advantages__title">
          Преимущества покупок <br></br>
          <span>с Cashback Global</span>
        </h2>

        <div className="advantages__body-block">
          <ul className="advantages__list">
            {advantagesInfo.map((advantage) => (
              <AdvantageItem
                title={advantage.title}
                text={advantage.text}
                key={advantage.id}
                tooltipTitle={advantage.tooltipTitle}
                tooltipText={advantage.tooltipText}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
