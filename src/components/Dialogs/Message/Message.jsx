import React from "react";
import css from "./Message.module.css";
import Dialog from "../Dialog/Dialog";

let Message = (props) => {
  let date = new Date().toLocaleTimeString('ru', {hour: '2-digit', minute: '2-digit'});
  return (
    <div className={css.messages}>
      <div className={css.text}>{props.message}<br/>
      </div>
      <div className={css.date}>{date}</div>
      <div className={css.tail}></div>
    </div>
  )
}

export default Message;