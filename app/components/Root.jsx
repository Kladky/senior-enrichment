import React, { Component } from 'react';
import Nav from './Nav';

export default function App ({ children }) {
  return (
    <div id="main" className="container-fluid">
        <Nav />
        <div className="col-xs-10">
          { children }
        </div>
    </div>
  )
}

