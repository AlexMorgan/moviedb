import React from 'react'
import { Link } from 'react-router'
require('../styles/Movie.scss')

const Movie = ({movie}) => {
    let linkPath = `/movie/${movie.id}`;
    return (
        <div className="movie-tout col-sm-6 col-md-4 col-lg-3">
            <Link to={ linkPath }>
                <img className="movie-tout__poster" src={ `http://image.tmdb.org/t/p/w185/${movie.poster_path}` } />
                <h3 className="movie-tout__title">{ movie.title }</h3>
            </Link>
        </div>
    )
}

export default Movie
