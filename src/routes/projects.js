import React from 'react'
import ProjectDisplay from '../component/projectDisplay'

import nepaliLM from '../assets/project_pdf/nepali_lm.pdf';
import FTD from "../assets/project_pdf/Fourier_transform_drawing.pdf";

const projects = () => {
    const projectsList = [
        {
            "title": "Nepali Language Processing",
            "keywords": ["NLP", "Pytorch", "Tensorflow", "Word Embeddings", "Bert", "GPT2"],
            "description": "This project is built in order to explore the natural language processing field and understand the working of transformers and their uses to develop various cool projects like language models, text summarization, text classification and more. We have developed sentimental classification model, word vectors for nepali words, probabilistic language model and GPT2-based language model for nepali language in this project and the work is on going.",
            "document_link" : nepaliLM,
            "github_link" : "https://github.com/NirajanBekoju/Nepali-Language-Processing",
        },
        {
            "title": "Fourier Transform Drawing",
            "keywords": ["Fourier Series", "DFT", "Epicycles"],
            "description": "Fourier series is an expansion of a periodic function in terms of an infinite sum of sines and cosines. Fourier series make use of the orthogonality relationships of the sine and cosine functions. With appropriate weights, one cycle or period of the summation can be made to approximate an arbitrary function in that interval. In mathematics, the discrete-time fourier transform (DTFT) is a form of Fourier analysis that is applicable to the sequence of values. The DTFT is often used to analyze samples of a continuous function. The term discrete-time refers to the fact that the transform operates on discrete data, often samples whose interval has units of time. In this program, we are going to use discrete fourier transform in order to generate the fourier series of the given discrete coordinate data. In mathematics, the discrete Fourier Transform (DFT) converts a finite sequence of equally-spaced samples of function into a same-length sequence of equal-spaced samples of the discrete-time fourier transform(DTFT), which is a complex valued function of frequency.",
            "document_link" : FTD,
            "github_link" : "https://github.com/NirajanBekoju/Fourier-Transform-Drawing",
        },
        {
            "title" : "Epidemic Modelling", 
            "keywords" : ["SIR Model", "C++", "OpenGL", "Data Analysis", "Data Visualization"],
            "description" : "(Compartmental Model in Epidemiology ) Epidemic modelling is the mathematical model to illustrate the spread of epidemic disease. We have use SIR model in order to study the epidemic disease transmission. SIR model is a compartmental model in epidemiology. In this model, the population is assigned to compartments with labels - for example :- S, I or R(SUSCEPTIBLE, INFECTIOUS or RECOVERED). People may progress between compartments.",
            "document_link" : "", 
            "github_link" : "https://github.com/NirajanBekoju/Epidemic-Modelling"
        },
        {
            "title" : "Malignant and Benign Tumor Diagnosis",
            "keywords" : ["Tumor", "pandas", "seaborn", "sk-learn", "Keras"],
            "description" : "Using the dataset obtained from kaggle for malignant and benign tumor diagonosis, in this project a model is built to predict the type of tumor and obtained 97.902% validation accuracy using keras sequential model.",
            "document_link" : "",
            "github_link" : "https://github.com/NirajanBekoju/Malignant-and-Benign-Tumor-Diagnosis"
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