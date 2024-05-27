import { getUsernameById } from "../../../api/user";
import styles from "./AnswerCard.module.css";
import { useEffect, useState } from "react";
import cookies from "js-cookie";
import upVoteActiveImage from "../../../assets/upVoteActive.svg";
import upVotePassiveImage from "../../../assets/upVotePassive.svg";
import { likeUnlikeAnswer } from "../../../api/question";
import deleteImg from "../../../assets/delete.svg";
import { deleteAnswer } from "../../../api/question";
import Modal from "../../molecules/Modal/Modal";

const AnswerCard = ({
  user_id,
  answer_id,
  answer,
  answer_likes,
  answer_date,
  question_id,
  refreshAnswers,
}) => {
  const [username, setUsername] = useState("anonymous");
  const [isAnswerLiked, setAnswerLiked] = useState(false);
  const isAnswerYours = user_id === cookies.get("user_id") ? true : false;
  const [isWarningShown, setWarningShown] = useState(false);

  const delete_answer = async () => {
    const jwt_token = cookies.get("jwt_token");
    try {
      await deleteAnswer({ jwt_token, question_id, answer_id });
      refreshAnswers();
    } catch (err) {
      console.log("there was a problem deleting the answer");
    }
  };
  const likeUnlike = async () => {
    const jwt_token = cookies.get("jwt_token");
    try {
      await likeUnlikeAnswer({ jwt_token, question_id, answer_id });
      refreshAnswers();
    } catch (err) {
      console.log("there was a problem changing answer like state");
    }
  };

  useEffect(() => {
    const isLiked = answer_likes.some((answer) => {
      return answer === cookies.get("user_id");
    });
    setAnswerLiked(isLiked);
  }, [answer_likes]);
  useEffect(() => {
    const fetchUsername = async () => {
      const fetchedUsername = await getUsernameById(user_id);
      setUsername(fetchedUsername);
    };
    fetchUsername();
  }, [user_id]);
  return (
    <div className={styles.answerWrapper}>
      <div className={styles.answerLeft}>
        <p className={styles.username}>
          {`${username}: `}
          {isAnswerYours && (
            <img
              src={deleteImg.src}
              className={styles.deleteImg}
              onClick={() => {
                setWarningShown(true);
              }}
            />
          )}
        </p>
        <p>{answer}</p>
      </div>
      <div className={styles.answerRight}>
        <p>{answer_date.slice(0, 10)}</p>
        <div className={styles.answerLikes}>
          <p>likes: {answer_likes.length}</p>
          <img
            src={isAnswerLiked ? upVoteActiveImage.src : upVotePassiveImage.src}
            alt=""
            className={styles.likeDislike}
            onClick={() => {
              likeUnlike();
            }}
          />
        </div>
      </div>
      {isWarningShown && (
        <Modal
          message={"Are you sure you want to delete this?"}
          onCancel={() => {
            setWarningShown(false);
          }}
          onConfirm={() => {
            delete_answer();
          }}
        />
      )}
    </div>
  );
};

export default AnswerCard;
