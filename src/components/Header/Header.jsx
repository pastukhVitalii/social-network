import React from "react";
import css from"./Header.module.css";

let Header = () => {
  return (
		<header>
			<div className={css.logo}>
				<img src="https://png.pngtree.com/element_pic/00/16/07/115783931601b5c.jpg" alt="logo"/>
			</div>
		</header>
	)
}

export default Header;