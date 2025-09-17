import React from 'react'
import styles from './OurTeam.module.css'

const OurTeam = () => {

 const team = [
  {
   image: '',
   name: 'John Smith',
   role: 'Frontend Developer',
   socials: {
    linkedin: '',
    twitter: '',
    github: ''
   }
  },
  {
   image: '',
   name: 'John Smith',
   role: 'Frontend Developer',
   socials: {
    linkedin: '',
    twitter: '',
    github: ''
   }
  },
  {
   image: '',
   name: 'John Smith',
   role: 'Frontend Developer',
   socials: {
    linkedin: '',
    twitter: '',
    github: ''
   }
  },
  
 ]

  return (
    <>
      <div className={styles.container}>
        <div>
          <h2>
            Our <span>team</span>
          </h2>
          <p>
            A common concern a visitor experiences is how well will the product
            or service be <br />
            supported. Introducing the team eases fears while showing
            confidence.
          </p>
        </div>

        <div>
          <div>
            {/* img  */}
            <div>
              <img src="" alt="developerIimage" />
            </div>

            {/* text  */}
            <p>Full Name</p>
            <p>Development Role</p>
            <div className={styles.socials}>
              <a href="/">
                <img src="src/assets/linkedin_icon.png" alt="linkedin" />
              </a>
              <a href="/">
                <img src="src/assets/x_icon.png" alt="twitter" />
              </a>
              <a href="/">
                <img src="src/assets/github_icon.png" alt="github" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurTeam