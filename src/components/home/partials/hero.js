import React, {Component} from 'react';

class Hero extends Component {

	render() {
		return(
			<section className="home">
				<div className="home__overlay"></div>
				<div className="home__content">
					<div className="home__content__hero-container">
						<div className="home__content__hero-container__image">	
							<img src="/Shane.png" className="home__content__img"/>
						</div>
						<div className="home__content__hero-container__headline">
							<h2 className="home__content__header">
								<span>Hi! I'm </span>
								<span>Shane</span>
								<span>, a front-end developer in the Bay Area.</span>
							</h2>
						</div>
					</div>
					<h3 className="home__content__sub-header">
						<span>I design and code beautiful, user-centric web experiences.</span>
					</h3>
					<div className="home__content__cta-container">
						<a>Main Cta</a>
						<a>Secondary Cta</a>
					</div>
				</div>
			</section>
		)
	}

};

export default Hero;