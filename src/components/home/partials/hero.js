import React, {Component} from 'react';
import { NavLink } from "react-router-dom";

class Hero extends Component {

	render() {
		return(
			<section className="home">
				<div className="home__overlay"></div>
				<div className="home__content centered">
					<img
						src="/Shane.png"
						className="home__content__img"
						alt="Shane Randolph"
					/>
					<h1 className="home__content__header">Shane Randolph</h1>
					<p className="home__content__header--secondary">
						<span>Software Developer</span>&nbsp;•&nbsp; 
						<span>Crypto Enthusiast</span>&nbsp;•&nbsp; 
						<span>Something something dark side</span>
					</p>
					<div className="centered">
						<a
							href="https://www.linkedin.com/in/shane-randolph-b9509838/"
							rel="noopener noreferrer"
							target="_blank"
						>
							<span className="home__content__main-link">
								<i className="fab fa-linkedin"></i>
							</span>
						</a>

						<a
							href="https://angel.co/shane-randolph"
							rel="noopener noreferrer"
							target="_blank"
						>
							<span className="home__content__main-link">
								<i className="fab fa-angellist"></i>
							</span>
						</a>
						<a 
							href="https://medium.com/@shanerandolph"
							rel="noopener noreferrer"
							target="_blank"
						>
							<span className="home__content__main-link">
								<i className="fab fa-medium"></i>
							</span>
						</a>
					</div>
					<div>
						<NavLink 
							exact
							to="/resume"
						>
							<span className="home__content__main-cta">
								<span>See My Resume</span>
								<i 
									className="fas fa-arrow-right"
								></i>
							</span>
						</NavLink>
					</div>
					<div>
						<a 
							href="mailto:r.shane.randolph@gmail.com"
						>
							<span className="home__content__main-cta">
								<i className="fas fa-envelope"></i>
								<span>Contact Me</span>
							</span>
						</a>
					</div>
				</div>
			</section>
		);
	}

};

export default Hero;