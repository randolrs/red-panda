import React, {Component} from 'react';

class Hero extends Component {

	render() {
		return(
			<section className="home">
				<div className="home__overlay"></div>
				<div className="home__content centered">
					<img src="/Shane.png" className="home__content__img"/>
					<h1 className="home__content__header">Shane Randolph</h1>
					<p className="home__content__header--secondary">
						<span>Software Developer</span>&nbsp;•&nbsp; 
						<span>Crypto Enthusiast</span>&nbsp;•&nbsp; 
						<span>Something something dark side</span>
					</p>
					<div className="centered">
						<span className="home__content__main-link">Linkedin</span>
						<span className="home__content__main-link">Resume</span>
						<span className="home__content__main-link">Angellsit</span>
						<span className="home__content__main-link">Medium?</span>
					</div>
				</div>
			</section>
		);
	}

};

export default Hero;