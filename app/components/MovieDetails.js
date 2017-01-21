import React, { PropTypes } from 'react'
import ReviewList from './ReviewList'
import moment from 'moment'

const MovieDetails = ({movie, reviews}) => (
    <section className="movie-details">
        <h1>{ movie.title }</h1>
        <h3>{ movie.tagline }</h3>
        <h6>Average Rating: { movie.vote_average }</h6>
        <img src={ `http://image.tmdb.org/t/p/w185/${movie.poster_path}` } />
        <p>Release Date: { moment(movie.release_date).format('MMMM Do YYYY') }</p>

        { reviews.total_results > 0 ? <ReviewList reviews={reviews} /> : "This movie has no reviews" }
    </section>
)

MovieDetails.propTypes = {
    movie: PropTypes.object.isRequired,
    reviews: PropTypes.object.isRequired
}

export default MovieDetails
