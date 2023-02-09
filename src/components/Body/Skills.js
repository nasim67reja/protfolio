import { Fragment } from "react";

import styles from "./Skills.module.css";

//  Proficient
import Nodejs from "../../Images/Logo/nodejs.svg";
import Reactjs from "../../Images/Logo/reactjs.svg";
import Expressjs from "../../Images/Logo/expressjs.svg";
import Mongodb from "../../Images/Logo/mongodb.svg";
import JS from "../../Images/Logo/js.svg";
import CSS from "../../Images/Logo/css.svg";
import Html5 from "../../Images/Logo/html5.svg";
import Redux from "../../Images/Logo/redux.svg";

// comfortable
import Sass from "../../Images/Logo/sass.svg";
import typescript from "../../Images/Logo/typescript.svg";
import NextJs from "../../Images/Logo/nextjs.svg";
import tailwindcss from "../../Images/Logo/tailwindcss.svg";
import materialui from "../../Images/Logo/materialui.svg";
import firebase from "../../Images/Logo/firebase.svg";
import bootstrap from "../../Images/Logo/bootstrap.svg";

//  Tool
import Postman from "../../Images/Logo/postman.svg";
import Git from "../../Images/Logo/git.svg";
import Github from "../../Images/Logo/github.svg";
import Adobexd from "../../Images/Logo/adobexd.svg";
import Compass from "../../Images/Logo/compass.svg";
import Vscode from "../../Images/Logo/vscode.svg";

import useSkills from "./useSkills";

const Skills = () => {
  const proficientSkills = useSkills({
    Html5,
    CSS,
    JS,
    Reactjs,
    Tailwind: tailwindcss,
    Redux,
    Nodejs,
    Expressjs,
    Mongodb,
  });

  const comfortableSkills = useSkills({
    Material: materialui,
    firebase,
    bootstrap,
    Sass,
    typescript,
    NextJs,
  });

  const tools = useSkills({ Postman, Compass, Github, Git, Vscode, Adobexd });

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
