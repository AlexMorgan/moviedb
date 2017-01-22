import React from 'react'
import Movie from './Movie'
import Loading from './Loading'

const MovieList = ({movies, isLoading}) => {
    if (isLoading === true) {
        return (
            <Loading />
        )
    }

    let movieList = movies.map((movie) => {
        return <Movie key={movie.id} movie={movie} />
    })

    return (
        <div>
            { movieList }
        </div>
    )
}

export default MovieList
