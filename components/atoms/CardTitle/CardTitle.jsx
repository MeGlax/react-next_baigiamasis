import styles from "./CardTitle.module.css";
import Link from "next/link";
import cookies from "js-cookie";
import deleteImg from "../../../assets/delete.svg";
import { deleteQuestion } from "../../../api/question";

const CardTitle = ({ title, question_id, asker_id, refreshQuestions }) => {
  const isQuestionYours = asker_id === cookies.get("user_id") ? true : false;

  const delete_question = async () => {
    const jwt_token = cookies.get("jwt_token");
    refreshQuestions();
    try {
      await deleteQuestion({ jwt_token, question_id });
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
            delete_question();
          }}
        />
      )}
    </div>
  );
};

export default CardTitle;
