import React from 'react';
import { Link } from 'react-router';

export default function Campus (props) {
    const selectedCampus = props.selected;
    console.log(selectedCampus);

    return (
      <div>
        <h4>THIS IS THE CAMPUS</h4>
        <div>
            <div>
              <img src="http://placehold.it/100x100" alt="" />
              <h5>{ selectedCampus.name }</h5>
              <span className="del-button"><i className="fa fa-trash"></i></span>
              <span className="edit-button"><i className="fa fa-pencil"></i></span>
              <p>{ selectedCampus.location }</p>
              <p>{ selectedCampus.description }</p>
              <p>Students:</p>
              <ul>
              {
                selectedCampus.students && selectedCampus.students.map(student => (
                    <li key={ student.id }><Link to={`/student/${student.id}`}>{ student.name }</Link></li>
                ))
              }
              </ul>
            </div>
        </div>
      </div>
    );
}