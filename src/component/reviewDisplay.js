import React from 'react'
import { Link } from 'react-router-dom';

const ReviewDisplay = ({review}) => {
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
            <h1>{review.title}</h1>
            <div>
                {displaykeywords(review.tag)}
            </div>
            <div>
                {review.description}
            </div>
            <a href = {review.review_link}>Review Link</a><br/>
            <a href = {review.original_link}>Original Paper</a>
            <hr/>
        </div>
    )
}

export default ReviewDisplay