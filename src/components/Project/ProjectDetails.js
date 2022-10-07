import React from "react";
import { useParams } from "react-router-dom";
import careocityFull from "../../Images/projects/carocityFull.png";
import styles from "./ProjectDet.module.css";

const ProjectDetails = () => {
  const param = useParams();

  return (
    <div className={`container ${styles.container}`}>
      <div>
        <div>
          <h3>Harlist</h3>
          <p>
            A to do app with a focus on simplicity. Only the features you need
            to get things done.
          </p>
          <div className={styles.tag}>#webdevlopment #frontenddev</div>
        </div>
        <div className={styles.imgBox}>
          <img src={careocityFull} alt="" />
        </div>
      </div>
      <div className={styles.rightColumn}>
        <h3>The Brief</h3>
        <p>
          To do list apps are everywhere, but my biggest issue with them all is
          how bloated they all are. Social login, user tracking, email
          notifications. The list goes on. I wanted something really simple to
          get the job done, so I built it.
        </p>
        <h3>Technology Behind</h3>
        <p></p>
        <div className={styles.links}>
          <a
            className={`${styles.primary}`}
            href="https://nasim67reja.github.io/CareoCIty-ecommerce/"
          >
            View Site
          </a>
          <a
            className={`${styles.primary} ${styles.secondary}`}
            href="https://github.com/nasim67reja/CareoCIty-ecommerce"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
