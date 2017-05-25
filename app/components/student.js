import React from 'react';
import { Link } from 'react-router';

export default function Student (props) {
    const selectedStudent = props.selected;
    console.log(selectedStudent);

    return (
      <div>
        <h4>THIS IS THE STUDENT</h4>
        <div>
            <div>
              <img src="http://placehold.it/100x100" alt="" />
              <h5>{ selectedStudent.name }</h5>
              <span className="del-button"><i className="fa fa-trash"></i></span>
              <span className="edit-button"><i className="fa fa-pencil"></i></span>
              <p>{ selectedStudent.email }</p>
              <p>Studies at: { selectedStudent.name }</p>
            </div>
        </div>
      </div>
    );
}