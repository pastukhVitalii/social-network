import React from 'react';
import css from './Profileinfo.module.css';
import Preloader from "../../Preloader/Preloader";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
    return (
      <div className={css.info}>
        <img src="" alt=""/>
        <div>Description</div>
      </div>
  )
}

export default ProfileInfo;