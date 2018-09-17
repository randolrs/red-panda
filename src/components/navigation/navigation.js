import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";

class Navigation extends Component {
	static propTypes = {
    	makeNavWhite: PropTypes.func.isRequired,
    	makeNavClear: PropTypes.func.isRequired
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
				</div>
			</div>
		)
	}
};

export default Navigation;