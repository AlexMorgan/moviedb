import React from 'react'
import { Link } from 'react-router'
import Nav from './Nav'

const Main = React.createClass({
    render () {
        return (
            <div className='main-container'>
                <Nav />
                {this.props.children}
            </div>
        )
    }
})

export default Main
