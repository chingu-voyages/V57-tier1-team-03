import React from "react";
import styles from "./OurTeam.module.css";
import Dev1 from '/src/assets/Dev 1.jpeg'
import Dev2 from '/src/assets/Dev 2.jpeg'
import Dev3 from '/src/assets/Dev 3.png'
import Linkedin from "/src/assets/linkedin_icon.png"
import X from "/src/assets/x_icon.png"
import Github from "/src/assets/github_icon.png"

const OurTeam = () => {
  const ourTeam = [
    {
      image: Dev1,
      name: "Tiffany Nebo",
      role: "Backend Developer",
      socials: {
        linkedin: "https://www.linkedin.com/in/tiffany-ugwunebo-1a59372a6/",
        twitter: "https://x.com/_Xsoldier",
        github: "https://github.com/Ahny678",
      },
    },
    {
      image: Dev2,
      name: "Eleazer Abbey",
      role: "Frontend Developer",
      socials: {
        linkedin: "https://www.linkedin.com/in/eleazer-abbey-19b42b2a3/",
        twitter: "https://x.com/Abbey_Eleazer",
        github: "https://github.com/abbey-eleazer",
      },
    },
    {
      image: Dev3,
      name: "Nikola Kojevic",
      role: "Frontend Developer",
      socials: {
        linkedin: "https://www.linkedin.com/in/nikola-kojevic-30a98a121/",
        twitter: "",
        github: "https://github.com/n-kojevic",
      },
    },
  ];

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Our <span>team</span>
        </h2>
        <p className={styles.paragraph}>
          A common concern a visitor experiences is how well will the product or
          service be <br />
          supported. Introducing the team eases fears while showing confidence.
        </p>

        <div className={styles.cards}>
          {ourTeam.map((teamMember) => (
            <div className={styles.card}>
              {/* img  */}
              <div className={styles.image_container}>
                <img
                  className={styles.picture}
                  src={teamMember.image}
                  alt="developer-image"
                />
              </div>

              {/* text  */}
              <div className={styles.card_text}>
                <h4>{teamMember.name}</h4>
                <p>{teamMember.role}</p>
                <div className={styles.socials}>
                  <a href={teamMember.socials.linkedin}>
                    <img
                      src={Linkedin}
                      alt="linkedin"
                    />
                  </a>
                  <a href={teamMember.socials.twitter}>
                    <img src={X} alt="twitter" />
                  </a>
                  <a href={teamMember.socials.github}>
                    <img src={Github} alt="github" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurTeam;
