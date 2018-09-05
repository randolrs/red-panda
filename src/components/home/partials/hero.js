import React, {Component} from 'react';
import SocialLinksData from '../../../data/social-links';

class Hero extends Component {

	render() {

		let socialLinks = SocialLinksData.map((socialLink) => {
			return(
				<a
					href={socialLink.url}
					key={socialLink.id}
					target="_blank"
				>{socialLink.label}</a>
			);
		});

		return(
			<section className="home">
				<div className="home__content centered">
					<h2 className="home__content__header">
						<span>Front-end Developer</span>
					</h2>
					<h3 className="home__content__sub-header">
						<span>I design and code beautiful, user-centric web experiences.</span>
					</h3>
					<img src="/Shane.png" className="home__content__img"/>
					<div className="home__content__social">
						{socialLinks}
					</div>
				</div>
			</section>
		)
	}

};

export default Hero;