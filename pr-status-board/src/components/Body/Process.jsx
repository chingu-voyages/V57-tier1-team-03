import styles from "./Process.module.css";
import leftImg from "../../assets/DarkChart.png";
import iconImg from "../../assets/Content.png";
import lastIcon from "../../assets/Relume.png";

export default function ProcessSection() {
  const items = [
    {
      action: "Action",
      goal: "Goal One",
      summary: "Connect Your Repository",
      description:
        "Securely link your GitHub account and choose the repository you want to track.",
    },
    {
      action: "Action",
      goal: "Goal Two",
      summary: "Fetch Open Pull Requests",
      description:
        "Quickly load all active PRs into a clean and organized dashboard.",
    },
    {
      action: "Action",
      goal: "Goal Three",
      summary: "Track PR Details",
      description:
        "View who created the PR, assigned reviewers, and the latest activity in real time.",
    },
    {
      action: "Step",
      goal: "Goal Four",
      summary: "Save Locally for Testing",
      description:
        "Store pull request data directly in your browser so you can continue working even offline.",
    },
    {
      action: "Action",
      goal: "Goal Five",
      summary: "Stay Updated Effortlessly",
      description:
        "Monitor both open and closed PRs with clear timelines and simple navigation.",
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
              <div className={styles.textContent}>
                <p className={styles.goal}>
                  {item.action} • {item.goal}
                </p>
                <h3 className={styles.summary}>{item.summary}</h3>
                <p className={styles.description}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
