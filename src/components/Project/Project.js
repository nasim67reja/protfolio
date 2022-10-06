import React from "react";
import styles from "./Project.module.css";
import test from "../../Images/contact.png";

const Project = () => {
  return (
    <div className="container">
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <span>PROTFOLIO</span>
          <h1>CREATIVE WORKS</h1>
        </div>
        <div className={styles.btnBox}>
          {["all work", "full stack", "front end", "html & css"].map(
            (el, i) => (
              <button key={i}>{el.toUpperCase()}</button>
            )
          )}
        </div>
      </div>
      <div>
        <div className={styles.card}>
          <span>#html&css</span>
          <div>Careocity , an e-commerce platform</div>
          <img src={test} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Project;
