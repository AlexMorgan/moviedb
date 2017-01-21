import React, { Component } from 'react'
import MovieDetails from '../components/MovieDetails'
import MainContainer from '../components/MainContainer'
import { movieInfo } from '../utils/helpers'

class MovieDetailsContainer extends Component {
    constructor () {
        super()
        this.state = {
            movie: {},
            reviews: {}
        }
    }

    async componentDidMount () {
        try {

            const data = await movieInfo(this.props.params.movieId)

            this.setState({
                movie: data[0],
                reviews: data[1]
            })
            console.log('movie details: ', this.state.movie)
        } catch(error) {
            console.warn('Error in MovieDetailsContainer: ', error)
        }
    }

    render () {
        return (
            <MainContainer>
                <MovieDetails movie={this.state.movie} reviews={this.state.reviews} />
            </MainContainer>
        )
    }
}
export default MovieDetailsContainer
