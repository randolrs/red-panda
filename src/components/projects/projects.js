import React, { Component}  from 'react';
import ProjectData from '../../data/projects';
import Project from './project';
import { Link } from "react-router-dom";

class Projects extends Component {    
	render() {
		let projects = ProjectData.map((project) => {
			return(
				<Project project={project} key={project.id}></Project>
			);
		});
    	return (
			<div>
				<div className="page-header centered">
    				<div className="page-header__content centered">	
	    				<h1><span>Recent Projects</span></h1>
	    				<h2>Synopsis: I've been designing and developing front-ends for cutting-edge cryptocurrency/blockchain commerce projects.</h2>
	    				<div>
						</div>
					</div>
    			</div>
    			<div className="content">
					<section>
						{projects}
					</section>
					<div>
						<div className="content__read-more-cta centered">
							<span>Interested in my resumé/work history?</span>
							<br />
							<Link 
								to="/resume"
								className="content__read-more-cta__button"
							>
								<span>Check out my resumé/CV</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		)
    }
}

export default Projects;