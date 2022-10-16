import React, { useState } from "react";
import styles from "./About.module.css";
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
      {experience && (
        <div className={styles.box}>
          <div>
            <div className={styles.header}>
              <span>2021 - Continue</span>
              <h3>Education Quality</h3>
            </div>
            <div className={styles.aboutCol}>
              <div className={styles.line}></div>
              <div>
                <div className={styles.textbox}>
                  <h4>
                    <a
                      className={styles.courseLink}
                      href="https://www.udemy.com/course/the-complete-javascript-course/"
                    >
                      The Complete JavaScript Course 2022: From Zero to Expert!
                    </a>
                    <a
                      className={styles.credentials}
                      target="_blank"
                      rel="noreferrer"
                      href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-65b54292-3901-48eb-9557-052b1512526d.pdf"
                    >
                      Show Credentials
                      <ion-icon name="open-outline"></ion-icon>
                    </a>
                  </h4>
                  <span>at udemy (03/2021 - 08/2022)</span>
                  <h5>Achievement</h5>
                  <ul>
                    <li>
                      Learnt the core concept of Javascript like variables,
                      if/else, operators, boolean logic, functions, arrays,
                      objects, loops, strings, etc.
                    </li>
                    <li>
                      Learnt the Asynchronous Javascript and Modern tools for
                      2022 and beyond: NPM, Parcel, Babel and ES6 modules .
                    </li>
                  </ul>
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
