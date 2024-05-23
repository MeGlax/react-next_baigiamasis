import React from "react";
import styles from "./Header.module.css";
import Navbar from "../../molecules/Navbar/Navbar";
import Logo from "../../atoms/HeaderLogo/HeaderLogo";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
