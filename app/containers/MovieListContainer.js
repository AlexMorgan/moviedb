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

    async handlePaginationClick() {
        const nextPage = arguments[0] === 'back' ? this.state.page - 1 : this.state.page + 1
        const movies = await getMoviesList(nextPage);

        this.setState({
            page: nextPage,
            movies
        })
    }

    render () {
        return (
            <section>
                <h1 className="page-title page-title--center">Now Playing</h1>
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
