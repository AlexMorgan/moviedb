import React, { PropTypes } from 'react'
import ReviewList from './ReviewList'
import moment from 'moment'
import Loading from './Loading'
require('../styles/MovieDetails.scss')

const MovieDetails = ({movie, reviews, isLoading}) => {
    if (isLoading === true) {
        return (
            <Loading />
        )
    }

    const genreList = movie.genres.map((genre) => {
        return <li className="genre-list__item" key={genre.id}>{ genre.name }</li>
    })

    return (
        <section className="movie-details">
            <h1>{ movie.title }</h1>
            <h3>{ movie.tagline }</h3>
            <h6>Average Rating: { movie.vote_average }</h6>
            <img src={ `http://image.tmdb.org/t/p/w185/${movie.poster_path}` } />
            <p>Release Date: { moment(movie.release_date).format('MMMM Do YYYY') }</p>
            <ul className="genre-list">{ genreList }</ul>
            { reviews.total_results > 0 ? <ReviewList reviews={reviews} /> : "This movie has no reviews" }
        </section>
    )
}

MovieDetails.propTypes = {
    movie: PropTypes.object.isRequired,
    reviews: PropTypes.object.isRequired
}

export default MovieDetails
