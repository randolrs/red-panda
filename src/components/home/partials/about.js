import React, { Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const About = (props) => (
	<div className="about centered">
		<div className="about__content">
			<h3 className="about__content__header">
				<span>Hello, I'm Shane. Happy you're here</span>
			</h3>
			<p>
				<span>Since beginning my career 7 years ago, I've worked with ....</span>
			</p>

			<p>
				<span>... philospohy to produce clean, high-performance, well-tested code</span>
			</p>
			<h4>How can I help you today?</h4>
			<div>
				<span>CTAs</span>
			</div>
		</div>
	</div>
);

export default About;