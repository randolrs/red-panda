import React, {Component} from 'react';
import { BrowserRouter as Link } from "react-router-dom";
import SocialLinksData from '../../data/social-links';

var thisYear = (new Date()).getFullYear();

class Footer extends Component {
	render() {
		let socialLinks = SocialLinksData.map((socialLink) => {
			return(
				<a
					className="footer__content__link"
					href={socialLink.url}
					key={socialLink.id}
					target="_blank"
				>{socialLink.label}</a>
			);
		});

		return (
			<div className="footer">
				<div className="footer__content centered">
					<div>
						<Link
							to="/about"
							className="footer__content__link" 
						>
							<span>About</span>
						</Link>
						<Link 
							to="/contact"
							className="footer__content__link" 
						>
							<span>Contact</span>
						</Link>
						<Link 
							to="/resume"
							className="footer__content__link" 
						>
							<span>Resumé/CV</span>
						</Link>
						<Link 
							to="/projects"
							className="footer__content__link" 
						>
							<span>Projects</span>
						</Link>
					</div>
					<div>
						{socialLinks}
					</div>
					<div className="footer__content__copyright">
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
			</div>
		)
	}
};

export default Footer;