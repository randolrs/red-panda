import React, { Component}  from 'react';
import ProjectData from '../../data/projects';
import Project from './project';

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
	    				<img src="/Shane.png" className="home__content__img"/>
	    				<h1><span>Recent Projects</span></h1>
	    				<div>
						</div>
					</div>
    			</div>
    			<div className="content">
					<section>
						<h2 className="centered">Recent Projects</h2>
						{projects}
					</section>
				</div>
			</div>
		)
    }
}

export default Projects;