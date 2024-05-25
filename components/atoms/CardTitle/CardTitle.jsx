import styles from "./CardTitle.module.css";
import Link from "next/link";

const CardTitle = ({ title, question_id }) => {
  return (
    <div>
      <Link href={`question/${question_id}`}>{title}</Link>
    </div>
  );
};

export default CardTitle;
