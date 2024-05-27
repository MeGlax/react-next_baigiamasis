import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { navbarItems } from "../../../data/navbarItems";
import cookie from "js-cookie";
import { getUsernameById } from "../../../api/user";
import { useEffect } from "react";
import burgerMenuIcon from "../../../assets/burger.svg";

const Navbar = ({ isLoggedIn }) => {
  const [username, setUsername] = useState();
  const [isBurgerMenuShown, setBurgerMenuShown] = useState(false);
  const logout = (burgerMenuIcon) => {
    cookie.remove("jwt_token");
    window.location.reload();
  };
  useEffect(() => {
    const fetchUsername = async () => {
      const fetchedUsername = await getUsernameById(cookie.get("user_id"));
      setUsername(fetchedUsername);
    };
    fetchUsername();
  }, []);
  return (
    <>
      <nav className={styles.desktopMain}>
        <ul>
          {navbarItems.map((item) => {
            return (
              <li key={item.id}>
                <a href={item.link}>{item.title}</a>
              </li>
            );
          })}
          {isLoggedIn ? (
            <>
              <li className={styles.user}>{username}</li>
              <li
                onClick={() => {
                  logout();
                }}
              >
                Log Out
              </li>
            </>
          ) : (
            <>
              <li>
                <a href="/register">Register</a>
              </li>
              <li>
                <a href="/login">Log in</a>
              </li>
            </>
          )}
        </ul>
      </nav>
      <img
        src={burgerMenuIcon.src}
        alt=""
        className={styles.burgerIcon}
        onClick={() => {
          setBurgerMenuShown(!isBurgerMenuShown);
        }}
      />

      <nav
        className={`${styles.mobileMain} ${
          isBurgerMenuShown ? styles.mobileMainOpened : ""
        }`}
      >
        <ul>
          {navbarItems.map((item) => {
            return (
              <li key={item.id}>
                <a href={item.link}>{item.title}</a>
              </li>
            );
          })}
          {isLoggedIn ? (
            <>
              <li className={styles.user}>{username}</li>
              <li
                onClick={() => {
                  logout();
                }}
                className={styles.pointer}
              >
                Log Out
              </li>
            </>
          ) : (
            <>
              <li>
                <a href="/register">Register</a>
              </li>
              <li>
                <a href="/login">Log in</a>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
