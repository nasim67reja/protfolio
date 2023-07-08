import React from "react";
import { Link } from "react-router-dom";
import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <div className={styles.box}>
      <div>
        <div className={styles.header}>
          <span>2021 - Continue</span>
          <h3>Education Quality</h3>
        </div>
        <div className={styles.aboutCol}>
          <div className={styles.line}></div>
          <div>
            <div className={styles.textbox}>
              <h4>
                <a
                  className={styles.courseLink}
                  href="https://www.udemy.com/course/the-complete-javascript-course/"
                >
                  The Complete JavaScript Course 2022: From Zero to Expert!
                </a>
                <a
                  className={styles.credentials}
                  target="_blank"
                  rel="noreferrer"
                  href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-65b54292-3901-48eb-9557-052b1512526d.pdf"
                >
                  Show Credentials
                  <ion-icon name="open-outline"></ion-icon>
                </a>
              </h4>
              <span>at udemy (03/2021 - 08/2022)</span>
              <h5>Achievement</h5>
              <ul>
                <li>
                  Learnt the core concept of Javascript like variables, if/else,
                  operators, boolean logic, functions, arrays, objects, loops,
                  strings, etc.
                </li>
                <li>
                  Learnt the Asynchronous Javascript and Modern tools for 2022
                  and beyond: NPM, Parcel, Babel and ES6 modules .
                </li>
              </ul>
            </div>

            <div className={styles.textbox}>
              <h4>
                <a
                  className={styles.courseLink}
                  href="https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/"
                >
                  Build Responsive Real-World Websites with HTML and CSS
                </a>
                <a
                  className={styles.credentials}
                  target="_blank"
                  rel="noreferrer"
                  href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-8c99c27e-37ff-4dd7-97c4-2f7c09c6c611.pdf"
                >
                  Show Credentials
                  <ion-icon name="open-outline"></ion-icon>
                </a>
              </h4>
              <span>at udemy (07/2021 - 02/2022)</span>
              <h5>Achievement</h5>
              <ul>
                <li>
                  Learnt the entire modern back-end stack: Node, Express,
                  MongoDB and Mongoose
                </li>
                <li>
                  Build a fast, scalable, feature-rich RESTful API (includes
                  filters, sorts, pagination, and much more)
                </li>
                <li>Security: encryption, sanitization, rate limiting, etc.</li>
              </ul>
            </div>

            <div className={styles.textbox}>
              <h4>
                <a
                  className={styles.courseLink}
                  href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/"
                >
                  React - The Complete Guide (incl Hooks, React Router, Redux)
                </a>
              </h4>
              <span>at udemy (04/2022 - continue)</span>
              <h5>Achievement</h5>
              <ul>
                <li>
                  Learnt all about React Hooks, React Components, Redux and
                  React Router
                </li>
                <li>
                  Learnt how to Build powerful, fast, user-friendly and reactive
                  web apps.
                </li>
              </ul>
            </div>

            <div className={styles.textbox}>
              <h4>
                <a
                  className={styles.courseLink}
                  href="https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/"
                >
                  Node.js, Express, MongoDB & More: The Complete Bootcamp 2022
                </a>
                <a
                  className={styles.credentials}
                  target="_blank"
                  rel="noreferrer"
                  href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-65b54292-3901-48eb-9557-052b1512526d.pdf"
                >
                  Show Credentials
                  <ion-icon name="open-outline"></ion-icon>
                </a>
              </h4>
              <span>at udemy (04/2022 - 09/2022)</span>
              <h5>Achievement</h5>
              <ul>
                <li>
                  Learnt the entire modern back-end stack: Node, Express,
                  MongoDB and Mongoose
                </li>
                <li>
                  Build a fast, scalable, feature-rich RESTful API (includes
                  filters, sorts, pagination, and much more)
                </li>
                <li>Security: encryption, sanitization, rate limiting, etc.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className={styles.header}>
          <span>2023 - continue</span>
          <h3>Professional</h3>
        </div>
        <div className={styles.aboutCol}>
          <div className={styles.line}></div>
          <div>
            <div className={styles.textbox}>
              <h4>
                {/* <a
                  className={styles.courseLink}
                  href="https://nasim67reja.github.io/CareoCIty-ecommerce/"
                >
                  CareoCity is an e-commerce MERN stack website.
                </a>
                <a
                  className={styles.credentials}
                  target="_blank"
                  rel="noreferrer"
                  href="https://nasim67reja.github.io/CareoCIty-ecommerce/"
                >
                  Live Site
                  <ion-icon name="open-outline"></ion-icon>
                </a> */}
                Junior Full Stack Developer, Bayshore Communication
                <span>(March 2023 - July 2023)</span>
              </h4>
              <h5>Overview</h5>
              <ul>
                <li>
                  Developed a MERN stack e-commerce project with dynamic
                  functionalities for enhanced user interactions.
                </li>
                <li>
                  Created a secure authentication system for seamless login and
                  registration processes.
                </li>
                <li>
                  Designed and developed an intuitive admin dashboard for
                  efficient product inventory and order management.
                </li>
                <li>
                  Collaborated with senior developers and designers to ensure
                  timely project delivery while maintaining code quality.
                </li>
                <li>
                  Participated in code reviews, debugging sessions, and
                  continuous integration processes for optimized application
                  performance.
                </li>
                <li>
                  Additionally, built multiple SEO friendly static pages for
                  service agencies using Next.js
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
