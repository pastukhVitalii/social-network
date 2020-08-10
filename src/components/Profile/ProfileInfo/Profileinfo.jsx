import React from 'react';
import css from './Profileinfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
  if (!profile) {
    return <Preloader />
  }
    return (
      <div className={css.info} >
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        <img src="" alt="" />
        <div>Description </div>
      </div>
  )
}

export default ProfileInfo;