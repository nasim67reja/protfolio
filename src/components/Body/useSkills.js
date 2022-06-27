import { useState } from "react";

const Helper = (props) => {
  const [enteredMouse, setEnteredMouse] = useState(false);

  const mouseEnterHandler = () => {
    setEnteredMouse(true);
  };

  const mouseLeaveHandler = () => {
    setEnteredMouse(false);
  };
  return (
    <li
      className={`${enteredMouse ? "scale" : ""}`}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      {enteredMouse && <p className="skill-show">{props.name}</p>}
      <img
        className={`${enteredMouse ? "less-opacity" : ""}`}
        src={props.value}
        alt="{logo}"
      />
    </li>
  );
};

const useSkills = (props) => {
  const values = Object.values(props);
  const keys = Object.keys(props);

  return (
    <ul className="logoList">
      {values.map((logo, i) => (
        <Helper value={logo} key={keys[i]} name={keys[i]} />
      ))}
    </ul>
  );
};

export default useSkills;
