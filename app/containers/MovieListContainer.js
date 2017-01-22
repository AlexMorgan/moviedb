import React, { Component } from 'react'
import { getMoviesList } from '../utils/helpers'
import { Link } from 'react-router'
import MovieList from '../components/MovieList'

class MovieListContainer extends Component {
    constructor () {
        super()
        this.state = {
            movies: [],
            page: 1,
            isLoading: true
        }
    }

    async componentDidMount () {
        try {
            const movies = await getMoviesList(this.state.page);
            this.setState({movies, isLoading: false});
        } catch(error) {
            console.warn('Error in MovieListContainer: ', error)
        }
    }

    handlePaginationNext() {
        const nextPage = this.state.page + 1
        this.setState({page: nextPage})
        console.log(this.state.page)
    }

    render () {
        return (
            <section>
                <h1 className="page-title page-title--center">Now Playing</h1>
                <MovieList movies={this.state.movies} isLoading={this.state.isLoading} />
                <button onClick={ this.handlePaginationNext.bind(this) }>Page 2</button>
            </section>
        )
    }
}

export default MovieListContainer;
