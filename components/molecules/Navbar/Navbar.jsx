import React from "react";
import styles from "./Navbar.module.css";
import { navbarItemsNotLoggedIn } from "@/data/navbarItemsNotLoggedIn";

const Navbar = () => {
  return (
    <nav className={styles.main}>
      <ul>
        {navbarItemsNotLoggedIn.map((item) => {
          return (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
