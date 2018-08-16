import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Navigation = (props) => (
	<div className="navigation">
		
		<div className="navigation__left">
			<Router>
				<Link 
					to="/" 
					className="navigation__link"
				>
					<span>ShaneRandolph</span>
				</Link>
			</Router>
		</div>
		<div className="navigation__right">
			<Router>
				<Link 
					to="/"
					className="navigation__link--button"
				>
					<span>Contact</span>
				</Link>
			</Router>

			<Router>
				<Link 
					to="/"
					className="navigation__link--button"
				>
					<span>Resumé/CV</span>
				</Link>
			</Router>
		</div>
	</div>
);

export default Navigation;