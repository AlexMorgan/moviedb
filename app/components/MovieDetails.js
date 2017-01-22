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

    const imagePath = 'http://image.tmdb.org/t/p/w185/'
    const posterPath = imagePath + movie.poster_path

    return (
        <section className="movie-details">
            <div className="movie-details__container">
                <img className="movie-details__poster" src={ posterPath } />
                <div className="movie-details__info">
                    <h1 className="movie-details__title">{ movie.title }</h1>
                    <h3>{ movie.tagline }</h3>
                    <p>{ movie.overview }</p>
                    <p>Release Date: { moment(movie.release_date).format('MMMM Do YYYY') }</p>
                    <h6>Average Rating: { movie.vote_average }</h6>
                    <ul className="genre-list">{ genreList }</ul>
                </div>
            </div>
            { reviews.total_results > 0 ? <ReviewList reviews={reviews} /> : "This movie has no reviews" }
        </section>
    )
}

MovieDetails.propTypes = {
    movie: PropTypes.object.isRequired,
    reviews: PropTypes.object.isRequired
}

export default MovieDetails
