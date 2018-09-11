import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Link, NavLink } from "react-router-dom";
import SocialLinksData from '../../data/social-links';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Navigation extends Component {
	static propTypes = {
    	makeNavWhite: PropTypes.func.isRequired,
    	makeNavClear: PropTypes.func.isRequired
  	};

	constructor(props) {
		super(props);
	};

	componentDidMount = () => {
		window.addEventListener('scroll', this.handleScroll);
	};

	componentWillUnmount = () => {
		window.removeEventListener('scroll', this.handleScroll);
	};

	handleScroll = (event) => {
		let navTransitionHeight = 60;
		let scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
		if(this.props.navIsClear && scrollTop > navTransitionHeight) {
			this.props.makeNavWhite();
		} else if(!this.props.navIsClear && scrollTop <= navTransitionHeight) {
			this.props.makeNavClear();
		}
	};

	render() {
		let socialLinks = SocialLinksData.map((socialLink) => {
			if(socialLink.inNav) {
				return(
					<NavLink
						exact
						to={socialLink.url}
						className="navigation__link--button icon"
						activeClassName="active"
						key={socialLink.id}
						target="_blank"
					>	
						<span><i className={socialLink.faClass}></i></span>
					</NavLink>
				);
			}
		});
		return(
			<div className={"navigation " + (this.props.navIsClear ? 'clear' : 'white')}>
				<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous" />
				<div className="navigation__left">
					<NavLink 
						exact
						to="/"
						className="navigation__link--button"
						activeClassName="active"
					>
						<span>Home</span>
					</NavLink>
					<NavLink
						exact
						to="/resume"
						className="navigation__link--button"
						activeClassName="active"
					>
						<span>Resumé/CV</span>
					</NavLink>
					<NavLink
						exact
						to="/projects"
						className="navigation__link--button"
						activeClassName="active"
					>
						<span>Projects</span>
					</NavLink>
					<NavLink
						exact
						to="/contact"
						className="navigation__link--button"
						activeClassName="active"
					>
						<span>Contact Me</span>
					</NavLink>
				</div>
				<div className="navigation__right">
					{socialLinks}
				</div>
			</div>
		)
	}
};

export default Navigation;