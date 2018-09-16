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
		return(
			<div className={"navigation " + (this.props.navIsClear ? 'clear' : 'white')}>
				<div className="navigation__left">
					<NavLink 
						exact
						to="/"
						className="navigation__link--button"
					>
						<span>Home</span>
					</NavLink>
				</div>
				<div className="navigation__right">
					<span className="navigation__main-link">Contact Me</span>
				</div>
			</div>
		)
	}
};

export default Navigation;