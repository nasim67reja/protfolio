import React, { useState } from "react";
import styles from "./Project.module.css";
import { Link } from "react-router-dom";
import { data as projectData } from "./projectData";

const tabs = [
  { name: "ALL WORK", key: "all" },
  { name: "FULL STACK", key: "fullstack" },
  { name: "FRONT END", key: "frontend" },
  { name: "REACT JS", key: "reactjs" },
  { name: "NEXTJS", key: "nextjs" },
];

const Card = ({ tag, title, img }) => {
  return (
    <div className={`${styles.card} ani`}>
      <span>{tag}</span>
      <div className={styles.title}>{title}</div>
      <div className={styles.imgbox}>
        <img src={img} alt="project" />
      </div>
      <Link to={`/project/${title}`}>view details ➡</Link>
    </div>
  );
};

const Project = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects = activeTab === "all"
    ? projectData
    : projectData.filter(project => project.tag.toLowerCase().includes(activeTab));

  return (
    <div className="container">
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <span>PORTFOLIO</span>
          <h1>CREATIVE WORKS</h1>
        </div>
        <div className={styles.btnBox}>
          {tabs.map(tab => (
            <button
              key={tab.key}
              className={`${activeTab === tab.key ? "active-btn" : ""}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.cardBox}>
        {filteredProjects.map(project => (
          <Card
            key={project.name}
            tag={project.tag}
            img={project.image}
            title={project.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
