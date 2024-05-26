import axios from "axios";

export const answerQuestion = async ({
  jwt_token,
  question_id,
  answerValue,
}) => {
  const body = { answer: answerValue };
  const headers = { Authorization: jwt_token };
  try {
    const response = await axios.post(
      `${process.env.SERVER_URL}/question/${question_id}/answer`,
      body,
      { headers: headers }
    );
    console.log("response: ", response);
  } catch (err) {
    console.error("error fetching username:", err);
    return "anonymous";
  }
};

export const likeUnlikeAnswer = async ({
  jwt_token,
  question_id,
  answer_id,
}) => {
  const headers = { Authorization: jwt_token };
  try {
    const response = await axios.put(
      `${process.env.SERVER_URL}/favorite/question/${question_id}/answer/${answer_id}`,
      {},
      { headers: headers }
    );
    console.log("response: ", response);
  } catch (err) {
    console.error("error fetching username:", err);
  }
};

export const deleteAnswer = async ({ jwt_token, question_id, answer_id }) => {
  const headers = { Authorization: jwt_token };
  try {
    const response = await axios.delete(
      `${process.env.SERVER_URL}/question/${question_id}/answer/${answer_id}`,
      { headers: headers }
    );
    console.log("response: ", response);
  } catch (err) {
    console.error("error fetching username:", err);
  }
};
export const deleteQuestion = async ({ jwt_token, question_id }) => {
  const headers = { Authorization: jwt_token };
  try {
    const response = await axios.delete(
      `${process.env.SERVER_URL}/question/${question_id}`,
      { headers: headers }
    );
    console.log("response: ", response);
  } catch (err) {
    console.error("error fetching username:", err);
  }
};
