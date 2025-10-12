import React from "react";
import styles from "./OurVision.module.css";
import targetIcon from "/src/assets/circular-target.png";
import thunderIcon from "/src/assets/thunder.png";
import folderIcon from "/src/assets/folder.png";
import supportIcon from "/src/assets/support.png";

const OurVision = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>
        Our <span>vision</span>
      </h2>
      <p className={styles.paragraph}>
        Our vision is to simplify and streamline the GitHub pull request
        workflow, making collaboration faster, clearer,
        <br /> and more efficient for developers and teams worldwide.
      </p>

      <div className={styles.cards}>
        <div className={styles.card}>
          <img className={styles.icon} src={targetIcon} alt="icon" />
          <div className={styles.text}>
            <h3 className={styles.card_title_1}>Accurate Tracking:</h3>
            <p className={styles.card_text}>
              Get precise and up-to-date insights on all your pull requests.
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <img className={styles.icon} src={thunderIcon} alt="icon" />
          <div className={styles.text}>
            <h3 className={styles.card_title_2}>Optimized Performance:</h3>
            <p className={styles.card_text}>
              Enjoy fast, seamless, and efficient data processing.
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <img className={styles.icon} src={folderIcon} alt="icon" />
          <div className={styles.text}>
            <h3 className={styles.card_title_3}>Smart Organization:</h3>
            <p className={styles.card_text}>
              Keep your pull requests structured and easy to manage.
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <img className={styles.icon} src={supportIcon} alt="icon" />
          <div className={styles.text}>
            <h3 className={styles.card_title_4}>Enhanced Control:</h3>
            <p className={styles.card_text}>
              Gain full visibility and control over your project data.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurVision;
