import styles from "./Hero.module.css";
import Illustration5 from "../assets/Illustration5.png";
import Illustration6 from "../assets/Illustration6.png";
import Illustration3 from "../assets/Illustration3.png";
import Illustration1 from "../assets/Illustration1.png";
import Illustration2 from "../assets/Illustration2.png";
export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* Left stats card  */}
        <img
          src={Illustration5}
          alt="GitHub PR Stats"
          className={styles.statsCard}
        />

        {/* Hero Text */}
        <div className={styles.textBlock}>
          <h1 className={styles.heading}>
            Track and Manage Your GitHub{" "}
            <span className={styles.highlight}>Pull Requests</span> Effortlessly
          </h1>
          <p className={styles.subtext}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla.
          </p>
        </div>

        {/* Right tracker image */}
        <img
          src={Illustration6}
          alt="PR Tracker"
          className={styles.trackerCard}
        />
      </div>

      {/* Bottom Cards */}
      <div className={styles.cards}>
        <img
          src={Illustration3}
          alt="Create Pull Request"
          className={styles.card}
        />
        <img src={Illustration1} alt="Add Feature" className={styles.card} />
        <img src={Illustration2} alt="Fix Bug" className={styles.card} />
      </div>
    </section>
  );
}
