import React from 'react'
import styles from './OurVision.module.css'

const OurVision = () => {


  return (
    <>
      <div className={styles.container}>
        <p className={styles.paragraph}>
          Our vision is to simplify and streamline the GitHub pull request
          workflow, making collaboration faster, clearer,<br/> and more efficient for
          developers and teams worldwide.
        </p>

        <div className={styles.cards}>
          <div className={styles.card}>
            <img
              className={styles.icon}
              src="src/assets/circular-target.png"
              alt="icon"
            />
            <div className={styles.text}>
              <h3 className={styles.card_title_1}>Accurate Tracking:</h3>
              <p className={styles.card_text}>
                Get precise and up-to-date insights on all your pull requests.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <img
              className={styles.icon}
              src="src/assets/thunder.png"
              alt="icon"
            />
            <div className={styles.text}>
              <h3 className={styles.card_title_2}>Optimized Performance :</h3>
              <p className={styles.card_text}>
                Enjoy fast, seamless, and efficient data processing.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <img
              className={styles.icon}
              src="src/assets/folder.png"
              alt="icon"
            />
            <div className={styles.text}>
              <h3 className={styles.card_title_3}>Smart Organization:</h3>
              <p className={styles.card_text}>
                Keep your pull requests structured and easy to manage.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <img
              className={styles.icon}
              src="src/assets/support.png"
              alt="icon"
            />
            <div className={styles.text}>
              <h3 className={styles.card_title_4}>Enhanced Control:</h3>
              <p className={styles.card_text}>
                Gain full visibility and control over your project data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurVision