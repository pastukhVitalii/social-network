import React from "react";
import css from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

let Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map( d => <Dialog name={d.name} id={d.id} /> );
  let messagesElements = state.messages.map( m => <Message message={m.message} /> );
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  }

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  }

  return (
    <div className={css.dialogs}>
      <div className={css.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={css.messages}>
        <div>{ messagesElements}</div>
        <div>
          <div><textarea value={newMessageBody}
                         onChange={onNewMessageChange}
                         placeholder='Enter your message'/></div>
          <div><button onClick={onSendMessageClick}>Send</button></div>

        </div>
    </div>
</div>
)
}

export default Dialogs;