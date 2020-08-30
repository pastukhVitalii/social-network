import React, {useEffect, useState} from 'react';

import css from '../../Profile.module.css';

const ProfileDescriptionWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div className={css.backgroundPhoto}>
            <div className={css.userPhoto}>
                {props.photos.large === null ? <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRpllVVc01fT_q0UD6voIKBBw9RXGfxW6Te6hmqWS688PqHG7Ji&usqp=CAU"
                        alt="user post"/>
                    : <img src={props.photos.large} alt=""/>}
            </div>
            <div className={css.userDescription}>
                <div className={css.userName}>
                    {props.fullName}
                </div>

                {!editMode &&
                <div className={css.userStatus}>status: &nbsp;
                    <span onDoubleClick={activateEditMode}>{ props.status || "-------"}</span>
                </div>}
                {editMode &&
                <div className={css.userStatus}>status:
                    <input onChange={onStatusChange} autoFocus={true}
                           onBlur={deactivateEditMode}
                           value={status}/>
                </div>
                }</div>
        </div>
    )
}

export default ProfileDescriptionWithHooks;