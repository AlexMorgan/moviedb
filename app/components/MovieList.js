import React, {PropTypes} from 'react'
import Movie from './Movie'
import Loading from './Loading'

const MovieList = ({movies, isLoading}) => {
    if (isLoading === true) {
        return (
            <Loading />
        )
    }

    let movieList = movies.map((movie) => {
        return <Movie key={movie.id} id={movie.id} title={movie.title} posterPath={movie.poster_path} />
    })

    return (
        <div>
            { movieList }
        </div>
    )
}

MovieList.propTypes = {
    movies: PropTypes.array.isRequired
}

export default MovieList
