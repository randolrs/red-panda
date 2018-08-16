import React, { Component} from 'react';

const Hero = (props) => (
	<div className="home">
		<div className="home__content centered">
			<h2 className="home__content__header">
				<span>Front-end Developer</span>
			</h2>
			<h3 className="home__content__sub-header">
				<span>I design and code beautiful, user-centric web experiences.</span>
			</h3>
			<div className="home__content__img"></div>
			<div className="home__content__social">
				<span>Twitter,etc.</span>
			</div>
		</div>
	</div>
);

export default Hero;