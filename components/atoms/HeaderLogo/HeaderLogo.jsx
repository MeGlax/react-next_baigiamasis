import React from "react";
import styles from "./HeaderLogo.module.css";

const Logo = () => {
  return (
    <div className={styles.main}>
      <a href="/">
        <p>Pliurpalinis</p>
      </a>
    </div>
  );
};

export default Logo;
