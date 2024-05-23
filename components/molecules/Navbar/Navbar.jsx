import React from "react";
import styles from "./Navbar.module.css";
import { navbarItems } from "../../../data/navbarItems";
import cookie from "js-cookie";

const Navbar = ({ isLoggedIn }) => {
  const logout = () => {
    cookie.remove("jwt_token");
    window.location.reload();
  };
  return (
    <nav className={styles.main}>
      <ul>
        {navbarItems.map((item) => {
          return (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          );
        })}
        {isLoggedIn ? (
          <li
            onClick={() => {
              logout();
            }}
          >
            Log Out
          </li>
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
  );
};

export default Navbar;
