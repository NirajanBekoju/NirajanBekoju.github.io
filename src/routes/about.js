import React from 'react'
import portfolioImage from '../assets/image/pp.jpg'

function about() {
    return (
        <section class="pt-4">
            <div class="container">
                <div class="row">
                    <div className='col-md-9'>
                        <h1>Nirajan Bekoju</h1>

                        <p class="text-justify">
                            As a computer engineering student, I have an interest in linear algebra, multi-variable calculus, probability, and statistics.  Currently, I am learning machine learning and deep learning and studying CNNs, sequential models like RNNs, GRUs, and LSTMs. My programming languages of interest are Python, C, C++, Octave and Julia. I would love to explore Reinforcement Learning.
                        </p>
                        <p>
                            I have been working on nepali language processing to develop language model for sentimental classification, text auto - generation and summarization.
                        </p>
                        <p>
                            Other than technical aspects, I enjoy listening instumental music(mostly classical), playing flute, cycling, walking, meditation, and spending time without doing anything.I love studying history, religion and philosophy. As of now, my favorite anime are One piece and Attack on Titan.
                        </p>
                        <p>
                            <span className='font-weight-bold'>Favourite Quotes: </span>"A man is made by his beliefs. As he believes. So he becomes." - Lord Krishna
                        </p>
                    </div>
                    <div className='col-md-2'>
                        <img src={portfolioImage} alt="Portfolio image" />
                    </div>
                    {/* <div style={{clear:"both"}}></div> */}
                </div>
            </div>
        </section>
    )
}

export default about







