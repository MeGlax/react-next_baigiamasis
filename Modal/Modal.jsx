import styles from "./Modal.module.css";
import Button from "../components/atoms/Button/Button";

const Modal = ({ message, onConfirm, onCancel }) => {
  return (
    <>
      <div className={styles.main}>
        <h4>{message}</h4>
        <div className={styles.buttons}>
          <Button label="yes" onPushed={onConfirm} />
          <Button label="no cancel" onPushed={onCancel} />
        </div>
      </div>
      <div className={styles.background}></div>
    </>
  );
};

export default Modal;
