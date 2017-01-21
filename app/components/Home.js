import React from 'react'
import { Link } from 'react-router'
import MainContainer from './MainContainer'
import MovieContainer from '../containers/MovieContainer'

const Home = React.createClass({
    render: function() {
        return (
            <MainContainer>
                <MovieContainer />
            </MainContainer>
        )
    }
});

export default Home
