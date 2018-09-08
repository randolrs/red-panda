import React, {Component} from 'react';

class Headlines extends Component {
	render () {
		let headlineData = [
			{
				headline: '7 years',
				description: 'I have 7 years of experience producing well-tested, maintainable, high-performance code.'
			},
			{
				headline: 'Lead Front-end Developer',
				description: 'I am the lead front-end developer of a digital-native currency (i.e. Bitcoin, Ethereum/ERC20) eCommerce company.'
			},
			{
				headline: 'ReactJS/VueJS',
				description: 'I currently work primarily with ReactJS/Redux, VueJS/Vuex, Javascript (ES6), NodeJS, FlowJS, and REST API architectures.'
			}
		];

		let headlineComponents = headlineData.map((headline) => {
			return(
				<div className="headline-content__entry centered">
					<p className="headline-content__entry__header">{headline.headline}</p>
					<span className="headline-content__entry__description">{headline.description}</span>
				</div>
			);
		});
		return (
			<section>
				<div className="headline-container">
					<div className="headline-content">
						{headlineComponents}
					</div>
				</div>
			</section>
		)
	}
};

export default Headlines;