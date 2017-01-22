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
            filter: 'now_playing',
            isLoading: true
        }
    }

    async componentDidMount () {
        try {
            const movies = await getMoviesList(this.state.page, this.state.filter);
            this.setState({movies, isLoading: false});
        } catch(error) {
            console.warn('Error in MovieListContainer: ', error)
        }
    }

    async handlePaginationClick () {
        const nextPage = arguments[0] === 'back' ? this.state.page - 1 : this.state.page + 1

        try {
            const movies = await getMoviesList(nextPage, this.state.filter);
            this.setState({
                page: nextPage,
                movies
            })
        } catch(error) {
            console.warn('Error in handlePaginationClick: ', error)
        }
    }

    async handleSelect (event) {
        const filter = event.target.value

        try {
            const movies = await getMoviesList(this.state.page, filter);
            this.setState({
                filter,
                movies
            })
        } catch(error) {
            console.warn('Error in handleSelect: ', error)
        }
    }

    render () {
        return (
            <section>
                <select className="filter" onChange={this.handleSelect.bind(this)}>
                    <option value="now_playing">Now Playing</option>
                    <option value="top_rated">Top Rated</option>
                    <option value="upcoming">Coming Soon</option>
                </select>
                <MovieList movies={this.state.movies} isLoading={this.state.isLoading} />
                <div className="pagination">
                    {this.state.page > 1 &&
                        <button className="btn" onClick={ this.handlePaginationClick.bind(this, 'back') }>Back</button>
                    }
                    <button className="btn" onClick={ this.handlePaginationClick.bind(this, 'next') }>Next</button>
                </div>
            </section>
        )
    }
}

export default MovieListContainer;
