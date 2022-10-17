import React from "react";
import styles from "./Education.module.css";

const Education = () => {
  return (
    <div className={styles.box}>
      <div className={styles.aboutCol}>
        <div className={styles.line}></div>
        <div>
          <div className={styles.textbox}>
            <h4>ChirirBander Pilot High School</h4>
            <div> Secondary School Certificate , Science</div>
            <span> (Jan 2013 - Mar 2014)</span>
            <div>Grade : GPA 5.00 out of 5.00</div>
          </div>

          <div className={styles.textbox}>
            <h4>Holy Land College</h4>
            <div> Higher School Certificate , Science</div>
            <span> (Jan 2014 - Mar 2016)</span>
            <div>Grade : GPA 5.00 out of 5.00</div>
          </div>
          <div className={styles.textbox}>
            <h4>Hajee Mohammad Danesh Science and Technology University</h4>
            <div> B.Sc in Fisheries</div>
            <span> (Jan 2018 - Mar 2022)</span>
            <div>
              I drop out in my third year because of giving full concentration
              on my IT career.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
