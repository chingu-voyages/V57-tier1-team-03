import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <img className={styles.logo} src="src/assets/logo.png" alt="logo" />
        <div className={styles.chatbot_bg}>
          <img
            className={styles.chatbot}
            src="src/assets/WappGPT - logo.png"
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
