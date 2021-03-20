import React from "react";

const FAQItem = (props) => {
  const { isAnswerOpen, setOpenedAnswerId } = props;

  return (
    <li className="faq__item">
      <h3
        className="faq__item-title title--subtitle title"
        data-open-status={isAnswerOpen}
        onClick={() => setOpenedAnswerId(isAnswerOpen
          ? null
          : props.ask
        )}
      >
        <div className="faq__icon"></div>

        {props.ask}
      </h3>

      <div className="faq__text-wrap">{props.children}</div>
    </li>
  );
};

export default FAQItem;
