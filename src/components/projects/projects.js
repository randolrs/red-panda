import React, { Component}  from 'react';
import ResumeData from '../resume/data/resume';

class Project extends Component {    
	render() {
		let resume = ResumeData.map((resumeEntry) => {
			return (
				<div class="card">
					<p>{resumeEntry.company}</p>
					<p>{resumeEntry.description}</p>
					<p>{resumeEntry.description}</p>
				</div>
			);
		}); 
    	return (
			<div className="content">
				<h1><span>Projects</span></h1>
				<h2><span>TLDR: I've worked on ... </span></h2>
				<div>
					{resume}
				</div>

				<div>
					<span>Resume CTA</span>
				</div>
			</div>
		)
    }
}

export default Project;