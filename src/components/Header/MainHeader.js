import React from "react";
import styles from "./MainHeader.module.css";
import nasim from "../../Images/nasim2.jpg";
import Navbar from "./Navbar";

const MainHeader = () => {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.flex}>
          <div className={styles["header-img-box"]}>
            <img src={nasim} alt="nasim-pic" />
          </div>
          <div className={styles["header-content-box"]}>
            <h2 className={styles["heading-secondary"]}>Nasim Reja</h2>
            <Navbar />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
