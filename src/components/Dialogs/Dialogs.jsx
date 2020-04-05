import React from "react";
import css from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";


let Dialogs = (props) => {
  return (
    <div className={css.dialogs}>
      <div className={css.dialogsItems}>
        <Dialog name='Dimych' id='1'/>
        <Dialog name='Roman' id='2'/>
        <Dialog name='Mark' id='3'/>
        <Dialog name='Igor' id='4'/>
      </div>
      <div className={css.messages}>
        <Message message='Hi!'/>
        <Message message='Hi!'/>
        <Message message='Hi!'/>
    </div>
</div>
)
}

export default Dialogs;