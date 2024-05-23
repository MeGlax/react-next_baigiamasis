import axios from "axios";

export const getUsernameById = async (asker_id) => {
  try {
    const response = await axios.get(
      `${process.env.SERVER_URL}/user/${asker_id}`
    );
    return response.data.username;
  } catch (err) {
    console.error("error fetching username:", err);
    return "anonymous";
  }
};
