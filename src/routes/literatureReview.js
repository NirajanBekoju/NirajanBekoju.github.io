import React from 'react'
import ReviewDisplay from '../component/reviewDisplay';

import review_list from '../data/literature_review';

function literatureReview() {
  

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


