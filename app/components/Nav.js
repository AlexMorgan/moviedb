import React from 'react'
import { Link } from 'react-router'

function Nav(props) {
    return (
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <div className="navbar-brand">
                <Link to="/">
                    MovieDB
                </Link>
              </div>
            </div>
          </div>
        </nav>
    )
}

export default Nav
