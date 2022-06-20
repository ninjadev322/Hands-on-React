import React from 'react';
import PropTypes from 'prop-types';
import { Project } from './Project';

ProjectList.propTypes = {
    projects: PropTypes.arrayOf(PropTypes.instanceOf(Project)).isRequired
}
function ProjectList({ projects }) {
    return <pre>{JSON.stringify(projects, null, ' ')}</pre>
}

export default ProjectList;