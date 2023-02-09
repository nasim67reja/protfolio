import React, { useState } from "react";
import styles from "./Project.module.css";
import easyBank from "../../Images/projects/easyBank.png";
import Bookmark from "../../Images/projects/Bookmark.png";
import Manage from "../../Images/projects/Manage.png";
import Loopstudios from "../../Images/projects/Loopstudios.png";
import Fylo from "../../Images/projects/Fylo.png";
import Product from "../../Images/projects/Product.png";
import Careocity from "../../Images/projects/Careocity.png";
import Netflix from "../../Images/projects/Netflix.png";
import pokemon from "../../Images/projects/pokemon.png";
import spaceX from "../../Images/projects/spaceX.png";

import { Link } from "react-router-dom";

const Card = ({ tag, title, img }) => {
  return (
    <div className={`${styles.card} ani`}>
      <span>{tag}</span>
      <div className={styles.title}>{title}</div>
      <div className={styles.imgbox}>
        <img src={img} alt="prject" />
      </div>
      <Link to={`/project/${title}`}>view details ➡</Link>
    </div>
  );
};

const Project = () => {
  const [clickedAll, setClickedAll] = useState(true);
  const [clickedFullStack, setClickedFullStack] = useState(false);
  const [clickedFrontEnd, setClickedFrontEnd] = useState(false);
  const [clickedReactJs, setClickedReactJs] = useState(false);
  const [clickedNextJs, setClickedNextJs] = useState(false);

  return (
    <div className="container">
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <span>PROTFOLIO</span>
          <h1>CREATIVE WORKS</h1>
        </div>
        <div className={styles.btnBox}>
          <button
            className={`${clickedAll ? "active-btn" : ""}`}
            onClick={() => {
              setClickedAll(true);
              setClickedFullStack(false);
              setClickedFrontEnd(false);
              setClickedReactJs(false);
              setClickedNextJs(false);
            }}
          >
            ALL WORK
          </button>

          <button
            className={`${clickedFullStack ? "active-btn" : ""}`}
            onClick={() => {
              setClickedAll(false);
              setClickedFullStack(true);
              setClickedFrontEnd(false);
              setClickedReactJs(false);
              setClickedNextJs(false);
            }}
          >
            FULL STACK
          </button>
          <button
            className={`${clickedFrontEnd ? "active-btn" : ""}`}
            onClick={() => {
              setClickedAll(false);
              setClickedFullStack(false);
              setClickedFrontEnd(true);
              setClickedReactJs(false);
              setClickedNextJs(false);
            }}
          >
            FRONT END
          </button>
          <button
            className={`${clickedReactJs ? "active-btn" : ""}`}
            onClick={() => {
              setClickedAll(false);
              setClickedFullStack(false);
              setClickedFrontEnd(false);
              setClickedReactJs(true);
              setClickedNextJs(false);
            }}
          >
            REACT JS
          </button>
          <button
            className={`${clickedNextJs ? "active-btn" : ""}`}
            onClick={() => {
              setClickedNextJs(true);
              setClickedAll(false);
              setClickedFullStack(false);
              setClickedFrontEnd(false);
              setClickedReactJs(false);
            }}
          >
            NEXTJS
          </button>
        </div>
      </div>

      <div className={styles.cardBox}>
        {clickedFullStack && (
          <>
            <Card
              tag="#MERN"
              img={Careocity}
              title="Careocity an e-commerce website using react,node,express & tailwindCss"
            />
            <Card tag="#REACTJS&FIREBASE" img={Netflix} title="Netflix Clone" />
          </>
        )}
        {clickedReactJs && (
          <>
            <Card
              tag="#REACTJS"
              img={spaceX}
              title="SpaceX Launch Tracker using Reactjs ,TS,RTK QUERY & ANT-Design"
            />
            <Card
              tag="#REACTJS"
              img={Loopstudios}
              title="Responsive landing page using Reactjs & tailwindCss"
            />
          </>
        )}
        {clickedNextJs && (
          <>
            <Card
              tag="#NEXTJS"
              img={pokemon}
              title="Pokemon Website using Next.js, GraphQL API,TypeScript and Tailwind Css"
            />
          </>
        )}

        {clickedFrontEnd && (
          <>
            <Card
              tag="#NEXTJS"
              img={pokemon}
              title="Pokemon Website using Next.js, GraphQL API,TypeScript and Tailwind Css"
            />
            <Card
              tag="#REACTJS"
              img={spaceX}
              title="SpaceX Launch Tracker using Reactjs ,TS,RTK QUERY & ANT-Design"
            />

            <Card
              tag="#REACTJS"
              img={Loopstudios}
              title="Responsive landing page using Reactjs & tailwindCss"
            />
            <Card
              tag="#HTML&CSS"
              img={easyBank}
              title="Easy Bank - Next generation digital banking "
            />
            <Card
              tag="#HTML&CSS"
              img={Bookmark}
              title="Responsive landing page using CSS grid, flexbox & Vanila Js"
            />
            <Card
              tag="#HTML&CSS"
              img={Manage}
              title="Responsive Manage landing page using CSS Grid"
            />
            <Card
              tag="#HTML&CSS"
              img={Fylo}
              title="Responsive landing page using css grid & HTML5"
            />
            <Card
              tag="#HTML&CSS"
              img={Product}
              title="E-commerce product page using css grid & HTML5"
            />
          </>
        )}
        {clickedAll && (
          <>
            <Card
              tag="#MERN"
              img={Careocity}
              title="Careocity an e-commerce website using react,node,express & tailwindCss"
            />

            <Card
              tag="#NEXTJS"
              img={pokemon}
              title="Pokemon Website using Next.js, GraphQL API,TypeScript and Tailwind Css"
            />

            <Card
              tag="#REACTJS"
              img={spaceX}
              title="SpaceX Launch Tracker using Reactjs ,TS,RTK QUERY & ANT-Design"
            />
            <Card tag="#REACTJS&FIREBASE" img={Netflix} title="Netflix Clone" />
            <Card
              tag="#REACTJS"
              img={Loopstudios}
              title="Responsive landing page using Reactjs & tailwindCss"
            />
            <Card
              tag="#HTML&CSS"
              img={easyBank}
              title="Easy Bank - Next generation digital banking "
            />
            <Card
              tag="#HTML&CSS"
              img={Bookmark}
              title="Responsive landing page using CSS grid, flexbox & Vanila Js"
            />
            <Card
              tag="#HTML&CSS"
              img={Manage}
              title="Responsive Manage landing page using CSS Grid"
            />
            <Card
              tag="#HTML&CSS"
              img={Fylo}
              title="Responsive landing page using css grid & HTML5"
            />
            <Card
              tag="#HTML&CSS"
              img={Product}
              title="E-commerce product page using css grid & HTML5"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Project;
