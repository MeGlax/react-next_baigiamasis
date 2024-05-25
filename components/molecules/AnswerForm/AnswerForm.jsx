import styles from "./AnswerForm.module.css";
import Button from "../../atoms/Button/Button";
import { useState, useEffect } from "react";
import { answerQuestion } from "../../../api/question";
import cookies from "js-cookie";

const AnswerForm = ({ question_id, refreshAnswers }) => {
  const [answerValue, setAnswerValue] = useState();
  const jwt_token = cookies.get("jwt_token");
  const submitAnswer = async () => {
    try {
      await answerQuestion({ jwt_token, question_id, answerValue });
      setAnswerValue("");
      refreshAnswers();
    } catch (err) {
      console.log("there was a problem posting answer.");
    }
  };
  return (
    <div className={styles.replyWrapper}>
      <div className={styles.replyLeft}>
        <p>reply:</p>
        <Button onClick={submitAnswer} label={"post"} />
      </div>
      <div className={styles.replyRight}>
        <textarea
          name=""
          id=""
          rows="5"
          value={answerValue}
          onChange={(event) => {
            setAnswerValue(event.target.value);
          }}
        ></textarea>
      </div>
    </div>
  );
};

export default AnswerForm;
