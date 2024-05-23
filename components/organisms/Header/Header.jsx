import React from "react";
import styles from "./Header.module.css";
import Navbar from "../../molecules/Navbar/Navbar";
import Logo from "../../atoms/HeaderLogo/HeaderLogo";
import cookies from "js-cookie";
import axios from "axios";
import { useState, useEffect } from "react";

const Header = () => {
  const [isUserSignedIn, setUserSignedIn] = useState(false);
  const validateToken = async () => {
    try {
      const headers = {
        authorization: cookies.get("jwt_token"),
      };
      const response = await axios.get(
        `${process.env.SERVER_URL}/tokenValidation`,
        { headers }
      );
      if (response.status === 200) {
        setUserSignedIn(true);
      }
    } catch (err) {
      console.log("error:", err);
    }
  };
  useEffect(() => {
    validateToken();
  }, [cookies.get("jwt_token")]);
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <Navbar isLoggedIn={isUserSignedIn} />
      </div>
    </header>
  );
};

export default Header;
