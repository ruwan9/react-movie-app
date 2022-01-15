import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.nav_bar}>
      <Link to="/" style={{ textDecoration: "none" }}>
        Home
      </Link>
    </div>
  );
}

export default Header;
