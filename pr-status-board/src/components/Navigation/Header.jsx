import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import Logo from "/src/assets/logo.png";

const Header = () => {

  return (
    <>
      <div className={styles.container}>
        <nav className={styles.header}>
          <ul className={styles.ul}>
            <li className={styles.link}>
              <NavLink to="/">Home</NavLink>
            </li>
            <li className={styles.link}>
              <NavLink to="/open-prs">Open PRs</NavLink>
            </li>
            <li className={styles.link}>
              <NavLink to="/closed-prs">Closed PRs</NavLink>
            </li>
          </ul>
            <img className={styles.logo} src={Logo} alt="logo" />
        </nav>
      </div>
    </>
  );
};

export default Header;
