import React from "react";
import css from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";


let Dialogs = (props) => {

  let dialogsElement = props.state.dialogs.map(d =>  <Dialog name={d.name} id={d.id}/>);
  let messagesElement = props.state.messages.map(m => <Message message={m.message} id={m.id}/>)
  return (
    <div className={css.dialogs}>
      <div className={css.dialogsItems}>
        {dialogsElement}
      </div>
      <div className={css.messages}>
        {messagesElement}
    </div>
</div>
)
}

export default Dialogs;