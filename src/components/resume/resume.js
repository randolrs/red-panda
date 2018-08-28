import React, { Component}  from 'react';
import ResumeData from '../../data/resume';

class Resume extends Component {    
	render() {
		let workList = ResumeData.map((resumeEntry) => {
			if(resumeEntry.type == 'work') {
				return (
					<div class="card resume-entry">
						<div class="resume-entry__image">
							<img src={resumeEntry.img_src} />
						</div>
						<div class="resume-entry__data">
							<div class="card__header">
								<div className="card__title">
									<span className="resume-entry__data__company">{resumeEntry.company}</span><br />
									<a
										className="resume-entry__data__company-link"
										href={resumeEntry.company_url}
										target="_blank"
									>{resumeEntry.company_url_label}</a>
								</div>
								<div className="card__upper-right">
									<span class="resume-entry__data__dates">{resumeEntry.datesLabel}</span><br/>
									<span class="resume-entry__data__dates-description">{resumeEntry.datesLabelDescription}</span>
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
		});

		let eduList = ResumeData.map((resumeEntry) => {
			if(resumeEntry.type == 'edu') {
				return (
					<div class="card resume-entry">
						<div class="resume-entry__image">
							<img src={resumeEntry.img_src} />
						</div>
						<div class="resume-entry__data">
							<div class="card__header">
								<div className="card__title">
									<span className="resume-entry__data__company">{resumeEntry.company}</span><br />
									<a
										className="resume-entry__data__company-link"
										href={resumeEntry.company_url}
										target="_blank"
									>{resumeEntry.company_url_label}</a>
								</div>
								<div className="card__upper-right">
									<span class="resume-entry__data__dates">{resumeEntry.datesLabel}</span><br/>
									<span class="resume-entry__data__dates-description">{resumeEntry.datesLabelDescription}</span>
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
		});
		let communityList = ResumeData.map((resumeEntry) => {
			if(resumeEntry.type == 'community') {
				return (
					<div class="card resume-entry">
						<div class="resume-entry__image">
							<img src={resumeEntry.img_src} />
						</div>
						<div class="resume-entry__data">
							<div class="card__header">
								<div className="card__title">
									<span className="resume-entry__data__company">{resumeEntry.company}</span><br />
									<a
										className="resume-entry__data__company-link"
										href={resumeEntry.company_url}
										target="_blank"
									>{resumeEntry.company_url_label}</a>
								</div>
								<div className="card__upper-right">
									<span class="resume-entry__data__dates">{resumeEntry.datesLabel}</span><br/>
									<span class="resume-entry__data__dates-description">{resumeEntry.datesLabelDescription}</span>
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
		});
		let resumeGoogleDocsLink = 'https://drive.google.com/file/d/1BdNGmUMf6u81FuullmebrL0x_E3xFlmz/view?usp=sharing'; 
		let resumeTLDR = 'Front-end software developer. 7 years of experience. Currently the lead front-end developer for a digital-native currency (i.e. Bitcoin) eCommerce company.';
    	return (
    		<div>
    			<div className="page-header centered">
    				<div className="page-header__content centered">	
	    				<img src="/Shane.png" className="home__content__img"/>
	    				<h1><span>My Resume</span></h1>
	    				<h2><span>TLDR: {resumeTLDR}</span></h2>
	    				<div>
		    				<a
								href={resumeGoogleDocsLink}
								target="_blank"
								className="content__main-cta"
							>
								<span>View/Download Google Docs Version (PDF)</span>
							</a>
						</div>
					</div>
    			</div>
				<div className="content">
					<section>
						<h2 class="centered">Professional Experience</h2>
						{workList}
					</section>
					<section>
						<h2 class="centered">Community</h2>
						{communityList}
					</section>
					<section>
						<h2 class="centered">Education</h2>
						{eduList}
					</section>

					<div>
						<span>Projects CTA</span>
					</div>
				</div>
			</div>
		)
    }
}

export default Resume;