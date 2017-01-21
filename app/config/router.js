import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Main from '../components/Main'
import Home from '../components/Home'
import MovieDetailsContainer from '../containers/MovieDetailsContainer'

const routes = (
    <Router history={hashHistory}>
        <Route path='/' component={ Main }>
            <IndexRoute component={ Home } />
            <Route path='/movie/:movieId' component={ MovieDetailsContainer } />
        </Route>
    </Router>
);

export default routes;
