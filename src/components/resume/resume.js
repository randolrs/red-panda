import React, { Component}  from 'react';
import ResumeData from '../../data/resume';
import ResumeEntry from './resume-entry';
import { Link } from "react-router-dom";
import Skills from '../skills/skills';
import Projects from '../projects/projects'

class Resume extends Component {    
	render() {
		let workList = ResumeData.map((resumeEntry) => {
			if(resumeEntry.type == 'work') {
				return(
					<ResumeEntry resumeEntry={resumeEntry} key={resumeEntry.id}></ResumeEntry>
				);
			};
		});

		let eduList = ResumeData.map((resumeEntry) => {
			if(resumeEntry.type == 'edu') {
				return(
					<ResumeEntry resumeEntry={resumeEntry} key={resumeEntry.id}></ResumeEntry>
				);
			};
		});
		let communityList = ResumeData.map((resumeEntry) => {
			if(resumeEntry.type == 'community') {
				return(
					<ResumeEntry resumeEntry={resumeEntry} key={resumeEntry.id}></ResumeEntry>
				);
			}
		});
		let resumeGoogleDocsLink = 'https://drive.google.com/file/d/1zUTA7xhxrsJMhp6ce2ydCCFepIK9gSyJ/view?usp=sharing'; 
		let resumeTLDR = 'Front-end software developer. 7 years of experience. Currently the lead front-end developer for a digital-native currency (i.e. Bitcoin) eCommerce company.';
    	return (
    		<div>
    			<div className="page-header centered">
    				<div className="page-header__content centered">	
	    				<img src="/Shane.png" className="home__content__img"/>
	    				<h1><span>My Resume</span></h1>
	    				<h2><span>Synopsis: {resumeTLDR}</span></h2>
	    				<div class="page-header__content__cta-container">
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
						<h2 className="centered">Professional Experience</h2>
						{workList}
					</section>
					<section>
						<h2 className="centered">Community</h2>
						{communityList}
					</section>
					<section>
						<h2 className="centered">Education</h2>
						{eduList}
					</section>
					
					<Projects></Projects>
					<Skills></Skills>

					<div>
						<div className="content__read-more-cta centered">
							<span>Interested in some of the recent projects I've worked on?</span>
							<br />
							<Link 
								to="/projects"
								className="content__read-more-cta__button"
							>
								<span>Check out my recent projects</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		)
    }
}

export default Resume;