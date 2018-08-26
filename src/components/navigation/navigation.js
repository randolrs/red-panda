import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Link } from "react-router-dom";

class Navigation extends Component {
	static propTypes = {
    	makeNavWhite: PropTypes.func.isRequired,
    	makeNavClear: PropTypes.func.isRequired
  	};

	constructor(props) {
		super(props);
		this.listener = _.throttle(this.handleScroll, 200).bind(this);
	};

	componentDidMount = () => {
		window.addEventListener('scroll', this.handleScroll);
	};

	componentWillUnmount = () => {
		window.removeEventListener('scroll', this.handleScroll);
	};

	handleScroll = (event) => {
		let scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
		if(scrollTop > 100) {
			this.props.makeNavWhite();
		} else {
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
						<span class="title">Shane Randolph</span>
					</Link>
				</div>
				<div className="navigation__right">
					<Link 
						to="/contact"
						className="navigation__link--button"
					>
						<span>Contact Me</span>
					</Link>

					<Link 
						to="/resume"
						className="navigation__link--button"
					>
						<span>Resumé/CV</span>
					</Link>
					<Link 
						to="/projects"
						className="navigation__link--button"
					>
						<span>Recent Projects</span>
					</Link>
				</div>
			</div>
		)
	}
};

export default Navigation;