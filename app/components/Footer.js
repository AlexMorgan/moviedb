import { Link } from 'react-router'
import React from 'react'
require('../styles/Footer.scss')

const Footer = () => {
    return (
        <footer>
            <div>
            <Link to="/">
                The Movie DB
            </Link>
            </div>
        </footer>
    )
}

export default Footer
