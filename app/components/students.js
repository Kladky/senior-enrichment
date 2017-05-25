import React from 'react';
import NewStudentContainer from '../containers/NewStudentContainer';
import { Link } from 'react-router';

export default function Students (props) {
    return (
      <div>
          <h4>THIS IS THE STUDENTS</h4>
          <NewStudentContainer />
          <div>
            {
              props.students && props.students.map(student => (
                <div key={ student.id }>
                  <img src="http://placehold.it/100x100" alt="" />
                  <h5>{ student.name }</h5>
                  <span className="del-button" onClick={ () => props.removeStudent(student.id) }><i className="fa fa-trash"></i></span>
                  <Link to={`/student/${student.id}`}><span className="edit-button"><i className="fa fa-eye"></i></span></Link>
                  <p>{ student.email }</p>
                  <p>Studies at: { student.campus.name }</p>
                </div>
              ))
            }
          </div>
        </div>
    );
}