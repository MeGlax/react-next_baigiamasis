import styles from "./CardsWrapper.module.css";
import Card from "../../molecules/Card/Card";
import { useEffect, useState } from "react";
import axios from "axios";

const CardsWrapper = () => {
  const [questions, setQuestions] = useState();
  const fetchQuestions = async () => {
    try {
      const response = await axios.get(`${process.env.SERVER_URL}/questions`);
      setQuestions(response.data.questions);
    } catch (err) {
      console.log("error:", err);
    }
  };
  useEffect(() => {
    fetchQuestions();
  }, []);
  return (
    <div className={styles.main}>
      {questions &&
        questions.map((question) => {
          return (
            <Card
              key={question.id}
              title={question.question_text}
              date={question.date}
              answersAmount={question.answers.length}
              asker_id={question.user_id}
            />
          );
        })}
    </div>
  );
};

export default CardsWrapper;
// import React from "react";

// const CardsWrapper = () => {
//   return <div>CardsWrapper</div>;
// };

// export default CardsWrapper;
