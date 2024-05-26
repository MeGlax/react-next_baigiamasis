import styles from "./CardTitle.module.css";
import Link from "next/link";
import cookies from "js-cookie";
import deleteImg from "../../../assets/delete.svg";
import { deleteQuestion } from "../../../api/question";
import Modal from "../../molecules/Modal/Modal";
import { useState } from "react";

const CardTitle = ({ title, question_id, asker_id, refreshQuestions }) => {
  const isQuestionYours = asker_id === cookies.get("user_id") ? true : false;
  const [isWarningShown, setWarningShown] = useState(false);

  const delete_question = async () => {
    const jwt_token = cookies.get("jwt_token");

    try {
      await deleteQuestion({ jwt_token, question_id });
      await refreshQuestions();
    } catch (err) {
      console.log("there was a problem deleting the answer");
    }
  };

  return (
    <div>
      <Link href={`question/${question_id}`}>{`${title} `}</Link>
      {isQuestionYours && (
        <img
          src={deleteImg.src}
          className={styles.deleteImg}
          onClick={() => {
            setWarningShown(true);
          }}
        />
      )}
      {isWarningShown && (
        <Modal
          message={"Are you sure you want to delete this"}
          onCancel={() => {
            setWarningShown(false);
          }}
          onConfirm={() => {
            delete_question();
          }}
        />
      )}
    </div>
  );
};

export default CardTitle;
