import React, { useState } from "react";
import styles from "./Project.module.css";
import easyBank from "../../Images/projects/easyBank.png";
import Bookmark from "../../Images/projects/Bookmark.png";
import Manage from "../../Images/projects/Manage.png";
import Loopstudios from "../../Images/projects/Loopstudios.png";
import Fylo from "../../Images/projects/Fylo.png";
import Product from "../../Images/projects/Product.png";

const Card = ({ tag, title, img }) => {
  return (
    <div className={styles.card}>
      <span>{tag}</span>
      <div>{title}</div>
      <div className={styles.imgbox}>
        <img src={img} alt="prject" />
      </div>
      <button>view details ➡</button>
    </div>
  );
};

const Project = () => {
  const [clickedAll, setClickedAll] = useState(true);
  const [clickedFullStack, setClickedFullStack] = useState(false);
  const [clickedFrontEnd, setClickedFrontEnd] = useState(false);
  const [clickedReactJs, setClickedReactJs] = useState(false);

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
            }}
          >
            REACT JS
          </button>
        </div>
      </div>

      <div className={styles.cardBox}>
        {clickedReactJs && (
          <Card
            tag="#REACTJS"
            img={Loopstudios}
            title="Responsive landing page using Reactjs & tailwindCss"
          />
        )}
        {clickedFullStack && <p> still not implemented</p>}
        {clickedFrontEnd && (
          <>
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
