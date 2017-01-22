import React, { Component } from 'react'
import Movie from '../components/Movie'
import { getMoviesList } from '../utils/helpers'
import { Link } from 'react-router'

class MovieContainer extends Component {
    constructor () {
        super()
        this.state = {
            movies: [],
            page: 1
        }
    }

    async componentDidMount () {
        try {
            const movies = await getMoviesList(this.state.page);
            this.setState({movies});
        } catch(error) {
            console.warn('Error in MovieContainer: ', error)
        }
    }

    handlePaginationNext() {
        const nextPage = this.state.page + 1
        this.setState({page: nextPage})
        console.log(this.state.page)
    }

    render () {
        let movieList = this.state.movies.map((movie) => {
            return (
                <Movie key={movie.id} movie={movie} />
            )
        })

        return (
            <section>
                <h1 className="page-title page-title--center">Now Playing</h1>
                { movieList }
            </section>
        )
    }
}

export default MovieContainer;
