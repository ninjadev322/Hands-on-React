import React from 'react';
import PropTypes from 'prop-types';
import { Project } from './Project';

ProjectList.propTypes = {
    projects: PropTypes.arrayOf(PropTypes.instanceOf(Project)).isRequired
}
function ProjectList({ projects }) {
    // return <pre>{JSON.stringify(projects, null, ' ')}</pre>
    return (
        <div className="row">
            {projects.map((project) => (
                <div key={project.id} className="cols-sm">
                    <div className='card'>
                        <img src={project.imageUrl} alt={project.name} />
                        <section className='section dark'>
                            <h5 className='strong'>
                                <strong>{project.name}</strong>
                            </h5>
                            <p>{project.description}</p>
                            <p>Budget : {project.budget.toLocaleString()}</p>
                        </section>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProjectList;