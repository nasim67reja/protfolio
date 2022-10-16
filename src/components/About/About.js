import React, { useState } from "react";
import styles from "./About.module.css";

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
      {experience && (
        <div className={styles.aboutBox}>
          <div>
            <div className={styles.header}>
              <span>2007 - 2010</span>
              <h3>Education Quality</h3>
            </div>
            <div className={styles.aboutCol}>
              <div className={styles.line}></div>
              <div>
                <div className={styles.textbox}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi cum enim quam magni, voluptatibus aliquam quia
                  dolorum blanditiis eos, veniam sint ea reiciendis molestias!
                  Blanditiis ducimus velit labore repellat ut?
                </div>

                <div className={styles.textbox}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi cum enim quam magni, voluptatibus aliquam quia
                  dolorum blanditiis eos, veniam sint ea reiciendis molestias!
                  Blanditiis ducimus velit labore repellat ut?
                </div>
                <div className={styles.textbox}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi cum enim quam magni, voluptatibus aliquam quia
                  dolorum blanditiis eos, veniam sint ea reiciendis molestias!
                  Blanditiis ducimus velit labore repellat ut?
                </div>
              </div>
            </div>
          </div>
          {/* <div>2</div> */}
          {/*  */}
          <div>
            <div className={styles.header}>
              <span>2007 - 2010</span>
              <h3>Education Quality</h3>
            </div>
            <div className={styles.aboutCol}>
              <div className={styles.line}></div>
              <div>
                <div className={styles.textbox}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi cum enim quam magni, voluptatibus aliquam quia
                  dolorum blanditiis eos, veniam sint ea reiciendis molestias!
                  Blanditiis ducimus velit labore repellat ut?
                </div>

                <div className={styles.textbox}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi cum enim quam magni, voluptatibus aliquam quia
                  dolorum blanditiis eos, veniam sint ea reiciendis molestias!
                  Blanditiis ducimus velit labore repellat ut?
                </div>
                <div className={styles.textbox}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi cum enim quam magni, voluptatibus aliquam quia
                  dolorum blanditiis eos, veniam sint ea reiciendis molestias!
                  Blanditiis ducimus velit labore repellat ut?
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
