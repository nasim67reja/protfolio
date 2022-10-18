import React from "react";
import styles from "./Skills.module.css";

const Progress = ({ h6, percentage }) => {
  return (
    <div className={styles.progressBar}>
      <h6>{h6}</h6>
      <div className={styles.progress}>
        <div style={{ width: percentage }}></div>
        <span>{percentage}</span>
      </div>
    </div>
  );
};

const skills = [
  [
    {
      name: "ReactJs",
      percentage: "90%",
    },
    {
      name: "Javascript",
      percentage: "95%",
    },
    {
      name: "Redux",
      percentage: "96%",
    },
    {
      name: "Html5",
      percentage: "85%",
    },
    {
      name: "Css3",
      percentage: "90%",
    },
    {
      name: "Saas",
      percentage: "65%",
    },
    {
      name: "TailwindCss",
      percentage: "87%",
    },
    {
      name: "NodeJs",
      percentage: "70%",
    },
    {
      name: "ExpressJs",
      percentage: "77%",
    },
    {
      name: "MongoDb",
      percentage: "65%",
    },
    {
      name: "Material-Ui",
      percentage: "55%",
    },
    {
      name: "Bootstrap",
      percentage: "45%",
    },
  ],
  [
    {
      name: "Git",
      percentage: "80%",
    },
    {
      name: "VsCode",
      percentage: "90%",
    },
    {
      name: "Github",
      percentage: "85%",
    },
    {
      name: "Postman",
      percentage: "70%",
    },
    {
      name: "AdobeXd",
      percentage: "55%",
    },
    {
      name: "Chrome dev tools",
      percentage: "70%",
    },
  ],
];

const Proficient = ({ Header, element }) => {
  return (
    <div>
      <h4 className={styles.boxHeader}>{Header}</h4>
      <div>
        {element.map((skill, i) => (
          <Progress key={i} h6={skill.name} percentage={skill.percentage} />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className={styles.box}>
      <div>
        <Proficient Header="Devlopment Skill" element={skills[0]} />
      </div>
      <div>
        <Proficient Header="Tools" element={skills[1]} />
      </div>
    </div>
  );
};

export default Skills;
