import React from 'react'
import { Link } from 'react-router-dom';

const ProjectDisplay = ({ project }) => {
    const displaykeywords = (keywords) => {
        let result = [];

        for (let i = 0; i < keywords.length; i++) {
            result.push(
                <span className='bg-info text-dark mr3 p-1' style={{borderRadius: "10px"}}>{keywords[i]}</span>
            )
        }
        return result;
    }

    return (
        <div>
            <h2>{project.title}</h2>
            <div>
                <span className='font-weight-bold'>Keywords : </span>
                {displaykeywords(project.keywords)}
            </div>
            <div className='pt-3 pb-3'>
                {project.description}
            </div>
            <a href={project.document_link} className="btn btn-primary">Github Repository</a>
            <hr />
        </div>
    )
}

export default ProjectDisplay