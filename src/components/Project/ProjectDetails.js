import React from "react";
import { useParams } from "react-router-dom";
import styles from "./ProjectDet.module.css";
import { data } from "./projectData";

const ProjectDetails = () => {
  const param = useParams();
  console.log(param.projectTitle);
  const ProjectData = data.find((el) => el.title === param.projectTitle);

  return (
    <div className={`container ${styles.container}`}>
      {ProjectData && (
        <>
          <div>
            <div>
              <h3>{ProjectData.name}</h3>
              <p>{ProjectData.title}</p>
              <div className={styles.tag}>{ProjectData.tag}</div>
              <a href={ProjectData.link}>View Site</a>
            </div>
            <div className={styles.imgBox}>
              <img src={ProjectData.image} alt="website screnshot" />
            </div>
          </div>
          <div className={styles.rightColumn}>
            <h3>Technology Behind</h3>
            <ul className={styles.technology}>
              {ProjectData.technology.map((el, i) => (
                <li key={i}>{el}</li>
              ))}
            </ul>
            <h3>The Brief</h3>

            <p>{ProjectData.overview || null}</p>
            <ul className={styles.projectDes}>
              {ProjectData.description &&
                ProjectData.description.map((el) => <li>{el}</li>)}
            </ul>
            <div className={styles.links}>
              <a className={`${styles.primary}`} href={ProjectData.link}>
                View Site
              </a>
              <a
                className={`${styles.primary} ${styles.secondary}`}
                href={ProjectData.linkGithub}
              >
                View Code
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectDetails;
