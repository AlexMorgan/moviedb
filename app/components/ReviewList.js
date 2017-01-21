import React, {PropTypes} from 'react'
import Review from './Review'

const ReviewList = ({reviews}) => {
    const listItems = reviews.results.map((review) => {
        return (
            <Review key={review.id} content={review.content} author={review.author}/>
        )
    })

    return (
        <div>
            <h1>Reviews:</h1>
            {listItems}
        </div>
    )
}

export default ReviewList
