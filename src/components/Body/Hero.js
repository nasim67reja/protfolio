import styles from "./Hero.module.css";

import Info from "./Info";
import Skills from "./Skills";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div>
          <Info />
        </div>
        <div className={styles.heroSkills}>
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default Hero;
