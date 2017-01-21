import React, {PropTypes} from 'react'
require('../styles/Review.scss')

const Review = ({content, author}) => {
    return (
        <div className="review">
            <p className="review__content">{ content }</p>
            <cite className="review__author">- { author }</cite>
        </div>
    )
}

export default Review
