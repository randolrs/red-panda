import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Link, NavLink } from "react-router-dom";

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
		return(
			<div className={"navigation " + (this.props.navIsClear ? 'clear' : 'white')}>
				<div className="navigation__left">
					<Link 
						to="/" 
						className="navigation__link--logo"
					>
						<img src="/logo.svg" alt="Shane Randolph" />
						<span className="title">Shane Randolph</span>
					</Link>
				</div>
				<div className="navigation__right">
					<NavLink 
						to="/"
						className="navigation__link--button"
						activeClassName="active"
					>
						<span>Home</span>
					</NavLink>
					<NavLink 
						to="/contact"
						className="navigation__link--button"
						activeClassName="active"
					>
						<span>Contact Me</span>
					</NavLink>

					<NavLink 
						to="/resume"
						className="navigation__link--button"
						activeClassName="active"
					>
						<span>Resumé/CV</span>
					</NavLink>
					<NavLink 
						to="/projects"
						className="navigation__link--button"
						activeClassName="active"
					>
						<span>Recent Projects</span>
					</NavLink>
				</div>
			</div>
		)
	}
};

export default Navigation;