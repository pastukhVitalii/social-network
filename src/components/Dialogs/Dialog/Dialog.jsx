import React from "react";
import css from "./Dialog.module.css";
import {NavLink} from "react-router-dom";

let Dialog = (props) => {
  let path = '/dialogs/' + props.id;
  return (
    <div className={css.dialog}>
      <NavLink to={path} activeClassName={css.active}>{props.name}</NavLink>
    </div>
  )
}

export default Dialog;