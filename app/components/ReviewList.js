import React, {PropTypes} from 'react'
import Review from './Review'

const ReviewList = ({reviews}) => {
    const listItems = reviews.results.map((review) => {
        return (
            <Review key={review.id} content={review.content} author={review.author}/>
        )
    })

    return (
        <div className="list-container">
            <h2 className="section-title">Reviews:</h2>
            {listItems}
        </div>
    )
}

ReviewList.propTypes = {
    reviews: PropTypes.array.isRequired
}

export default ReviewList
