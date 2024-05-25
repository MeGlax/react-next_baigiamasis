import React, { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import cookies from "js-cookie";
import { useState } from "react";
import MainTemplate from "../../components/templates/MainTemplate/MainTemplate";
import styles from "./styles.module.css";
import AnswerCard from "../../components/atoms/AnswerCard/AnswerCard";
import AnswerForm from "../../components/molecules/AnswerForm/AnswerForm";
import { getUsernameById } from "../../api/user";

const Index = () => {
  const router = useRouter();
  const [question, setQuestion] = useState();
  const [username, setUsername] = useState("uknown");
  const [questionDate, setQuestiondate] = useState();
  const question_id = router.query.id;
  const headers = {
    authorization: cookies.get("jwt_token"),
  };
  useEffect(() => {
    if (question) {
      const questionDateArr = question.date.split(" ");
      const newQuestionDate = `${questionDateArr[1]} ${questionDateArr[2]}, ${questionDateArr[3]}`;
      setQuestiondate(newQuestionDate);
      const fetchUsername = async () => {
        const fetchedUsername = await getUsernameById(question.user_id);
        setUsername(fetchedUsername);
      };
      fetchUsername();
    }
  }, [question]);
  const fetchQuestion = async () => {
    try {
      const response = await axios.get(
        `${process.env.SERVER_URL}/question/${question_id}`,
        { headers }
      );
      console.log(response.data.question);
      setQuestion(response.data.question);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    router.query.id && fetchQuestion();
  }, [router]);

  const refreshAnswers = async () => {
    await fetchQuestion();
  };

  return (
    <MainTemplate>
      {question && (
        <div className={styles.main}>
          <div className={styles.questionWrapper}>
            <p>{question.question_text}</p>
          </div>
          <div className={styles.questionDetailsWrapper}>
            <p>Question by: {username}</p>
            <p>Question asked: {questionDate}</p>
          </div>
          <div className={styles.answersWrapper}>
            {question.answers.map((answer) => {
              return (
                <AnswerCard
                  user_id={answer.user_id}
                  answer_id={answer.id}
                  answer={answer.answer}
                  answer_likes={answer.liked_by}
                  question_id={question_id}
                  answer_date={answer.date}
                  refreshAnswers={refreshAnswers}
                  key={answer.id}
                />
              );
            })}
            <AnswerForm
              question_id={question.id}
              refreshAnswers={refreshAnswers}
            />
          </div>
        </div>
      )}
    </MainTemplate>
  );
};

export default Index;
