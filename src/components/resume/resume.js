import React, { Component}  from 'react';
import ResumeData from '../../data/resume';

class Resume extends Component {    
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
				<h1><span>Resume</span></h1>
				<h2><span>TLDR: I am a front-end developer that has shipped clean, high performance, well-tested code for 6 years</span></h2>
				<div>
					{resume}
				</div>

				<div>
					<span>Projects CTA</span>
				</div>
			</div>
		)
    }
}

export default Resume;