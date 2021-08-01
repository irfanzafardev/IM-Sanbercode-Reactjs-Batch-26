import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.png";

const Navbar = () => {
	return (
		<header>
			<ul>
				<li>
					<img id="logo" src={Logo} width="200" alt="sanbercode" />
				</li>
				<li>
					<Link to="/editor">List Editor</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>

				<li>
					<Link to="/">Home</Link>
				</li>
			</ul>
		</header>
	);
};

export default Navbar;
