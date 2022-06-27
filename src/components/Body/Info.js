import { Fragment } from "react";
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
        <span className={styles.fingure}>👋</span> I'm a web developer from
        Southampton, UK. Currently lead developer at a local agency, Fhoke. In
        my spare time I enjoy DIY, gaming and building my own projects. My
        preferred tools are PHP, Laravel and Vue.js.
      </p>
      <div className={styles.btnList}>
        <button className={styles.btn}>Download My CV</button>
        <button className={styles.btn}>Contact Me</button>
      </div>
    </Fragment>
  );
};

export default Info;
