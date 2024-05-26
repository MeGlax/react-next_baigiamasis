import React from "react";
import styles from "./Button.module.css";

const Button = ({ onPushed, label }) => {
  return <button onClick={onPushed}>{label}</button>;
};

export default Button;
