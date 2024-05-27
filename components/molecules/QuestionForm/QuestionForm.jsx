import React from "react";
import Button from "../../atoms/Button/Button";
import styles from "./QuestionForm.module.css";
import { useState } from "react";
import cookies from "js-cookie";
import axios from "axios";
import { useRouter } from "next/router";

const QuestionForm = () => {
  const router = useRouter();
  const [statusText, setStatusText] = useState("");
  const [question, setQuestion] = useState("");
  const createQuestion = async () => {
    if (question === "") {
      setStatusText("Please fill in the question before asking");
      return;
    }
    try {
      const headers = {
        authorization: cookies.get("jwt_token"),
      };
      console.log(headers);
      const body = {
        question_text: question,
      };
      const response = await axios.post(
        `${process.env.SERVER_URL}/question`,
        body,
        { headers }
      );
      if (response.status === 201) {
        setStatusText(
          "Posted successfully. You'll be redirected to main page in 3s"
        );
        router.push("/");
      }
    } catch (err) {
      setStatusText("please log in before asking");
      console.log("error:", err);
    }
  };
  return (
    <div className={styles.main}>
      <p>Ask a question</p>
      <textarea
        type="text"
        placeholder="Write your question here"
        onChange={(event) => {
          setQuestion(event.target.value);
        }}
      />
      <Button
        label="submit"
        onPushed={() => {
          createQuestion();
        }}
      />
      <p className={styles.statusText}>{statusText}</p>
    </div>
  );
};

export default QuestionForm;
