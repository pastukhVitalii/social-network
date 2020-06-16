import React from "react";
import css from"./Header.module.css";
import {NavLink} from "react-router-dom";

let Header = (props) => {
  return (
		<header>
			<div className={css.logo}>
				<img src="https://png.pngtree.com/element_pic/00/16/07/115783931601b5c.jpg" alt="logo"/>
			</div>

      <div className={css.loginBlock}>
        { props.isAuth ? props.login
          : <NavLink to={'/login'}>Login</NavLink> }
      </div>
		</header>
	)
}

export default Header;