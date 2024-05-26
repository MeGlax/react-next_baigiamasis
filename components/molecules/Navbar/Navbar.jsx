import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { navbarItems } from "../../../data/navbarItems";
import cookie from "js-cookie";
import { getUsernameById } from "../../../api/user";
import { useEffect } from "react";

const Navbar = ({ isLoggedIn }) => {
  const [username, setUsername] = useState();
  const logout = () => {
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
          <>
            <li>{username}</li>
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
  );
};

export default Navbar;
