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
        <span className={styles.fingure}>👋</span> I'm Nasim Reja, a Versatile
        developer experienced in both front-end and backend development.
        Proficient in React.js for creating intuitive user interfaces and
        Node.js with Express.js for building robust backend systems.
        Demonstrated problem-solving skills by solving over 65+ coding
        challenges on platforms like LeetCode. Committed to delivering
        high-quality solutions with meticulous attention to detail. Stay updated
        with the latest front-end and backend development technologies to drive
        project success and innovation.
      </p>
      <div className={styles.btnList}>
        <a
          href="https://drive.google.com/file/d/1Xe76JmxvsqQzoj7rOkaSAr4GZrqBcPyv/view?usp=drive_link"
          target="_blank"
          rel="noreferrer"
          className={styles.btn}
        >
          Download My CV
        </a>
        <Link to="/contact" className={styles.btn}>
          Contact Me
        </Link>
      </div>
    </Fragment>
  );
};

export default Info;
