import { Fragment } from "react";

import styles from "./Skills.module.css";

//  Proficient
import nodejs from "../../Images/Logo/nodejs.svg";
import reactjs from "../../Images/Logo/reactjs.svg";
import expressjs from "../../Images/Logo/expressjs.svg";
import mongodb from "../../Images/Logo/mongodb.svg";
import js from "../../Images/Logo/js.svg";
import css from "../../Images/Logo/css.svg";
import html5 from "../../Images/Logo/html5.svg";
import redux from "../../Images/Logo/redux.svg";

// comfortable
import sass from "../../Images/Logo/sass.svg";
import typescript from "../../Images/Logo/typescript.svg";
import nextjs from "../../Images/Logo/nextjs.svg";
import tailwindcss from "../../Images/Logo/tailwindcss.svg";
import materialui from "../../Images/Logo/materialui.svg";

//  Tool
import postman from "../../Images/Logo/postman.svg";
import git from "../../Images/Logo/git.svg";
import github from "../../Images/Logo/github.svg";
import adobexd from "../../Images/Logo/adobexd.svg";
import compass from "../../Images/Logo/compass.svg";
import vscode from "../../Images/Logo/vscode.svg";

import useSkills from "./useSkills";

const Skills = () => {
  const proficientSkills = useSkills(
    nodejs,
    reactjs,
    expressjs,
    mongodb,
    redux,
    js,
    css,
    html5
  );

  const comfortableSkills = useSkills(
    typescript,
    nextjs,
    tailwindcss,
    materialui,
    sass
  );

  const tools = useSkills(postman, compass, github, git, vscode, adobexd);

  return (
    <Fragment>
      <h2 className={styles["heading-secondary"]}>About My Skill</h2>
      <div>
        <h4>Proficient </h4>
        {proficientSkills}
        <h4>Comportable</h4>
        {comfortableSkills}
        <h4>Tools</h4>
        {tools}
      </div>
    </Fragment>
  );
};

export default Skills;

// className={styles.logoBox}
