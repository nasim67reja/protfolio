import React, { useState } from "react";
import styles from "./About.module.css";
import Skills from "./Skills";

const About = () => {
  const [skillBox, setSkillBox] = useState(true);
  const [experience, setExperience] = useState(false);
  const [education, setEducation] = useState(false);

  return (
    <div className="container">
      <div className={styles.header}>
        <span>7+ years of experience</span>
        <h2>My Resume</h2>
      </div>
      <ul className={styles.btnlist}>
        <li>
          <button
            className={skillBox ? styles.active : null}
            onClick={() => {
              setSkillBox(true);
              setExperience(false);
              setEducation(false);
            }}
          >
            Professional Skills
          </button>
        </li>
        <li>
          <button
            className={experience ? styles.active : null}
            onClick={() => {
              setSkillBox(false);
              setExperience(true);
              setEducation(false);
            }}
          >
            Experience
          </button>
        </li>
        <li>
          <button
            className={education ? styles.active : null}
            onClick={() => {
              setSkillBox(false);
              setExperience(false);
              setEducation(true);
            }}
          >
            Education
          </button>
        </li>
      </ul>
      {skillBox && <Skills />}
      {experience && (
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
                      Learnt the core concept of Javascript like variables,
                      if/else, operators, boolean logic, functions, arrays,
                      objects, loops, strings, etc.
                    </li>
                    <li>
                      Learnt the Asynchronous Javascript and Modern tools for
                      2022 and beyond: NPM, Parcel, Babel and ES6 modules .
                    </li>
                  </ul>
                </div>

                <div className={styles.textbox}>
                  <h4>
                    <a
                      className={styles.courseLink}
                      href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/"
                    >
                      React - The Complete Guide (incl Hooks, React Router,
                      Redux)
                    </a>
                  </h4>
                  <span>at udemy (04/2024 - continue)</span>
                  <h5>Achievement</h5>
                  <ul>
                    <li>
                      Learnt all about React Hooks, React Components, Redux and
                      React Router
                    </li>
                    <li>
                      Learnt how to Build powerful, fast, user-friendly and
                      reactive web apps.
                    </li>
                  </ul>
                </div>

                <div className={styles.textbox}>
                  <h4>
                    <a
                      className={styles.courseLink}
                      href="https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/"
                    >
                      Node.js, Express, MongoDB & More: The Complete Bootcamp
                      2022
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
                    <li>
                      Security: encryption, sanitization, rate limiting, etc.
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
                    <li>
                      Security: encryption, sanitization, rate limiting, etc.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className={styles.header}>
              <span>2021 - continue</span>
              <h3>Projects</h3>
            </div>
            <div className={styles.aboutCol}>
              <div className={styles.line}></div>
              <div>
                <div className={styles.textbox}>
                  <h4>
                    <a
                      className={styles.courseLink}
                      href="https://nasim67reja.github.io/CareoCIty-ecommerce/"
                    >
                      CareoCity is an e-commerce MERN stack website.
                    </a>
                    <a
                      className={styles.credentials}
                      target="_blank"
                      rel="noreferrer"
                      href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-65b54292-3901-48eb-9557-052b1512526d.pdf"
                    >
                      Live Site
                      <ion-icon name="open-outline"></ion-icon>
                    </a>
                    <span>(05/2022 - continue)</span>
                  </h4>
                  <h5>Overview</h5>
                  <ul>
                    <li>
                      A MERN stack web app, which provides customers with
                      various Product
                    </li>
                    <li>
                      Customers can sign in & sign up by providing their
                      credentials, and after successfully signing up, they will
                      receive a welcome email in their provided email.
                    </li>
                    <li>
                      A Customer can also reset his password if he forgot,
                      delete his account, Update his credentials, upload his
                      photo, and log out from the application.
                    </li>
                    <li>
                      Many routes of this application (account, Cart) are
                      protected from the non-logged-in customer.JWT and cookies
                      have applied the authentication.
                    </li>
                    <li>
                      After successfully logging in, a customer can see his
                      cart, add, remove and update products to his cart and buy
                      products using the Stripe Payment gateway.
                    </li>
                    <li>
                      A Logged in customer can also write, delete, and Update
                      reviews for a specific product.
                    </li>
                  </ul>
                  <h5>In future</h5>
                  <ul>
                    <li>
                      Admin will add a new product, update the product, delete
                      the product, add a new user, delete an existing user, and
                      see all the users on a beautiful dashboard.
                    </li>
                  </ul>
                  <p>
                    Note: all these features are available in the API but still
                    not implemented on the front end
                  </p>
                  <div>
                    <span>Tools & Technologies :</span>
                    <span>
                      React, React Router 6, NodeJs, axios, Redux-toolkit,
                      TailwindCss, ExpressJs, MongoDB.
                    </span>
                  </div>
                </div>

                <div className={styles.textbox}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi cum enim quam magni, voluptatibus aliquam quia
                  dolorum blanditiis eos, veniam sint ea reiciendis molestias!
                  Blanditiis ducimus velit labore repellat ut?
                </div>
                <div className={styles.textbox}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi cum enim quam magni, voluptatibus aliquam quia
                  dolorum blanditiis eos, veniam sint ea reiciendis molestias!
                  Blanditiis ducimus velit labore repellat ut?
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
