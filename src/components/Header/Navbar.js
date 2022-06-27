import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const navItem = ["home", "about", "project", "articles", "contact"];

  return (
    <nav>
      <ul className={styles.navList}>
        {navItem.map((link) => {
          return (
            <li key={Math.random()}>
              <NavLink
                to={`${link}`}
                className={({ isActive }) => (isActive ? "active" : "link")}
              >
                {link.toUpperCase()}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
