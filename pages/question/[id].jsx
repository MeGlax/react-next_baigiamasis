import React, { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import cookies from "js-cookie";
import { useState } from "react";
import MainTemplate from "../../components/templates/MainTemplate/MainTemplate";
import styles from "./styles.module.css";
import { getUsernameById } from "../../api/user";
import QuestionWrapper from "../../components/organisms/QuestionWrapper/QuestionWrapper";

const Index = () => {
  const router = useRouter();
  const [question, setQuestion] = useState();
  const [username, setUsername] = useState("uknown");
  const [questionDate, setQuestionDate] = useState();
  const question_id = router.query.id;
  const headers = {
    authorization: cookies.get("jwt_token"),
  };
  useEffect(() => {
    if (question) {
      const questionDateArr = question.date.split(" ");
      const newQuestionDate = `${questionDateArr[1]} ${questionDateArr[2]}, ${questionDateArr[3]}`;
      setQuestionDate(newQuestionDate);
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
      <QuestionWrapper
        question={question}
        username={username}
        questionDate={questionDate}
        question_id={question_id}
        refreshAnswers={refreshAnswers}
      />
    </MainTemplate>
  );
};

export default Index;
