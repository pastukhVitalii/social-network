import React from "react";
import css from "./Navbar.module.css";

let Navbar = () => {
  return (
    <nav className={css.nav}>
      <ul>
        <li className={css.active}>Profile</li>
        <li>Messages</li>
        <li>News</li>
        <li>Music</li>
        <li>Settings</li>
      </ul>
    </nav>
  )
}

export default Navbar;