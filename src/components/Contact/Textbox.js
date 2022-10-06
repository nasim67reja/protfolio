import React from "react";
import styles from "./Textbox.module.css";
import contact from "../../Images/contact.png";

const Textbox = () => {
  return (
    <div className={styles.textbox}>
      <img src={contact} className={styles.contactImg} alt="two man's hand" />
      <h2>Nasim Reja</h2>
      <p>a Full Stack web developer.</p>
      <div>
        I am available for freelance work. Connect with me via and call in to my
        account.
      </div>
      <div>
        <p>Phone: 01791843265</p>
        <p>Email: nasimreja67@gmail.com</p>
      </div>
      <div>
        <h4>FIND WITH ME</h4>
        <div className={styles.contactIcon}>
          <a href="https://twitter.com/Nasimreja97">
            <ion-icon size="large" name="logo-twitter"></ion-icon>
          </a>
          <a href="https://www.facebook.com/nasim.reja.102/">
            <ion-icon size="large" name="logo-facebook"></ion-icon>
          </a>
          <a href="https://github.com/nasim67reja">
            <ion-icon size="large" name="logo-github"></ion-icon>
          </a>
          <a href="https://www.linkedin.com/in/nasim-reja-aa388b212/">
            <ion-icon size="large" name="logo-linkedin"></ion-icon>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Textbox;
