import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Logo from "/src/assets/logo.png";

const Header = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.header}>
        <ul className={styles.ul}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/open-prs">Open PRs</Link>
          </li>
          <li>
            <Link to="/closed-prs">Closed PRs</Link>
          </li>
        </ul>
        <div>
          <img className={styles.logo} src={Logo} alt="logo" />
        </div>
      </nav>
    </div>
  );
};

export default Header;
