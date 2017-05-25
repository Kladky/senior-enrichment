import React from 'react';
import NewCampusContainer from '../containers/NewCampusContainer';
import { Link } from 'react-router';

export default function Campuses (props) {
    return (
        <div>
          <h4>THIS IS THE CAMPUSES</h4>
          <NewCampusContainer />
          <div>
            {
              props.campuses && props.campuses.map(campus => (
                <div key={ campus.id }>
                  <h5>{ campus.name } <button className="del-button" onClick={ () => props.removeCampus(campus.id) }>X</button></h5>
                  <p>{ campus.location }</p>
                  <p>{ campus.description }</p>
                  <ul>
                  {
                    campus.students && campus.students.map(student => (
                        <li key={ student.id }>{ student.name }</li>
                    ))
                  }
                  </ul>
                </div>
              ))
            }
          </div>
        </div>
    );
}