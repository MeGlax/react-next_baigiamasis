import React from "react";
import styles from "./CardDetails.module.css";

const CardDetails = ({ date, answersAmount, asker_id }) => {
  return (
    <div className={styles.main}>
      <p>
        <span>{asker_id}</span> {date}
      </p>
      <p>answers: {answersAmount}</p>
    </div>
  );
};

export default CardDetails;
