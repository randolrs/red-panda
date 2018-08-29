import React, { Component}  from 'react';

class Project extends Component {    
	constructor(props) {
		super(props);
	};
	render() {
		let project = this.props.project;
		return (
			<div className="card resume-entry">
				<div className="resume-entry__image">
					<img src={project.img_src} />
					{project.moreDetails &&
						<div>
							<span className="button__grey">More Details</span>
						</div>
					}
				</div>
				<div className="resume-entry__data">
					<div className="card__header">
						<div className="card__title">
							<span className="resume-entry__data__company">{project.name}</span><br />
							<a
								className="resume-entry__data__company-link"
								href={project.url}
								target="_blank"
							>{project.url_label}</a>
						</div>
						<div className="card__upper-right">
							<span className="resume-entry__data__dates">{project.datesLabel}</span><br/>
							<span className="resume-entry__data__dates-description">{project.datesLabelDescription}</span>
						</div>
					</div>
					<div className="card__summary">
						<span>{project.summary}</span>
					</div>
					<ul>
						{project.bulletPoints.map(function(bulletPoint, index){
							return <li key={ index }>{bulletPoint}</li>;
						})}
					</ul>
				</div>
			</div>
		);
    }
}

export default Project;