import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import css from './Dialogs.module.css'

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea}
               validate={[required, maxLength50]}
               placeholder='Enter your message'
               name="newMessageBody" className={css.textarea} />
      </div>
      <div>
        <button className={css.btn}>Send</button>
      </div>
    </form>
  )
}

export default reduxForm({form: 'dialog-add-message-form'})(AddMessageForm);

