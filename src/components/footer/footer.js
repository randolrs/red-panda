import React  from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

var thisYear = (new Date()).getFullYear();

const Footer = (props) => (
	<div className="footer">
		<div className="footer__content">
			<div>
				<Router>
					<Link 
						to="/"
					>
						<span>About</span>
					</Link>
				</Router>
				<Router>
					<Link 
						to="/"
					>
						<span>Contact</span>
					</Link>
				</Router>

				<Router>
					<Link 
						to="/"
					>
						<span>Resumé/CV</span>
					</Link>
				</Router>
			</div>
			<div>
				<span>Linkedin</span>
				<span>Angelist</span>
				<span>Tokenly?</span>
			</div>
			<div>
				<span>Built with</span>
				<span className="heart-beat" style={{color: '#EB3349', fontSize: '22px'}}> ♥ </span>
				<span>love and</span>
				<img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="Shane Randolph" />
				<span>ReactJS</span>

			</div>
			<div>
				<span>©</span>
				<span>{ thisYear }, </span>
				<span>Shane Randolph</span>
			</div>
		</div>
	</div>
);

export default Footer;