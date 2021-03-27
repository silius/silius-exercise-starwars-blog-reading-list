import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/star_wars_logo_PNG39.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				{/* <span className="navbar-brand mb-0 h1"></span> */}
				<img src={logo} alt="" style={{ width: "90px", height: "90px" }} />
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};
