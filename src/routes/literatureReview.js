import React from 'react'

import nlpPDF from '../assets/project_pdf/nlp.pdf';
import ReviewDisplay from '../component/reviewDisplay';

function literatureReview() {
  const review_list = [
    {
      "title": "Attention is all you need",
      "tag": ["Transformers", "Language Model"],
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 
      "review_link": nlpPDF,
      "original_link" : nlpPDF,
    },
    {
      "title": "is all you need",
      "tag": ["Transformers"],
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "review_link": nlpPDF,
      "original_link" : nlpPDF,
    }
  ];

  const displayReview = () => {
    let display = [];
    let result = [];

    review_list.map(review => {
      return display.push(
        <ReviewDisplay review={review} key={review.title} />)
    })

    for (let i = 0; i < review_list.length; i += 1) {
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
          <h1>Literature Review</h1>
          <hr/>
          {review_list.length > 0 ? displayReview() : "No review"}
        </div>
      </div>
    </section>
  )
}

export default literatureReview