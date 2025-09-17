import styles from "./Body.module.css";
import leftImg from "../../assets/DarkChart.png";
import iconImg from "../../assets/Content.png";
import lastIcon from "../../assets/Relume.png";

export default function BodySection() {
  const items = [
    {
      goal: "Goal one",
      summary: "Summary of goal one",
    },
    {
      goal: "Goal two",
      summary: "Summary of goal two",
    },
    {
      goal: "Goal three",
      summary: "Summary of goal three",
    },
    {
      goal: "Goal four",
      summary: "Summary of goal four",
    },
    {
      goal: "Goal five",
      summary: "Summary of goal five",
    },
  ];
  return (
    <section className={styles.body}>
      <div className={styles.container}>
        {/* Left side */}
        <div className={styles.left}>
          <p className={styles.eyebrow}>Our Story</p>
          <h2 className={styles.heading}>
            Simplify Your <span className={styles.highlight}>GitHub</span> PR
            Process in 5 Easy Steps
          </h2>

          {/* Chart Card */}
          <div className={styles.chartCard}>
            <img src={leftImg} alt="PR Chart" className={styles.chartImage} />
            <p className={styles.subtext}>
              Monitor your pull requests effortlessly and keep your data
              organized
            </p>
          </div>
        </div>

        {/* Right side: Process Steps */}
        <div className={styles.right}>
          {items.map((item, index) => (
            <div key={index} className={styles.step}>
              <div className={styles.icon}>
                <img
                  src={index === items.length - 1 ? lastIcon : iconImg}
                  alt="step"
                />
              </div>
              <div>
                <p className={styles.goal}>Process • {item.goal}</p>
                <h3 className={styles.summary}>{item.summary}</h3>
                <p className={styles.description}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
