import { Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "./Info.module.css";

const Info = () => {
  return (
    <Fragment>
      <h1 className={styles["heading-primary"]}>
        Hi, I'm <span className={styles.name}>Nasim Reja</span>
      </h1>

      <h2 className={styles["heading-secondary"]}>
        a Full Stack web developer.
      </h2>
      <p className={styles.description}>
        <span className={styles.fingure}>👋</span> I'm Nasim Reja, a Full-stack
        web developer who can work with other developers and designers to
        maintain existing website code, create new designs from mockups, add new
        interactive features to existing sites and work with layouts. As a Full
        Stack Developer, I'm comfortable with front-end and back-end coding
        languages, development frameworks and third-party libraries.
      </p>
      <div className={styles.btnList}>
        <button className={styles.btn}>Download My CV</button>
        <Link to="/contact" className={styles.btn}>
          Contact Me
        </Link>
      </div>
    </Fragment>
  );
};

export default Info;
