import React from "react";
import css from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import AddMessageForm from "./AddMessageForm";

let Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map( d => <Dialog name={d.name} id={d.id} /> );
  let messagesElements = state.messages.map( m => <Message message={m.message} /> );
  let newMessageBody = state.newMessageBody;

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  }

  if (!props.isAuth) return <Redirect to={"/login"} /> ;

  return (
    <div className={css.dialogs}>
      <div className={css.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={css.messages}>
        <div>{ messagesElements}</div>
        <div>
          <AddMessageForm onSubmit={addNewMessage} />
        </div>
    </div>
</div>
)
}
export default Dialogs;