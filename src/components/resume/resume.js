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
					<div>
						{resume}
					</div>

					<div>
						<span>Projects CTA</span>
					</div>
				</div>
			</div>
		)
    }
}

export default Resume;