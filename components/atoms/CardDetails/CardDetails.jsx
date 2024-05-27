import { useState, useEffect } from "react";
import styles from "./CardDetails.module.css";
import { getUsernameById } from "../../../api/user";

const CardDetails = ({ date, answersAmount, asker_id }) => {
  // apkarpau datą
  const dateArray = date.split(" ");
  const newDate = `${dateArray[1]} ${dateArray[2]}, ${dateArray[3]}`;
  //
  // gautą id įdedu į funkciją, kuri par'fetch'ina ir return'ina username'ą, kurį set'inu ir panaudoju kortelėje
  const [username, setUsername] = useState("anonymous");
  useEffect(() => {
    const fetchUsername = async () => {
      const fetchedUsername = await getUsernameById(asker_id);
      setUsername(fetchedUsername);
    };
    fetchUsername();
  }, [asker_id]);
  //
  return (
    <div className={styles.main}>
      <p>
        <span>{username}</span> {newDate}
      </p>
      <p>answers: {answersAmount}</p>
    </div>
  );
};

export default CardDetails;
