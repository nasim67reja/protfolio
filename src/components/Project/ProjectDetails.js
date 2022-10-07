import React from "react";
import { useParams } from "react-router-dom";
import careocityFull from "../../Images/projects/carocityFull.png";
import styles from "./ProjectDet.module.css";

const ProjectDetails = () => {
  const param = useParams();

  return (
    <div className="container">
      <div>
        <h3>Harlist</h3>
        <p>
          A to do app with a focus on simplicity. Only the features you need to
          get things done.
        </p>
        <div>#webdevlopment #frontenddev</div>
      </div>
      <div className={styles.imgBox}>
        <img src={careocityFull} alt="" />
      </div>
    </div>
  );
};

export default ProjectDetails;
