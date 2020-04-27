import React from "react";
import css from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

let Navbar = (props) => {
  let friendsArr = props.state.bestFriends.map(f => {
    return <div>{f.name + ' '}</div>
  });
  return (
    <nav>
      <div className={css.item}>
        <NavLink to='/profile' activeClassName={css.activeLink}>Profile</NavLink>
      </div>
      <div className={css.item}>
        <NavLink to='/dialogs' activeClassName={css.activeLink}>Messages</NavLink>
      </div>
      <div className={css.item}>
        <NavLink to='/news' activeClassName={css.activeLink}>News</NavLink>
      </div>
      <div className={css.item}>
        <NavLink to='/music' activeClassName={css.activeLink}>Music</NavLink>
      </div>
      <div className={css.item}>
        <NavLink to='/settings' activeClassName={css.activeLink}>Settings</NavLink>
      </div>
      <div className={css.bestFriends}>
        <div className={css.subTitle}>
          Best Friends
        </div>
        <div className={css.friends}>
          <div className={css.item}>
            {friendsArr}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;