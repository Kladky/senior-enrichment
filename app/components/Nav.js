import React from 'react';
import { Link } from 'react-router';

export default function Nav (props) {
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <ul>
              <li>
                <Link to="/students">Students</Link>
              </li>
              <li>
                <Link to="/campuses">Campuses</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}