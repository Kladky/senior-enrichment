import React from 'react';
import { Link } from 'react-router';

export default function Nav (props) {
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <div>
            <Link to="/campuses">campuses</Link>
            <Link to="/students">students</Link>
          </div>
        </div>
      </nav>
    );
}