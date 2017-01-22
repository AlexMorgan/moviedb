import React from 'react'
import { Link } from 'react-router'
import Nav from './Nav'
import Footer from './Footer'

const Main = React.createClass({
    render () {
        return (
            <div className='main-container'>
                <Nav />
                {this.props.children}
                < Footer />
            </div>
        )
    }
})

export default Main
