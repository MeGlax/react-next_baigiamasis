import React from "react";
import styles from "./Card.module.css";
import CardTitle from "../../atoms/CardTitle/CardTitle";
import CardDetails from "../../atoms/CardDetails/CardDetails";

const Card = ({
  title,
  date,
  answersAmount,
  asker_id,
  question_id,
  refreshQuestions,
}) => {
  return (
    <div className={styles.main}>
      <CardTitle
        title={title}
        question_id={question_id}
        asker_id={asker_id}
        refreshQuestions={refreshQuestions}
      />
      <CardDetails
        date={date}
        answersAmount={answersAmount}
        asker_id={asker_id}
      />
    </div>
  );
};

export default Card;
