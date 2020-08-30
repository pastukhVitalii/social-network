import React from "react";
import css from "./Header.module.css";
import {NavLink} from "react-router-dom";

let Header = (props) => {
    return (
        <header>
            <div className={css.logo}>
                <div className={css.logoTitle}>SN</div>
            </div>
            <div className={css.loginBlock}>
                {props.isAuth
                    ?
                    <div>{props.login} - <button onClick={props.logout} className={css.btnLogin}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;