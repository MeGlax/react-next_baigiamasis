import styles from "./QuestionWrapper.module.css";
import AnswerCard from "../../atoms/AnswerCard/AnswerCard";
import AnswerForm from "../../molecules/AnswerForm/AnswerForm";

const QuestionWrapper = ({
  question,
  username,
  questionDate,
  question_id,
  refreshAnswers,
}) => {
  return (
    <>
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
    </>
  );
};

export default QuestionWrapper;
