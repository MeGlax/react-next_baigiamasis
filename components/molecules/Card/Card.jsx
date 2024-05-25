import React from "react";
import styles from "./Card.module.css";
import CardTitle from "../../atoms/CardTitle/CardTitle";
import CardDetails from "../../atoms/CardDetails/CardDetails";

const Card = ({ title, date, answersAmount, asker_id, question_id }) => {
  return (
    <div className={styles.main}>
      <CardTitle title={title} question_id={question_id} />
      <CardDetails
        date={date}
        answersAmount={answersAmount}
        asker_id={asker_id}
      />
    </div>
  );
};

export default Card;
