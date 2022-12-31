import React from 'react'
import { Link } from 'react-router-dom';

const ProjectDisplay = ({project}) => {
    const displaykeywords = (keywords) => {
        let result = [];

        for(let i = 0; i < keywords.length; i++){
            result.push(
                <span className='pr-3'>{keywords[i]}</span>
            )
        }

        return result;
    }

    return (
        <div>
            <h1>{project.title}</h1>
            <div>
                {displaykeywords(project.keywords)}
            </div>
            <div>
                {project.description}
            </div>
            <a href = {project.document_link}>Link</a>
            <hr/>
        </div>
    )
}

export default ProjectDisplay