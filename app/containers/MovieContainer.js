import React, { Component } from 'react'
import { getMoviesList } from '../utils/helpers'
import { Link } from 'react-router'

class MovieContainer extends Component {
    constructor () {
        super()
        this.state = {
            movies: []
        }
    }

    async componentDidMount () {
        try {
            const movies = await getMoviesList();
            this.setState({movies});
        } catch(error) {
            console.warn('Error in MovieContainer: ', error)
        }
    }

    render () {
        let movieList = this.state.movies.map((movie, i) => {
            let linkPath = `/movie/${movie.id}`;

            return (
                <div className="movie-tout col-sm-6 col-md-4 col-lg-3" key={ movie.id }>
                    <Link to={ linkPath }>
                        <img className="movie-tout__poster" src={ `http://image.tmdb.org/t/p/w185/${movie.poster_path}` } />
                        <h3 className="movie-tout__title">{ movie.title }</h3>
                    </Link>
                </div>
            )
        })

        return (
            <section>
                <h1>Now Playing</h1>
                { movieList }
            </section>
        )
    }
}

export default MovieContainer;
