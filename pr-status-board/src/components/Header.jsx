import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.header}>
        <ul className={styles.ul}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/open-pr">Open PRs</a>
          </li>
          <li>
            <a href="/closed-pr">Closed PRs</a>
          </li>
        </ul>
        <div>
          <img className={styles.logo} src="src/assets/logo.png" alt="logo" />
        </div>
      </nav>
    </div>
  );
};

export default Header;
