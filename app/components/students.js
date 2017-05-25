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
                  <h5>{ student.name }
                    <span className="del-button" onClick={ () => props.removeStudent(student.id) }><i className="fa fa-trash"></i></span>
                    <Link to={`/student/${student.id}`}><span className="edit-button"><i className="fa fa-pencil"></i></span></Link>
                  </h5>
                </div>
              ))
            }
          </div>
        </div>
    );
}