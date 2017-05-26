import React from 'react';
import { Link } from 'react-router';

export default function WrongPage (props) {
    return (
      <div className="error-container">
      <h1>????????????????</h1>
      <p>page not found!</p>
      <img src="/404.gif" />
      <p>Did you mean to go to <Link to="/campuses">campuses</Link> or <Link to="/students">students</Link>?</p>
      </div>
    );
}