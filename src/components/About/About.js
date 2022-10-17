import React, { useState } from "react";
import styles from "./About.module.css";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

const About = () => {
  const [skillBox, setSkillBox] = useState(true);
  const [experience, setExperience] = useState(false);
  const [education, setEducation] = useState(false);

  return (
    <div className="container">
      <div className={styles.header}>
        <span>7+ years of experience</span>
        <h2>My Resume</h2>
      </div>
      <ul className={styles.btnlist}>
        <li>
          <button
            className={skillBox ? styles.active : null}
            onClick={() => {
              setSkillBox(true);
              setExperience(false);
              setEducation(false);
            }}
          >
            Professional Skills
          </button>
        </li>
        <li>
          <button
            className={experience ? styles.active : null}
            onClick={() => {
              setSkillBox(false);
              setExperience(true);
              setEducation(false);
            }}
          >
            Experience
          </button>
        </li>
        <li>
          <button
            className={education ? styles.active : null}
            onClick={() => {
              setSkillBox(false);
              setExperience(false);
              setEducation(true);
            }}
          >
            Education
          </button>
        </li>
      </ul>
      {skillBox && <Skills />}
      {experience && <Experience />}
      {education && <Education />}
    </div>
  );
};

export default About;
