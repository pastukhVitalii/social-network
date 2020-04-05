import React from "react";
import css from "./Message.module.css";
import {NavLink} from "react-router-dom";

let Message = (props) => {
  return (
    <div >
      {props.message}
    </div>
  )
}

export default Message;