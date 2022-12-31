import React from 'react'
import ProjectDisplay from '../component/projectDisplay'

import nlpPDF from '../assets/project_pdf/nlp.pdf';

const projects = () => {
    const projectsList = [
        {
            "title": "Nepali Language Processing",
            "keywords": ["NLP", "Pytorch", "Tensorflow"],
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "document_link" : nlpPDF
        },
        {
            "title": "Nepali Processing",
            "keywords": ["NLP", "Pytorch", "Tensorflow"],
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "document_link" : nlpPDF
        }
    ];

    const displayProject = () => {
        let display = [];
        let result = [];

        projectsList.map(project => {
            return display.push(
                <ProjectDisplay project = {project} key = {project.title} />)
        })

        for(let i = 0; i < projectsList.length; i+=1){
            result.push(
                <div className='project'>{display[i]}</div>
            )
        }
        console.log("result : ", result);
        return result;
    }

    return (
        <section>
            <div className='container pt-3'>
                <div className='row'>
                    <h1>Projects</h1>
                    <hr />
                    {projectsList.length > 0 ? displayProject() : "No Projects"}
                </div>
            </div>
        </section>
    )
}

export default projects