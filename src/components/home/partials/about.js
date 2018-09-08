import React from 'react';

const About = (props) => (
	<section className="home-section centered about">
		<div className="home-section__content">
			<header className="home-section__content__header">
				<span>Hello, I'm </span>
				<span className="name-color-text">Shane</span><span>. </span>
				<span>Happy you're here</span>
			</header>

			<h4>How can I help you today?</h4>
			<div>
				<div>
					<span>I want to hire you</span>
				</div>
				<div>
					<span>My company want to hire you</span>
				</div>
				<div>
					<span>...mentorship</span>
				</div>
			</div>
		</div>
	</section>
);

export default About;