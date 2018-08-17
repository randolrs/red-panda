import React from 'react';
import { Link } from "react-router-dom";

const Navigation = (props) => (
	<div className="navigation">
		<div className="navigation__left">
			<Link 
				to="/" 
				className="navigation__link--logo"
			>
				<img src="/logo.svg" alt="Shane Randolph" />
			</Link>
		</div>
		<div className="navigation__right">
			<Link 
				to="/contact"
				className="navigation__link--button"
			>
				<span>Contact</span>
			</Link>

			<Link 
				to="/resume"
				className="navigation__link--button"
			>
				<span>Resumé/CV</span>
			</Link>
		</div>
	</div>
);

export default Navigation;