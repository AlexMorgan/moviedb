import React, {PropTypes} from 'react'
import { Link } from 'react-router'
require('../styles/Movie.scss')

const Movie = ({title, posterPath, id}) => {
    const linkPath = `/movie/${id}`;
    return (
        <div className="movie-tout col-sm-6 col-md-4 col-lg-3">
            <Link to={ linkPath }>
                <img className="movie-tout__poster" src={ `http://image.tmdb.org/t/p/w185/${posterPath}` } />
                <h3 className="movie-tout__title">{ title }</h3>
            </Link>
        </div>
    )
}

Movie.propTypes = {
    posterPath: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
}

export default Movie
