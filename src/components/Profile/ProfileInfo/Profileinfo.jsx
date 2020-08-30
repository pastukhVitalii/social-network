import React from 'react';
import css from '../Profile.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileDescriptionWithHooks from "./ProfileStatus/ProfileDescriptionWithHooks";

const ProfileInfo = ({profile, status, updateStatus, fullName, photos}) => {
  if (!profile) {
    return <Preloader />
  }
    return (
      <div className={css.content} >
        <ProfileDescriptionWithHooks status={status} updateStatus={updateStatus} fullName={fullName} photos={photos}/>
      </div>
  )
}

export default ProfileInfo;