import React from 'react';

const Hero = (props) => (
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
				<span>Twitter,etc.</span>
			</div>
		</div>
	</section>
);

export default Hero;