import React, {Component} from 'react';
import SocialLinksData from '../../../data/social-links';

class Hero extends Component {

	render() {

		let socialLinks = SocialLinksData.map((socialLink) => {
			return(
				<a
					className="social-link"
					href={socialLink.url}
					key={socialLink.id}
					target="_blank"
				>{socialLink.label}</a>
			);
		});

		return(
			<section className="home">
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
					<div className="home__content__social">
						{socialLinks}
					</div>
				</div>
			</section>
		)
	}

};

export default Hero;