import styles from "./CardsWrapper.module.css";
import Card from "../../molecules/Card/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "../../atoms/Button/Button";

const CardsWrapper = () => {
  const [questions, setQuestions] = useState([]);
  const [unfilteredQuestions, setUnfilteredQuestions] = useState([]);
  const filterOnlyAnsweredQuestions = () => {
    setQuestions(
      unfilteredQuestions.filter((question) => {
        return question.answers.length > 0;
      })
    );
  };
  const filterOnlyUnansweredQuestions = () => {
    setQuestions(
      unfilteredQuestions.filter((question) => {
        return question.answers.length === 0;
      })
    );
  };
  const showAllQuestions = () => {
    setQuestions(unfilteredQuestions);
  };
  const fetchQuestions = async () => {
    try {
      const response = await axios.get(`${process.env.SERVER_URL}/questions`);
      setQuestions(response.data.questions);
      setUnfilteredQuestions(response.data.questions);
    } catch (err) {
      console.log("error:", err);
    }
  };
  useEffect(() => {
    fetchQuestions();
  }, []);
  const refreshQuestions = async () => {
    console.log("heelo");
    await fetchQuestions();
  };
  return (
    <div className={styles.main}>
      <div className={styles.filterOptions}>
        <p>filter:</p>
        <Button
          onPushed={() => {
            showAllQuestions();
          }}
          label={"show all"}
        />
        <Button
          onPushed={() => {
            filterOnlyAnsweredQuestions();
          }}
          label={"show only answered"}
        />
        <Button
          onPushed={() => {
            filterOnlyUnansweredQuestions();
          }}
          label={"show only unanswered"}
        />
      </div>
      {questions &&
        questions.map((question) => {
          return (
            <Card
              key={question.id}
              refreshQuestions={refreshQuestions}
              title={question.question_text}
              date={question.date}
              answersAmount={question.answers.length}
              asker_id={question.user_id}
              question_id={question.id}
            />
          );
        })}
    </div>
  );
};

export default CardsWrapper;
