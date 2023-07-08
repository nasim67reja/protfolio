import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={styles.line}></div>
        <div className={`${styles.dis} flex`}>
          <p>© 2023 Nasim Reja.</p>
          <p>
            Built with
            <span>
              <a
                className={styles.link}
                href="https://reactjs.org/"
                target="_blank"
              >
                React
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};
