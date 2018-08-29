import React, { Component}  from 'react';

class ResumeEntry extends Component {    
	constructor(props) {
		super(props);
	};
	render() {
		let resumeEntry = this.props.resumeEntry;
		return (
			<div className="card resume-entry">
				<div className="resume-entry__image">
					<img src={resumeEntry.img_src} />
					{resumeEntry.moreDetails &&
						<div>
							<span className="button__grey">More Details</span>
						</div>
					}
				</div>
				<div className="resume-entry__data">
					<div className="card__header">
						<div className="card__title">
							<span className="resume-entry__data__company">{resumeEntry.company}</span><br />
							<a
								className="resume-entry__data__company-link"
								href={resumeEntry.company_url}
								target="_blank"
							>{resumeEntry.company_url_label}</a>
						</div>
						<div className="card__upper-right">
							<span className="resume-entry__data__dates">{resumeEntry.datesLabel}</span><br/>
							<span className="resume-entry__data__dates-description">{resumeEntry.datesLabelDescription}</span>
						</div>
					</div>
					<div className="card__summary">
						<span>{resumeEntry.summary}</span>
					</div>
					<ul>
						{resumeEntry.bulletPoints.map(function(bulletPoint, index){
							return <li key={ index }>{bulletPoint}</li>;
						})}
					</ul>
				</div>
			</div>
		);
    }
}

export default ResumeEntry;