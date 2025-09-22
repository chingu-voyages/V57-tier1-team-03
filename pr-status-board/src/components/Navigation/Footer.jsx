import React from "react";
import styles from "./Footer.module.css";
import Bot from "/src/assets/WappGPT - logo.png";
import Logo from "/src/assets/logo.png";


const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <img className={styles.logo} src={Logo} alt="logo" />
        <div className={styles.chatbot_bg}>
          <img
            className={styles.chatbot}
            src={Bot}
            alt="chat-bot"
          />
        </div>
      </div>
      <div className={styles.copy}>
        <p>&copy;2025 All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
